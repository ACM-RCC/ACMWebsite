// src/pages/api/project.ts

import type { NextApiRequest, NextApiResponse } from "next";
import { db } from "@/lib/server/firebase-admin"
import { ACMMember } from "@/lib/types/members";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "POST") {
        try {
            const members: ACMMember[] = req.body;
            const batch = db.batch();
            members.forEach((project) => {
                const newDocRef = db.collection("members").doc(); // Admin SDK
                batch.set(newDocRef, { ...project, id: newDocRef.id });
            });

            await batch.commit();
            return res.status(200).json({ status: "saved", count: members.length });
        } catch (err) {
            console.error("POST /api/project error:", err);
            return res.status(500).json({ error: "Failed to save members" });
        }
    }

    if (req.method === "GET") {
        const { id } = req.query;

        if (typeof id === "string") {
            const docSnap = await db.collection("members").doc(id).get();
            if (!docSnap.exists) return res.status(404).json({ error: "Not found" });
            return res.status(200).json(docSnap.data());
        }

        const snapshot = await db.collection("members").get();
        const allmembers = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));
        return res.status(200).json(allmembers);
    }

    return res.status(405).end("Method Not Allowed");
}

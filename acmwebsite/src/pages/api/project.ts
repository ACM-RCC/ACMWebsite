// src/pages/api/project.ts

import type { NextApiRequest, NextApiResponse } from "next";
import { db } from "@/lib/server/firebase-admin"
import { ACMProject } from "@/lib/types/project";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "POST") {
        try {
            const projects: ACMProject[] = req.body;
            const batch = db.batch();
            projects.forEach((project) => {
                const newDocRef = db.collection("projects").doc(); // Admin SDK
                batch.set(newDocRef, { ...project, id: newDocRef.id });
            });

            await batch.commit();
            return res.status(200).json({ status: "saved", count: projects.length });
        } catch (err) {
            console.error("POST /api/project error:", err);
            return res.status(500).json({ error: "Failed to save projects" });
        }
    }

    if (req.method === "GET") {
        const { id } = req.query;

        if (typeof id === "string") {
            const docSnap = await db.collection("projects").doc(id).get();
            if (!docSnap.exists) return res.status(404).json({ error: "Not found" });
            return res.status(200).json(docSnap.data());
        }

        const snapshot = await db.collection("projects").get();
        const allProjects = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));
        return res.status(200).json(allProjects);
    }

    return res.status(405).end("Method Not Allowed");
}

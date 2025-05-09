// src/pages/api/members.ts

import type { NextApiRequest, NextApiResponse } from "next";
import { db } from "@/lib/server/firebase"
import { ACMMember } from "@/lib/types/members";
import { doc, setDoc, getDoc, getDocs, collection } from "firebase/firestore";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "POST") {
        try {
            const members: ACMMember[] = req.body;
            const writes = members.map((project) =>
                setDoc(doc(db, "members", project.id), project)
            );
            await Promise.all(writes);
            return res.status(200).json({ status: "saved", count: members.length });
        } catch {
            return res.status(500).json({ error: "Failed to save members" });
        }
    }

    if (req.method === "GET") {
        const { id } = req.query;

        if (typeof id === "string") {
            const snap = await getDoc(doc(db, "members", id));
            if (!snap.exists()) return res.status(404).json({ error: "Not found" });
            return res.status(200).json(snap.data());
        }

        const snapshot = await getDocs(collection(db, "members"));
        const allmembers = snapshot.docs.map((docSnap) => ({
            id: docSnap.id,
            ...docSnap.data(),
        }));
        return res.status(200).json(allmembers);
    }

    return res.status(405).end("Method Not Allowed");
}

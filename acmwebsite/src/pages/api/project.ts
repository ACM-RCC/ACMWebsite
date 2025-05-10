// src/pages/api/project.ts

import type { NextApiRequest, NextApiResponse } from "next";
import { db } from "@/lib/server/firebase"
import { ACMProject } from "@/lib/types/project";
import { doc, setDoc, getDoc, getDocs, collection } from "firebase/firestore";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "POST") {
        try {
            const projects: ACMProject[] = req.body;
            const collectionRef = collection(db, "projects");
            const writes = projects.map((project) => {
                // auto generate id
                const newDocRef = doc(collectionRef); 
                return setDoc(newDocRef, { ...project, id: newDocRef.id });
            });
            
            await Promise.all(writes);
            return res.status(200).json({ status: "saved", count: projects.length });
        } catch (err) {
            console.error("POST /api/project error:", err);
            return res.status(500).json({ error: "Failed to save projects" });
        }
    }

    if (req.method === "GET") {
        const { id } = req.query;

        if (typeof id === "string") {
            const snap = await getDoc(doc(db, "projects", id));
            if (!snap.exists()) return res.status(404).json({ error: "Not found" });
            return res.status(200).json(snap.data());
        }

        const snapshot = await getDocs(collection(db, "projects"));
        const allProjects = snapshot.docs.map((docSnap) => ({
            id: docSnap.id,
            ...docSnap.data(),
        }));
        return res.status(200).json(allProjects);
    }

    return res.status(405).end("Method Not Allowed");
}

// src/components/projects/ACMProjectList.tsx

// import types and functions used for the component here
import { ACMProject } from "@/lib/types/project";
import ACMProjectItem from "@/components/projects/ACMProjectItem";
import { useEffect, useState } from "react";
import { fetchProjects } from "@/lib/client/project";


export default function ACMProjectList() {
    const [acmProjects, setACMProjects] = useState<ACMProject[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchProjects();
                console.log(data);
                setACMProjects(data);
            } catch (err) {
                console.error("Error fetching replay data:", err);
                setError("Error loading project data.");
            }
        };

        fetchData();
    }, []); 

    if (error) {
        return <div>{error}</div>;
    }
   
    return (
        // grid - uses CSS grid layout
        // gap-1 - 0.25rem gap between grid items
        // sm:p-2 - 0.5rem padding on small screens and up
        // row-span-3 - spans 3 rows in grid parent
        // max-w-4xl - max width of 56rem
        // mx-auto - centers element horizontally
        // bg-gray-500 - light gray background
        <div className="grid gap-1 sm:p-2 row-span-3 max-w-4xl mx-auto">
            <>
            {/* foreach acmProject*/}
                {acmProjects.map((acmProject) => (
                    <ACMProjectItem key={acmProject.id} acmProject={acmProject}/>
                ))}
            </>
        </div>
    );
}
// src/components/projects/ACMProjectList.tsx

// import types and functions used for the component here
import { ACMProject } from "@/lib/types/project";
import ACMProjectItem from "@/components/projects/ACMProjectItem";


type ACMProjectListProps = {
    // contains the list of ACMProjects that this component shows
    acmProjects: ACMProject[]
};

export default function ACMProjectList({acmProjects}: ACMProjectListProps) {
    // TODO(project_page): Add tailwind styling based on the website theme
   
    return (
        // grid - uses CSS grid layout
        // gap-1 - 0.25rem gap between grid items
        // sm:p-2 - 0.5rem padding on small screens and up
        // row-span-3 - spans 3 rows in grid parent
        // max-w-4xl - max width of 56rem
        // mx-auto - centers element horizontally
        // bg-gray-500 - light gray background
        <div className="grid gap-1 sm:p-2 row-span-3 max-w-4xl mx-auto bg-gray-500">
            <>
            {/* foreach acmProject*/}
                {acmProjects.map((acmProject) => (
                    <ACMProjectItem key={acmProject.id} acmProject={acmProject}/>
                ))}
            </>
        </div>
    );
}
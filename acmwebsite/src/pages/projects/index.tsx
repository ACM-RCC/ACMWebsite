// src/pages/projects/index.tsx

import ACMProjectList from "@/components/projects/ACMProjectList";
import { ACMProject } from "@/lib/types/project";

export default function ProjectPage() {
    // TODO(project_page): Figure out the styling of the page
    // get header and footer components from the Homepage Team

    // normal this would be an fetch async
    // but since we don't have a datasource
    // these are defined inline
    const projects: ACMProject[] = [
        { id: 1, projectName: "Website Project" },
        { id: 2, projectName: "NASA Suits Project" },
        { id: 3, projectName: "Comp Programming Project" },
    ];

    return (
        <div
            // Tailwind styles:
            // min-h-screen: sets the minimum height of the div to the full height of the viewport
            // sm:p-2: adds padding of 0.5rem on all sides, but only on small screens and up (sm = ≥640px)
            className="min-h-screen sm:p-2"
        >
            <ACMProjectList acmProjects={projects}/>
            {/*content goes here*/}
        </div>
    );
};

// src/pages/projects/index.tsx

import ACMProjectList from "@/components/projects/ACMProjectList";

export default function ProjectPage() {
    // TODO(project_page): Figure out the styling of the page
    // get header and footer components from the Homepage Team

    return (
        <div
            // Tailwind styles:
            // min-h-screen: sets the minimum height of the div to the full height of the viewport
            // sm:p-2: adds padding of 0.5rem on all sides, but only on small screens and up (sm = ≥640px)
            className="min-h-screen sm:p-2"
        >
            <ACMProjectList />
            {/*content goes here*/}
        </div>
    );
};

// src/components/projects/ACMProjectItem.tsx

import { ACMProject } from "@/lib/types/project";

type ACMProjectItemProps = {
    // the project this Item represents
    acmProject: ACMProject,
};

export default function ACMProjectItem({acmProject}: ACMProjectItemProps) {
    // TODO(project_page): Update this component once we figure out the other properties
    // that a ACM Project has
    
    return (
        // relative - positions element relative to normal flow
        // flex - applies flex row layout
        // items-center - vertically centers children (since this is a list)
        // space-x-4 - adds 1rem horizontal space between children
        // bg-gray-300 - light gray background
        // hover:bg-sky-700 - dark blue background on hover
        <div className="relative flex items-center space-x-4 bg-gray-300 hover:bg-sky-700">
            <a>{acmProject.projectName}</a>
        </div>
    );
}
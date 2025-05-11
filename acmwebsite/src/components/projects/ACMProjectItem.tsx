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
        // group - enables hover-based styling on child elements
        // relative - positions element relative to normal flow
        // flex flex-col - vertical stacking of children
        // bg-amber-600 - amber background
        // hover:bg-amber-700 - darker amber on hover
        // text-black - sets text color
        // p-4 - padding on all sides
        // font-bold - bold text
        // cursor-pointer - shows pointer cursor on hover
        <div className="group relative flex flex-col bg-amber-600 hover:bg-amber-700 text-black p-4 font-bold cursor-pointer">
            <div className="flex items-center space-x-4">
                <span>{acmProject.projectName}</span>
            </div>

            {/* accordion content */}
            <div
                // overflow-hidden - hides content outside bounds
                // max-h-0 - initial max height is zero (collapsed)
                // group-hover:max-h-40 - expands to max-h-40 on parent hover
                // transition-all - animates all properties
                // duration-300 - 300ms transition duration
                // ease-in-out - smooth transition curve
                // text-sm - small text size
                // font-normal - normal font weight
                // mt-2 - margin-top of 0.5rem
                className="overflow-hidden max-h-0 group-hover:max-h-40 transition-all duration-300 ease-in-out text-sm font-normal mt-2"
            >
                {acmProject.projectDescription}
            </div>
        </div>
    );
}
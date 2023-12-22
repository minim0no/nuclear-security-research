import { ResizableBox } from "react-resizable";
import { useState } from "react";

interface FacilityProps {
    uniqueId: number;
    name: string;
    parentWidth: number;
    parentHeight: number;
    child: { key: number; name: string }[];
}

export default function Facility({
    uniqueId,
    name,
    parentWidth,
    parentHeight,
    child,
}: FacilityProps) {
    const [width, setWidth] = useState(1000 - (uniqueId - 1) * 50);
    const [height, setHeight] = useState(800 - (uniqueId - 1) * 50);
    let minWidth;
    let minHeight;
    if (name === "Offsite") {
        minWidth = 1000;
        minHeight = 800;
    } else {
        minWidth = 225;
        minHeight = 25;
    }

    return (
        <ResizableBox
            width={width}
            height={height}
            draggableOpts={{ grid: [25, 25] }}
            minConstraints={[minWidth, minHeight]}
            maxConstraints={[parentWidth, parentHeight]}
            className="border-2 border-dashed flex flex-col justify-start items-center"
        >
            <div className="text-black p-2 font-bold">{name}</div>
            {child.length !== 0 ? (
                <Facility
                    uniqueId={child[0].key + 1}
                    name={child[0].name}
                    parentWidth={width - 50} // need to make dynamic and responsive so it doesnt break.
                    parentHeight={height - 50}
                    child={child.slice(1)}
                />
            ) : null}
        </ResizableBox>
    );
}

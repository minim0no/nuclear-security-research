import { ResizableBox } from "react-resizable";
import * as React from "react";

export default class Diagram extends React.Component {
    render() {
        return (
            <ResizableBox
                width={600}
                height={400}
                draggableOpts={{ grid: [25, 25] }}
                minConstraints={[400, 200]}
                maxConstraints={[600, 400]}
                className="border-2 border-dashed flex flex-col justify-start items-center"
            >
                <div className="text-black p-2 font-bold">Offsite</div>
            </ResizableBox>
        );
    }
}

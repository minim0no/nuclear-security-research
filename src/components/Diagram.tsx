import { useState } from "react";

const Diagram = ({ name }: { name: string }) => {
    const [detectionElements, setDetectionElements] = useState<
        {
            name: string | null;
            probabilityOfDetection: string | null;
            timeDelay: string | null;
        }[]
    >([]);
    return (
        <div className="w-full flex flex-col justify-center items-center ">
            <div className="w-full h-[48px] flex justify-between items-center bg-[#800000] p-4 rounded-full">
                <img
                    src="/plus-solid.svg"
                    alt="Add Detection Element"
                    className="w-6 h-6 cursor-pointer fill-white"
                    onClick={() => {
                        const newElementName = prompt(
                            "Enter Detection Element Name"
                        );
                        const newElementPD = prompt(
                            "Enter Detection Element Probability of Detection"
                        );
                        const newElementTD = prompt(
                            "Enter Detection Element Time Delay"
                        );
                        const newElement = {
                            name: newElementName,
                            probabilityOfDetection: newElementPD,
                            timeDelay: newElementTD,
                        };
                        setDetectionElements([
                            ...detectionElements,
                            newElement,
                        ]);
                    }}
                />
                {name}
                <img // need to implement
                    src="/x-solid.svg"
                    alt="Add Detection Element"
                    className="w-6 h-6 cursor-pointer fill-white"
                />
            </div>
            <div className="w-full h-full flex justify-evenly items-center">
                {detectionElements.map((element) => {
                    return (
                        <div>
                            <div className="text-black">|</div>
                            <div className="flex flex-col text-black text-lg">
                                <div className="border-2 border-black px-6">
                                    <div>{element.name}</div>
                                </div>
                                <div className="flex justify-between items-center">
                                    <div className="border-2 border-black border-t-0 px-6">
                                        {element.probabilityOfDetection}
                                    </div>
                                    <div className="border-2 border-black border-t-0 border-l-0 px-6">
                                        {element.timeDelay}s
                                    </div>
                                </div>
                            </div>
                            <div className="text-black">|</div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Diagram;

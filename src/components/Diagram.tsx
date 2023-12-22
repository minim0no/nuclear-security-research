import { useState } from "react";
import DetectionElement from "./detectionElement";

const Diagram = ({ name }: { name: string }) => {
    const [detectionElements, setDetectionElements] = useState<
        {
            name: string | null;
            probabilityOfDetection: string | null;
            timeDelay: string | null;
        }[]
    >([]);
    const [elementModal, setElementModal] = useState(false);

    function addDetectionElement(formData: any) {
        const detectionElementName = formData[0].value;
        const probabilityOfDetection = formData[1].value;
        const timeDelay = formData[2].value;
        formData[0].value = "";
        formData[1].value = "";
        formData[2].value = "";
        setDetectionElements([
            ...detectionElements,
            {
                name: detectionElementName,
                probabilityOfDetection: probabilityOfDetection,
                timeDelay: timeDelay,
            },
        ]);
    }

    return (
        <div className="w-full flex flex-col justify-center items-center">
            <div className="w-full h-[48px] flex justify-between items-center bg-[#800000] p-4 rounded-full uppercase">
                <img
                    src="/plus-solid.svg"
                    alt="Add Detection Element"
                    className="w-6 h-6 cursor-pointer fill-white"
                    onClick={() => {
                        setElementModal(true);
                    }}
                />
                {name}
                <img // need to implement remove layer
                    src="/x-solid.svg"
                    alt="Add Detection Element"
                    className="w-6 h-6 cursor-pointer fill-white"
                />
            </div>
            <div className="w-full h-full flex justify-evenly items-center">
                {detectionElements.map((element) => {
                    return (
                        <DetectionElement
                            name={element.name!}
                            probabilityOfDetection={
                                element.probabilityOfDetection!
                            }
                            timeDelay={element.timeDelay!}
                        />
                    );
                })}
            </div>
            {/* MAYBE MAKE THE MODAL A COMPONENT? IDK*/}
            <div className={`${elementModal ? "" : "hidden"}`}>
                <div className="fixed inset-0 bg-black bg-opacity-50"></div>
                <div className="fixed left-[25%] top-[30%] w-1/2 border-2 rounded bg-white text-black">
                    <form
                        className="flex flex-col gap-2 p-4"
                        onSubmit={(e) => {
                            e.preventDefault();
                            addDetectionElement(e.target);
                            setElementModal(false);
                        }}
                    >
                        <div className="flex flex-col items-start justify-center">
                            <label
                                htmlFor="name"
                                className="mb-2 font-bold tracking-wider"
                            >
                                ELEMENT NAME
                            </label>
                            <input
                                type="text"
                                className="border-[1px] border-slate focus:outline-none focus:ring-0 focus:border-[#800000] rounded w-full font-normal placeholder-slate-500 px-1 py-2 uppercase"
                                placeholder="Enter element name..."
                                required
                            ></input>
                        </div>
                        <div className="flex flex-col items-start justify-center">
                            <label
                                htmlFor="probabilityOfDetection"
                                className="mb-2 font-bold tracking-wider"
                            >
                                PROBABILITY OF DETECTION
                            </label>
                            <input
                                type="number"
                                min={0}
                                max={1}
                                step="any"
                                className="border-[1px] border-slate focus:outline-none focus:ring-0 focus:border-[#800000] rounded w-full font-normal placeholder-slate-500 px-1 py-2 uppercase"
                                placeholder="Enter probability of detection..."
                                required
                            ></input>
                        </div>
                        <div className="flex flex-col items-start justify-center">
                            <label
                                htmlFor="timeDelay"
                                className="mb-2 font-bold tracking-wider"
                            >
                                TIME DELAY (s)
                            </label>
                            <input
                                type="number"
                                className="border-[1px] border-slate focus:outline-none focus:ring-0 focus:border-[#800000] rounded w-full font-normal placeholder-slate-500 px-1 py-2 uppercase"
                                placeholder="Enter time delay..."
                                required
                            ></input>
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="bg-[#800000] text-white rounded-md font-bold whitespace-nowrap p-2 hover:bg-white hover:text-[#800000] border-2 border-slate-100"
                            >
                                Add layer
                            </button>
                            <button
                                type="button"
                                className="bg-[#800000] text-white rounded-md font-bold whitespace-nowrap p-2 hover:bg-white hover:text-[#800000] border-2 border-slate-100"
                                onClick={() => setElementModal(false)}
                            >
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Diagram;

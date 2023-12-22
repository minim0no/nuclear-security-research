import { useState } from "react";
import Diagram from "../components/Diagram";
import Facility from "../components/Facility";

export default function Tool() {
    const [facility, setFacility] = useState([
        { key: 1, name: "Offsite Area" },
    ]);
    const [layers, setLayers] = useState(["Offsite Area"]);
    const [interfaceMode, setInterfaceMode] = useState("facility"); // "facility" or "diagram"
    const [layerModal, setLayerModal] = useState(false);

    function addLayer(formData: any) {
        const layerName = formData[0].value;
        formData[0].value = "";
        setFacility([
            ...facility,
            { key: facility.length + 1, name: layerName },
        ]);
        setLayers([...layers, layerName]);
    }

    return (
        <div className="w-full h-full flex flex-col justify-between items-center px-16">
            <div className="bg-[#800000] flex justify-center items-center text-white font-bold rounded-br-md rounded-bl-md border-2 border-t-0 border-slate-100">
                <button
                    className={`${
                        interfaceMode === "facility"
                            ? "bg-white text-[#800000]"
                            : ""
                    } p-2 hover:bg-white hover:text-[#800000]`}
                    onClick={() => setInterfaceMode("facility")}
                >
                    Facility
                </button>
                <button
                    className={`${
                        interfaceMode === "diagram"
                            ? "bg-white text-[#800000]"
                            : ""
                    } p-2 hover:bg-white hover:text-[#800000]`}
                    onClick={() => setInterfaceMode("diagram")}
                >
                    Diagram
                </button>
            </div>
            <div
                className={`${
                    interfaceMode === "facility" ? "" : "hidden"
                } w-full h-full flex justify-between items-center p-8 gap-4`}
            >
                <ul className="flex flex-col gap-2 justify-center items-center">
                    <li>
                        <button className="bg-[#800000] text-white rounded-md font-bold whitespace-nowrap p-2 hover:bg-white hover:text-[#800000] border-2 border-slate-100">
                            Add Label
                        </button>
                    </li>
                </ul>
                <div
                    className={`w-full h-full flex justify-center items-center`}
                >
                    <Facility
                        uniqueId={facility[0].key}
                        name="Offsite Area"
                        parentWidth={900}
                        parentHeight={700}
                        child={facility.slice(1)}
                    />
                </div>
            </div>
            <div
                className={`${
                    interfaceMode === "diagram" ? "" : "hidden"
                } w-full h-full flex flex-col items-center py-20 text-white font-bold`}
            >
                {layers.map((layer) => (
                    <Diagram key={layer} name={layer} />
                ))}
                <img
                    src="/addArea.svg"
                    alt="Add Protection Layer"
                    className="w-full h-[40px] cursor-pointer mt-4"
                    onClick={() => {
                        setLayerModal(true);
                    }}
                />
                {/* MAYBE MAKE THE MODAL A COMPONENT? IDK*/}
                <div className={`${layerModal ? "" : "hidden"}`}>
                    <div className="fixed inset-0 bg-black bg-opacity-50"></div>
                    <div className="fixed left-[25%] top-[40%] w-1/2 border-2 border-slate-500 rounded bg-white text-black">
                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                                addLayer(e.target);
                                setLayerModal(false);
                            }}
                            className="flex flex-col gap-2 p-4"
                        >
                            <div className="flex flex-col items-start justify-center">
                                <label
                                    htmlFor="name"
                                    className="mb-2 font-bold tracking-wider"
                                >
                                    LAYER NAME
                                </label>
                                <input
                                    type="text"
                                    className="border-[1px] border-slate focus:outline-none focus:ring-0 focus:border-[#800000] rounded w-full font-normal placeholder-slate-500 px-1 py-2 uppercase"
                                    placeholder="Enter layer name..."
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
                                    onClick={() => setLayerModal(false)}
                                >
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

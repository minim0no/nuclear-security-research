import Plan from "../components/Plan";
import { useState } from "react";
import Diagram from "../components/Diagram";

export default function Tool() {
    const [plans, setPlans] = useState([{ key: 1, name: "Offsite Area" }]);
    const [layers, setLayers] = useState(["Offsite Area"]);

    const [interfaceMode, setInterfaceMode] = useState("plan"); // "plan" or "diagram"
    return (
        <div className="w-full h-full flex flex-col justify-between items-center px-12">
            <div className="bg-[#800000] flex justify-center items-center text-white font-bold rounded-br-md rounded-bl-md border-2 border-t-0 border-slate-100">
                <button
                    className={`${
                        interfaceMode === "plan"
                            ? "bg-white text-[#800000]"
                            : ""
                    } p-2 hover:bg-white hover:text-[#800000]`}
                    onClick={() => setInterfaceMode("plan")}
                >
                    Plan
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
                    interfaceMode === "plan" ? "" : "hidden"
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
                    <Plan
                        uniqueId={plans[0].key}
                        name="Offsite Area"
                        parentWidth={900}
                        parentHeight={700}
                        child={plans.slice(1)}
                    />
                </div>
            </div>
            <div
                className={`${
                    interfaceMode === "diagram" ? "" : "hidden"
                } w-full h-full flex flex-col items-center px-8 py-20 text-white font-bold`}
            >
                {layers.map((layer) => (
                    <Diagram key={layer} name={layer} />
                ))}
                <img
                    src="/addArea.svg"
                    alt="Add Protection Layer"
                    className="w-full h-[40px] cursor-pointer mt-4"
                    onClick={() => {
                        const newLayer: string | null =
                            prompt("Enter layer name");
                        if (newLayer) {
                            setLayers([...layers, newLayer]);
                            setPlans([
                                ...plans,
                                {
                                    key: plans.length + 1,
                                    name: newLayer,
                                },
                            ]);
                        }
                    }}
                />
            </div>
        </div>
    );
}

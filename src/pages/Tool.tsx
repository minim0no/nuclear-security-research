import Diagram from "../components/Diagram";

export default function Tool() {
    return (
        <div className="w-full h-full flex justify-between items-center px-12">
            <div className="w-full h-full flex justify-center items-center px-8 py-20 sticky">
                <Diagram />
            </div>
            <div className="w-full h-full flex flex-col items-center px-8 py-20 border-l-2 text-white font-bold gap-2">
                <div className="w-full h-[48px] flex flex-col justify-center items-center bg-[#8c2728] p-4 rounded-full border-2 border-[#500001]">
                    Offsite
                </div>
                <img
                    src="addArea.svg"
                    alt="add area"
                    className="w-full h-[40px] mt-4 cursor-pointer"
                />
            </div>
        </div>
    );
}

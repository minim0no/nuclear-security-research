interface DetectionElementProps {
    name: string;
    probabilityOfDetection: string;
    timeDelay: string;
}

const DetectionElement: React.FC<DetectionElementProps> = ({
    name,
    probabilityOfDetection,
    timeDelay,
}) => {
    return (
        <div>
            <div className="text-black">|</div>
            <div className="flex flex-col text-black text-lg">
                <div className="border-2 border-black px-6">
                    <div>{name.toUpperCase()}</div>
                </div>
                <div className="flex justify-between items-center">
                    <div className="border-2 border-black border-t-0 px-6">
                        {probabilityOfDetection}
                    </div>
                    <div className="border-2 border-black border-t-0 border-l-0 px-6">
                        {timeDelay}s
                    </div>
                </div>
            </div>
            <div className="text-black">|</div>
        </div>
    );
};

export default DetectionElement;

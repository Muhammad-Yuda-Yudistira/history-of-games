export default function Shower({ platforms, shower }) {
    return (
        <div
            id="item-show"
            className="bg-secondary bg-contain bg-center h-full mx-4 border-double border-4 border-accent-600 pl-4 pt-2 scale-90"
            style={{ transformStyle: "preserve-3d" }}
        >
            <div
                className="border-b-2 border-accent-400 w-fit"
                style={{ transform: "translateZ(50px)" }}
            >
                <span className="text-accent-600 text-xl">
                    Console Generation:{" "}
                </span>
                <div className="rating rating-xs pl-2">
                    {Array(platforms[shower].generation.generation)
                        .fill()
                        .map((_, index) => {
                            return (
                                <input
                                    key={index}
                                    type="radio"
                                    name="rating-1"
                                    className="mask mask-star-2 bg-accent-400"
                                    disabled
                                />
                            );
                        })}
                </div>
            </div>
            <div
                className="w-[80%] h-full"
                style={{
                    transform: "translate3D(0,0,100px)",
                }}
            >
                <div
                    style={{
                        backgroundImage: `url(${platforms[shower].image})`,
                    }}
                    className=" h-[90%] w-full bg-contain bg-no-repeat bg-center m-auto scale-75"
                ></div>
            </div>
        </div>
    );
}

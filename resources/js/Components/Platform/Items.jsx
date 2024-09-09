export default function Items({ platforms, handleClick }) {
    return platforms.map((platform, index) => {
        if (platform.generation.generation == 1) {
            return (
                <div
                    key={index}
                    className="cardItem border-yellow-500"
                    onClick={() => handleClick(index)}
                >
                    <div
                        style={{
                            backgroundImage: `url(${platform.image})`,
                        }}
                        className="cardItemImage"
                    ></div>
                </div>
            );
        } else if (platform.generation.generation == 2) {
            return (
                <div
                    key={index}
                    className="cardItem border-amber-600"
                    onClick={() => handleClick(index)}
                >
                    <div
                        style={{
                            backgroundImage: `url(${platform.image})`,
                        }}
                        className="cardItemImage"
                    ></div>
                </div>
            );
        } else if (platform.generation.generation == 3) {
            return (
                <div
                    key={index}
                    className="cardItem border-neutral-600"
                    onClick={() => handleClick(index)}
                >
                    <div
                        style={{
                            backgroundImage: `url(${platform.image})`,
                        }}
                        className="cardItemImage"
                    ></div>
                </div>
            );
        } else if (platform.generation.generation == 4) {
            return (
                <div
                    key={index}
                    className="cardItem border-violet-500"
                    onClick={() => handleClick(index)}
                >
                    <div
                        style={{
                            backgroundImage: `url(${platform.image})`,
                        }}
                        className="cardItemImage"
                    ></div>
                </div>
            );
        } else if (platform.generation.generation == 5) {
            return (
                <div
                    key={index}
                    className="cardItem border-orange-500"
                    onClick={() => handleClick(index)}
                >
                    <div
                        style={{
                            backgroundImage: `url(${platform.image})`,
                        }}
                        className="cardItemImage"
                    ></div>
                </div>
            );
        } else if (platform.generation.generation == 6) {
            return (
                <div
                    key={index}
                    className="cardItem border-blue-400"
                    onClick={() => handleClick(index)}
                >
                    <div
                        style={{
                            backgroundImage: `url(${platform.image})`,
                        }}
                        className="cardItemImage"
                    ></div>
                </div>
            );
        } else if (platform.generation.generation == 7) {
            return (
                <div
                    key={index}
                    className="cardItem border-lime-400"
                    onClick={() => handleClick(index)}
                >
                    <div
                        style={{
                            backgroundImage: `url(${platform.image})`,
                        }}
                        className="cardItemImage"
                    ></div>
                </div>
            );
        } else if (platform.generation.generation == 8) {
            return (
                <div
                    key={index}
                    className="cardItem border-red-600"
                    onClick={() => handleClick(index)}
                >
                    <div
                        style={{
                            backgroundImage: `url(${platform.image})`,
                        }}
                        className="cardItemImage"
                    ></div>
                </div>
            );
        } else {
            return (
                <div
                    key={index}
                    className="cardItem border-black"
                    onClick={() => handleClick(index)}
                >
                    <div
                        style={{
                            backgroundImage: `url(${platform.image})`,
                        }}
                        className="cardItemImage"
                    ></div>
                </div>
            );
        }
    });
}

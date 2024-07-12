// TiltComponent.js
import React, { useRef, useEffect } from "react";
import VanillaTilt from "vanilla-tilt";

const TiltComponent = (props) => {
    const tiltRef = useRef(null);

    useEffect(() => {
        const tiltNode = tiltRef.current;
        VanillaTilt.init(tiltNode, {
            max: 30,
            perspective: 1000,
            speed: 600,
            glare: true,
            "max-glare": 0.2,
        });

        return () => {
            tiltNode.vanillaTilt.destroy();
        };
    }, []);

    return (
        <div
            ref={tiltRef}
            className="tilt-root w-full h-3/5 p-0 m-0"
            style={{ transformStyle: "preserve-3d" }}
        >
            {props.children}
        </div>
    );
};

export default TiltComponent;

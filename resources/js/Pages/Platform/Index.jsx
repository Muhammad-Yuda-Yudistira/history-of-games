import { Head } from "@inertiajs/react";
import React, { useState, useEffect } from "react";
// import Card from "@/Components/Platform/Card";
// import Pagination from "@/Components/Platform/Pagination";
import MainLayout from "@/Layouts/MainLayout";
import TiltComponent from "@/Layouts/TiltEffect";

export default function Index({ titlePage, platforms }) {
    const [shower, getShower] = useState(0);
    const handleClick = (index) => {
        return getShower(index);
    };
    const getBorderClass = (borderClass) => {
        return borderClass;
    };

    return (
        <>
            <Head title={titlePage} />
            <MainLayout>
                <div
                    id="content-items"
                    className="w-2/3 bg-primary-700 flex flex-wrap content-start justify-center overflow-scroll gap-4 py-4 px-6 pb-8"
                    style={{ height: "calc(100vh - 4rem)" }}
                >
                    {platforms.map((platform, index) => {
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
                    })}
                </div>
                <div
                    id="content-item"
                    className="w-1/3 bg-secondary border-l-8 border-dashed border-primary-700"
                >
                    <TiltComponent>
                        <div
                            id="item-show"
                            className="bg-secondary h-full mx-4 border-double border-4 border-accent-600 pl-4 pt-2 scale-90"
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
                                    {Array(
                                        platforms[shower].generation.generation,
                                    )
                                        .fill()
                                        .map((_, index) => {
                                            return (
                                                <input
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
                    </TiltComponent>
                    <div id="item-detail" className="bg-stone-300 h-2/5 mx-4">
                        <ul className="flex flex-col w-full h-full bg-white justify-center items-center overflow-scroll">
                            <li>
                                <div className="chat chat-start">
                                    <div className="chat-bubble border-4 border-dashed border-white bg-accent-300 py-1 text-center text-accent-600">
                                        {platforms[shower].name}
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="chat chat-end">
                                    <div className="chat-bubble border-4 border-dashed border-white bg-accent-400 py-1 text-center text-accent-600">
                                        {platforms[shower].company}
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="chat chat-start">
                                    <div className="chat-bubble border-4 border-dashed border-white bg-accent-300 py-1 text-center text-accent-600">
                                        {new Date(
                                            platforms[shower].release,
                                        ).toLocaleDateString("id-ID", {
                                            year: "numeric",
                                            month: "long",
                                            day: "numeric",
                                        })}
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </MainLayout>
        </>
    );
}

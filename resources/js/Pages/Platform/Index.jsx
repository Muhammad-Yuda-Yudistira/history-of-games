import { Head } from "@inertiajs/react";
import React, { useState } from "react";
// import Card from "@/Components/Platform/Card";
// import Pagination from "@/Components/Platform/Pagination";
import MainLayout from "@/Layouts/MainLayout";
import TiltComponent from "@/Layouts/TiltEffect";

export default function Index({ titlePage, platforms }) {
    // const platforms = 10; //data untuk template tanpa database
    const geneTotal = 9;
    console.info(platforms);

    return (
        <>
            <Head title={titlePage} />
            <MainLayout>
                <div
                    id="content-items"
                    className="w-2/3 bg-yellow-300 flex flex-wrap content-start justify-center overflow-scroll gap-4 py-4 pb-8"
                    style={{ height: "calc(100vh - 4rem)" }}
                >
                    {platforms.map((platform) => {
                        return (
                            <div className="w-32 h-32 bg-white border-4 border-white transition duration-300 hover:border-stone-100 hover:invert hover:border-dashed hover:border-black">
                                <div
                                    style={{
                                        backgroundImage: `url(${platform.image})`,
                                    }}
                                    className="w-full h-full bg-contain bg-center bg-no-repeat saturate-200 hover:scale-125"
                                ></div>
                            </div>
                        );
                    })}
                </div>
                <div
                    id="content-item"
                    className="w-1/3 bg-white border-l-8 border-dashed border-yellow-300"
                >
                    <TiltComponent>
                        <div
                            id="item-show"
                            className="bg-blue-700 h-full mx-4 border-double border-4 border-red-600 pl-4"
                            style={{ transformStyle: "preserve-3d" }}
                        >
                            <div
                                className="border-b-2 border-red-300 w-fit"
                                style={{ transform: "translateZ(30px)" }}
                            >
                                <span className="text-red-500 text-xl">
                                    Console Generation:{" "}
                                </span>
                                <div className="rating rating-xs pl-2">
                                    {Array(platforms[20].generation)
                                        .fill()
                                        .map((_, index) => {
                                            return (
                                                <input
                                                    type="radio"
                                                    name="rating-1"
                                                    className="mask mask-star-2 bg-red-400"
                                                    disabled
                                                />
                                            );
                                        })}
                                </div>
                            </div>
                            <div
                                style={{
                                    backgroundImage: `url(${platforms[20].image})`,
                                    transform: "translate3D(0,0,50px)",
                                }}
                                className="w-[80%] h-full bg-contain bg-no-repeat bg-center"
                            ></div>
                        </div>
                    </TiltComponent>
                    <div id="item-detail" className="bg-stone-300 h-2/5 mx-4">
                        <ul className="flex flex-col w-full h-full bg-white justify-center items-center py-4 overflow-scroll">
                            <li>
                                <div className="chat chat-start">
                                    <div className="chat-bubble border-4 border-dashed border-white bg-green-300 py-1 text-center text-green-900">
                                        {platforms[20].name}
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="chat chat-end">
                                    <div className="chat-bubble border-4 border-dashed border-white bg-green-600 py-1 text-center text-green-100">
                                        {platforms[20].company}
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="chat chat-start">
                                    <div className="chat-bubble border-4 border-dashed border-white bg-green-300 py-1 text-center text-green-900">
                                        {new Date(
                                            platforms[20].release,
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

import { Head } from "@inertiajs/react";
import React, { useState } from "react";
import Card from "@/Components/Platform/Card";
import Pagination from "@/Components/Platform/Pagination";

export default function Index({ titlePage, platforms, geneActive }) {
    // const platforms = 10; //data untuk template tanpa database
    const geneTotal = 9;

    return (
        <>
            <Head title={titlePage} />
            <main
                id="content"
                className="container-fluid m-auto w-screen min-h-screen box-border bg-lime-300 pb-10 px-10 bg-[url('./theme/background/bg-1.jpg')] bg-contain bg-center"
            >
                <div
                    id="content-title"
                    className="text-center w-full bg-base-100 pb-6 rounded-b-full glass text-stone-200"
                >
                    <h1 className="text-2xl">
                        Console Generation {geneActive}
                    </h1>
                    <small>total units: {platforms.length}</small>
                </div>
                <div
                    id="content-box"
                    className="flex flex-wrap w-full min-h-full h-full justify-evenly items-center py-10 gap-5"
                >
                    {
                        // // untuk template tanpa data dari database
                        // Array.from({ length: platforms }, (_, index) => (
                        //     <Card index={index} />
                        // ))

                        platforms.map((platform, index) => {
                            return <Card key={index} platform={platform} />;
                        })
                    }
                </div>
                <div id="content-pagination" className="flex justify-center">
                    <Pagination number={geneTotal} active={geneActive} />
                </div>
            </main>
        </>
    );
}

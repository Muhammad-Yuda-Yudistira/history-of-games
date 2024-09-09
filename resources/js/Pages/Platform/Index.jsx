import { Head } from "@inertiajs/react";
import React, { useState, useEffect } from "react";
import MainLayout from "@/Layouts/MainLayout";
import TiltComponent from "@/Layouts/TiltEffect";
import Items from "@/Components/Platform/Items";
import Shower from "@/Components/Platform/Shower";
import DetailItem from "@/Components/Platform/DetailItem";

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
                    className="w-2/3 bg-primary-700 flex flex-wrap content-start justify-center overflow-scroll gap-4 py-4 px-6 pb-8 bg-[url('./theme/background/bg-alt.jpg')]"
                    style={{ height: "calc(100vh - 4rem)" }}
                >
                    <Items platforms={platforms} handleClick={handleClick} />
                </div>
                <div
                    id="content-item"
                    className="w-1/3 bg-secondary border-l-8 border-dashed border-primary-700"
                >
                    <TiltComponent>
                        <Shower platforms={platforms} shower={shower} />
                    </TiltComponent>
                    <div id="item-detail" className="bg-stone-300 h-2/5 mx-4">
                        <DetailItem platforms={platforms} shower={shower} />
                    </div>
                </div>
            </MainLayout>
        </>
    );
}

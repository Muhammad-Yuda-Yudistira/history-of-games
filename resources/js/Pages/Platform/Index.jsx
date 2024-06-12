import { Head } from "@inertiajs/react";
import Card from "@/Components/Platform/Card";

export default function Index({ titlePage }) {
    const platforms = 10; // Gunakan nama variabel yang konsisten

    return (
        <>
            <Head title={titlePage} />
            <main id="content" className="w-screen h-screen box-border">
                <div
                    id="content-title"
                    className="text-center w-full bg-red-300 text-red-600"
                >
                    <h1 className="text-lg">Console Generation</h1>
                </div>
                <div
                    id="content-box"
                    className="flex flex-wrap w-full h-full justify-evenly items-center bg-lime-300"
                >
                    {
                        // Gunakan map() untuk iterasi
                        Array.from({ length: platforms }, (_, index) => (
                            <Card index={index} />
                        ))
                    }
                </div>
            </main>
        </>
    );
}

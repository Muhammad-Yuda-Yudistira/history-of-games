import { Head } from "@inertiajs/react";
import MainLayout from "@/Layouts/MainLayout";
import React, { useState, useEffect } from "react";

export default function Index(props) {
    const { titlePage, flash } = props;

    const nohp = "0895335059382";
    const features = [
        {
            title: "Fitur gameplay setiap konsol..",
            price: "100k",
            label: "gameplay",
        },
        {
            title: "Fitur game penjualan terbaik..",
            price: "50k",
            label: "the best selling",
        },
        {
            title: "Fitur game terbaik versi admin..",
            price: "50k",
            label: "the best games",
        },
        {
            title: "Fitur perbedaan joystick setiap konsol..",
            price: "50k",
            label: "joystick",
        },
        {
            title: "Fitur bentuk kaset setiap konsol..",
            price: "50k",
            label: "cassette",
        },
    ];

    // csrf token
    const [csrfToken, setCsrfToken] = useState("");

    useEffect(() => {
        const token = document
            .querySelector('meta[name="csrf-token"]')
            .getAttribute("content");
        setCsrfToken(token);
    }, []);

    // content
    // nominal format
    const [nominal, setNominal] = useState(10000);

    const formatNominal = (value) => {
        return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    };
    const handleNominalChange = (e) => {
        const value = e.target.value.replace(/\./g, "");
        if (/^\d*$/.test(value)) {
            setNominal(Number(value));
        }
    };

    return (
        <>
            <Head title={titlePage} />
            <MainLayout>
                <content className="flex flex-col w-[60%] m-auto py-2 pt-12 px-4 text-white">
                    {flash.message && (
                        <div role="alert" className="alert alert-success">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 shrink-0 stroke-current"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                            <span>{flash.message}</span>
                        </div>
                    )}

                    <div role="alert" className="alert">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            className="stroke-info h-6 w-6 shrink-0"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            ></path>
                        </svg>
                        <span>
                            Untuk donasi silahkan langsung kirim pulsa aja ke
                            nomor berikut: {nohp}.<br />
                            <small>
                                Untuk request fitur lihat list dibawah ini ya!
                            </small>
                        </span>
                    </div>

                    <div className="title-squre pb-12">
                        <h1 className="capitalize text-center text-3xl">
                            {titlePage} - with features (belum berfungsi)
                        </h1>
                    </div>
                    <div className="content-squre text-center m-auto">
                        <form action={route("donation.store")} method="post">
                            <input
                                type="hidden"
                                name="_token"
                                value={csrfToken}
                            />
                            <div className="donation mb-4">
                                <table>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <label htmlFor="name">
                                                    Atas Nama:{" "}
                                                </label>
                                            </td>
                                            <td>
                                                <input
                                                    id="name"
                                                    type="text"
                                                    name="name"
                                                    placeholder="Type here"
                                                    className="input input-xs w-full max-w-xs"
                                                />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <label htmlFor="nominal">
                                                    Nominal:{" "}
                                                </label>
                                            </td>
                                            <td>
                                                <input
                                                    required
                                                    id="nominal"
                                                    type="text"
                                                    min="10000"
                                                    value={formatNominal(
                                                        nominal,
                                                    )}
                                                    onChange={
                                                        handleNominalChange
                                                    }
                                                    name="nominal"
                                                    placeholder="contoh: 10000"
                                                    className="input input-xs w-full max-w-xs"
                                                />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <label htmlFor="phone">
                                                    Phone Number:{" "}
                                                </label>
                                            </td>
                                            <td>
                                                <input
                                                    required
                                                    id="phone"
                                                    type="tel"
                                                    name="phone"
                                                    placeholder="type here"
                                                    className="input input-xs w-full max-w-xs"
                                                />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <label htmlFor="email">
                                                    Email:{" "}
                                                </label>
                                            </td>
                                            <td>
                                                <input
                                                    id="email"
                                                    type="email"
                                                    name="email"
                                                    placeholder="type here"
                                                    className="input input-xs w-full max-w-xs"
                                                />
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <ul className="features list-disc">
                                {features.map((feature, index) => {
                                    return (
                                        <li key={index} className="border-b-2">
                                            <div className="form-control">
                                                <label className="label cursor-pointer">
                                                    <input
                                                        type="radio"
                                                        name="featureReq"
                                                        value={feature.label}
                                                        className="radio radio-xs radio-primary"
                                                        defaultChecked
                                                    />
                                                    <span className="label-text text-white">
                                                        {feature.title}
                                                    </span>
                                                </label>
                                            </div>
                                        </li>
                                    );
                                })}
                            </ul>
                            <div className="button-squre mt-6">
                                <button
                                    disabled
                                    className="btn btn-sm btn-accent text-white"
                                >
                                    Donate
                                </button>
                            </div>
                        </form>
                    </div>
                </content>
            </MainLayout>
        </>
    );
}

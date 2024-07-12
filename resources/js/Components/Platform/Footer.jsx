import { Link } from "@inertiajs/react";

export default function Footer({ brand }) {
    return (
        <footer className="footer bg-white text-neutral-content p-10 border-t-4 border-accent-600 border-double">
            <aside>
                <div className="w-20 h-20 bg-amber-700 bg-[url('./theme/banana-boot-2.jpg')] bg-cover"></div>
                <p>
                    <span className="uppercase text-xl">
                        {brand[0] + "."}
                        <span className="lowercase">{brand[1]}</span>
                    </span>
                    <br />
                    <span className="text-accent-600">
                        Builth by,{" "}
                        <Link
                            href="#"
                            className="text-primary-700 underline hover:brightness-75"
                        >
                            Muhammad Yuda Yudistira
                        </Link>
                        . @copyright 2024.
                    </span>
                </p>
            </aside>
            <nav>
                <h6 className="footer-title text-accent-600">Features</h6>
                <div className="grid grid-flow-col gap-4">
                    <ul>
                        <Link href="./donation">
                            <h6 className="text-neutral-500 hover:text-accent-600 border-accent-300 border-b-2 border-l-2">
                                Donation
                            </h6>
                        </Link>
                    </ul>
                </div>
            </nav>
        </footer>
    );
}

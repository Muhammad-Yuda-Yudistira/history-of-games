import { Link } from "@inertiajs/react";

export default function Footer({ brand }) {
    return (
        <footer className="footer bg-white text-neutral-content p-10 border-t-4 border-red-600 border-double">
            <aside>
                <div className="w-20 h-20 bg-amber-700 bg-[url('./theme/banana-boot-2.jpg')] bg-cover"></div>
                <p>
                    <span className="uppercase text-xl">
                        {brand[0] + "."}
                        <span className="lowercase">{brand[1]}</span>
                    </span>
                    <br />
                    <span className="text-red-600">
                        Builth by, Muhammad Yuda Yudistira. @copyright 2024.
                    </span>
                </p>
            </aside>
            <nav>
                <h6 className="footer-title text-red-600">Features</h6>
                <div className="grid grid-flow-col gap-4">
                    <ul>
                        <Link href="./donation">
                            <h6 className="text-neutral-500 hover:text-green-600 border-green-300 border-b-2 border-l-2">
                                Donation
                            </h6>
                        </Link>
                    </ul>
                </div>
            </nav>
        </footer>
    );
}

import { Link } from "@inertiajs/react";

export default function Navbar({ brand }) {
    return (
        <div className="navbar bg-white border-b-4 border-double border-accent-600 fixed z-10">
            <Link
                href="/"
                className="btn btn-ghost text-xl m-auto bg-stone-600 hover:bg-stone-700 bg-[url('./theme/banana-boot-3.jpg')] bg-cover bg-center bg-blend-multiply"
            >
                <span className="text-yellow-500 uppercase">
                    {brand[0] + "."}
                    <span className="text-amber-700 font-bold lowercase">
                        {brand[1]}
                    </span>
                </span>
            </Link>
        </div>
    );
}

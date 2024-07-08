import { Link } from "@inertiajs/react";

export default function Navbar() {
    return (
        <div className="navbar bg-white border-b-4 border-double border-red-600 fixed z-10">
            <Link
                href={route("platform.show")}
                className="btn btn-ghost text-xl m-auto"
            >
                Lao Tzu Junior
            </Link>
        </div>
    );
}

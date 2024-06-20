import { Link } from "@inertiajs/react";

export default function Pagination({ number, active }) {
    return (
        <ul className="join rounded-sm rounded-se-full rounded-es-3xl rounded-ee-sm border-t-4 border-r-8 border-white">
            {Array.from({ length: number }, (_, index) => {
                return (
                    <li key={index}>
                        <Link
                            href={`/Platform`}
                            method="get"
                            data={{ active: index + 1 }}
                            className={`join-item btn btn-md btn-outline text-stone-100 ${index + 1 == active ? "btn-active" : ""}`}
                        >
                            {index + 1}
                        </Link>
                    </li>
                );
            })}
        </ul>
    );
}

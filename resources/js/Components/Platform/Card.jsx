import { format } from "date-fns";

export default function Card({ platform }) {
    let date = new Date(platform.release);
    date = format(date, "MMMM dd, yyy");
    return (
        <div className="card glass w-32 bg-base-100 shadow-xl rounded-sm rounded-b-2xl">
            <div className="card-body px-3 py-3 pt-2 text-stone-300">
                <h2 className="card-title text-lg">{platform.name}</h2>
                <p className="capitalize py-0 my-0">
                    generation: {platform.generation}
                </p>
                <p className="capitalize py-0 my-0">{date}</p>
            </div>
            <figure className="max-h-52 w-full border-t-4 border-red-600 border-double">
                <img className="" src={platform.image} alt="Console" />
            </figure>
        </div>
    );
}

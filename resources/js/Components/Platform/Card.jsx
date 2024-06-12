export default function Card({ index }) {
    return (
        <div
            key={index}
            className="card card-side bg-base-100 shadow-xl w-60 h-64 relative overflow-hidden"
        >
            <figure className="w-full">
                <img
                    src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
                    alt="Movie"
                    className="hover:absolute hover:w-full hover:right-0"
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title">New movie is released!</h2>
                <p className="text-lime-300">
                    Click the button to watch on Jetflix app.
                </p>
                <div className="card-actions justify-end"></div>
            </div>
        </div>
    );
}

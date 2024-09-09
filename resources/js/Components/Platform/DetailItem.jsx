export default function DetailItem({ platforms, shower }) {
    return (
        <ul className="flex flex-col w-full h-full bg-white justify-center items-center overflow-scroll">
            <li>
                <div className="chat chat-start">
                    <div className="chat-bubble border-4 border-dashed border-white bg-accent-300 py-1 text-center text-accent-600">
                        {platforms[shower].name}
                    </div>
                </div>
            </li>
            <li>
                <div className="chat chat-end">
                    <div className="chat-bubble border-4 border-dashed border-white bg-accent-400 py-1 text-center text-accent-600">
                        {platforms[shower].company}
                    </div>
                </div>
            </li>
            <li>
                <div className="chat chat-start">
                    <div className="chat-bubble border-4 border-dashed border-white bg-accent-300 py-1 text-center text-accent-600">
                        {new Date(platforms[shower].release).toLocaleDateString(
                            "id-ID",
                            {
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                            },
                        )}
                    </div>
                </div>
            </li>
        </ul>
    );
}

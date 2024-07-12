import Navbar from "@/Components/Platform/Navbar";
import Footer from "@/Components/Platform/Footer";

export default function MainLayout(props) {
    const brand = ["banana", "boot"];
    return (
        <div className="w-full min-h-screen">
            <div className="nav-squre">
                <Navbar brand={brand} />
            </div>
            <div className="flex content-squre min-h-screen bg-green-600 pt-16">
                {props.children}
            </div>
            <div className="footer-squre bg-indigo-600">
                <Footer brand={brand} />
            </div>
        </div>
    );
}

import Navbar from "@/Components/Platform/Navbar";
import Footer from "@/Components/Platform/Footer";

export default function MainLayout(props) {
    return (
        <div className="w-full min-h-screen">
            <div className="nav-squre">
                <Navbar />
            </div>
            <div className="flex content-squre min-h-screen bg-green-600 px-16 py-8">
                {props.children}
            </div>
            <div className="footer-squre bg-indigo-600">
                <Footer />
            </div>
        </div>
    );
}

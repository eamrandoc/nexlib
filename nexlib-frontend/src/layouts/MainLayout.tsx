import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import { Outlet } from "react-router";

const MainLayout = () => {
    return (
        <div className="bg-gradient-to-r from-indigo-200 to-blue-200">
            <Navbar></Navbar>
            <main className="min-h-screen px-4 py-6">
                <Outlet />
            </main>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;
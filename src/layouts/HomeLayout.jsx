import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import LeftNavbar from "../components/layout-component/LeftNavbar";
import RightNavbar from "../components/layout-component/RightNavbar";
import Navbar from "../components/Navbar";

const HomeLayout = () => {
    return (
        <div className="container mx-auto font-poppins">
           <header>
            <Header></Header>
            <section>
                <LatestNews></LatestNews>
            </section>
           </header>
           <nav>
            <Navbar></Navbar>
           </nav>
           <main className="grid md:grid-cols-12 gap-3 mt-8">
            <aside className="col-span-3"><LeftNavbar /></aside>
            <section className="col-span-6"><Outlet></Outlet></section>
            <aside className="col-span-3"><RightNavbar/></aside>
           </main>
        </div>
    );
};

export default HomeLayout;
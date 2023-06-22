import { Outlet } from "react-router-dom";
import NavBar from "../Pages/Home/Shared/NavBar";
import Footer from "../Pages/Home/Shared/Footer";

const Main = () => {

    return (
        <div>
           <NavBar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Main;
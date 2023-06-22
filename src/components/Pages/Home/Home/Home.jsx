import Title from "../../../Hooks/Title";
import Gallery from "./Gallery";
import PopularClasses from "./PopularClasses";
import PopularInstructors from "./PopularInstructors";
import Slider from "./Slider";

const Home = () => {
    Title("Home")
    return (
        <div>
           <Slider></Slider>
           <PopularClasses></PopularClasses>
           <PopularInstructors></PopularInstructors>
           <Gallery></Gallery>
        </div>
    );
};

export default Home;
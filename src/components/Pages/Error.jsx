import { Link, useNavigate } from "react-router-dom";
import Typewriter from "typewriter-effect";
import { BiArrowFromLeft,BiArrowFromRight } from 'react-icons/bi';
const Error = () => {
    const navigate = useNavigate();
    return (
        <div className="slider5 hero">
            <div className="hero-content text-neutral-content text-center flex-col">

            <h1 className="  font-bold text-5xl">ERROR</h1>
            <h2 className="  font-bold text-8xl">"404"</h2>
            <div className="font-bold text-5xl">
            <Typewriter
                  options={{
                    strings: ["You Lost !!","Page Not Found", "Sorry, The Page Not Found"],
                    autoStart: true,
                    loop: true,
                  }}
                /></div>
            <Link to='/' className="text-black border-b-2 rounded-lg font-semibold hover:border-slate-800 p-2 hover:bg-slate-800 hover:text-blue-500 duration-500  text-center bg-slate-100 border-blue-600 inline-flex items-center">Back to Home< BiArrowFromLeft size={30}/>
    </Link>
            <button onClick={() => navigate(-1)} className="text-black border-b-2 rounded-lg font-semibold p-2 duration-500  text-center bg-slate-100 border-blue-600 inline-flex items-center">< BiArrowFromRight size={30}/>Go Back
    </button>
            </div>
        </div>
    );
};

export default Error;
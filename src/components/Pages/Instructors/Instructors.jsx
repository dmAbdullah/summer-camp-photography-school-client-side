import { useEffect, useState } from "react";
import Title from "../../Hooks/Title";
import AllInstructor from "./AllInstructor";
import useData from "../../Hooks/useData";

const Instructors = () => {
    Title("Instructors")
    const [classes, loading] = useData();
    const instructor = classes
    if(loading){
        return <div className="text-center"><span className="loading loading-bars loading-lg"></span></div>
      }
    return (
        <div>
                   <hr className="mt-10" />
      <h1 className=" text-4xl font-bold text-center italic underline underline-offset-8 mb-10">
      Our Instructors
      </h1>
        <div className=" grid lg:grid-cols-3 md:grid-cols-2 gap-5 justify-center mb-10">
        {
            instructor.map(item =><AllInstructor key={item._id} item={item}/>)
        }
        </div>
        </div>
    );
};

export default Instructors;
import Title from "../../Hooks/Title";
import Course from "./Course";
import useData from "../../Hooks/useData";

const Classes = () => {
    Title("Classes")
    const [classes, loading] = useData();
    const popularClasses = classes
    if(loading){
        return <div className="text-center"><span className="loading loading-bars loading-lg"></span></div>
      }
    
    return (
        <div>
              <hr className="mt-10" />
      <h1 className=" text-4xl font-bold text-center italic underline underline-offset-8 mb-10">
      Our Classes
      </h1>
        <div className=" grid lg:grid-cols-3 md:grid-cols-2 gap-5 justify-center mb-10">
        {
            popularClasses.map(item =><Course key={item._id} item={item}/>)
        }
        </div>
        </div>
    );
};

export default Classes;
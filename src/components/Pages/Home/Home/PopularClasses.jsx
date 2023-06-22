import { useEffect, useState } from "react";
import Class from "./Class";


const PopularClasses = () => {
  const [popular, setPopular] = useState([]);
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    fetch("https://b7a12-summer-camp-server-side-dm-abdullah.vercel.app/data")
      .then((res) => res.json())
      .then((data) => {
        const popularClasses = data.sort(
          (item1, item2) => item1.availableSeats - item2.availableSeats
        );
        setPopular(data);
        setLoading(false);
      });
  }, []);

  if(loading){
    return <div className="text-center"><span className="loading loading-bars loading-lg"></span></div>
  }

  return (
    
 <>
 <hr className="mt-10" />
 <h1 className=" text-4xl font-bold text-center italic underline underline-offset-8">Popular Classes</h1>
 <div className="grid lg:grid-cols-3 md:grid-cols-2 justify-center gap-5 my-10">
 
 {popular.map((item) => (
     <Class key={item._id} item={item} />
   ))}
</div>
 </>
  )
};
export default PopularClasses;
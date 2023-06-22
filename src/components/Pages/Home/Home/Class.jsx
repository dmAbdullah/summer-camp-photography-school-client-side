import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";

// import { Fade } from "react-awesome-reveal";
const Class = ({ item }) => {
    const {classImage, className, availableSeats}= item;
    return ( 
    <div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img  src={classImage} alt="" className="rounded-xl skew-y-12" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title"><Fade>{className}</Fade></h2>
  </div>
</div>
    );
};

export default Class;
import { Fade } from "react-awesome-reveal";

const AllInstructor = ({item}) => {
    const {instructorName, instructorImage, email}= item
  return (
    <div>
     <div className="w-96 bg-base-100 shadow-xl">
  <figure><img className="opacity-1" src={instructorImage} /></figure>
  <div className="card-body">
   <Fade>
   <h2 className="card-title text-2xl">{instructorName}</h2>
    <h2 className="card-title">{email}</h2>
   </Fade>
   
  </div>
</div>
    </div>
  );
};

export default AllInstructor;

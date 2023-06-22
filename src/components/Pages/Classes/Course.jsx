import { useContext } from "react";
import { Fade } from "react-awesome-reveal";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const Course = ({item}) => {
  const {user} = useContext(AuthContext)
    const {instructorName, className, classImage, availableSeats, price, _id} = item
    const navigate = useNavigate();
    const handleSelect = () => {
      if(!user){
        Swal.fire({
          title: 'Please, login to select the class',
          icon: 'info',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Login'
        }).then((result) => {
          if (result.isConfirmed) {
            navigate("/login")
          }
        })
      }
    }
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
  <div className="card-body">
    <h2 className="card-title">{className}</h2>
    <h2 className="card-title">Instructor name: {instructorName}</h2>
    <p>Available seats: {availableSeats}</p>
    <p>Price: $ {price}</p>
    <Fade>
    <Link onClick={handleSelect} className="text-black border-b-2 rounded-lg font-semibold hover:border-slate-800 p-2 hover:bg-slate-800 hover:text-blue-500 duration-500 w-20 text-center bg-slate-100 border-blue-600">Select
    </Link>
    </Fade>
  </div>
  <figure><img src={classImage} /></figure>
</div>
        </div>
    );
};

export default Course;
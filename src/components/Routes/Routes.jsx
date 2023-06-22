import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import Home from "../Pages/Home/Home/Home";
import Instructors from "../Pages/Instructors/Instructors";
import Classes from "../Pages/Classes/Classes";
import Error from "../Pages/Error";
import Dashboard from "../Pages/Dashboard/Dashboard";
import PrivetRoute from "./PrivetRoute";


const router = createBrowserRouter([
    {
      path: "/",
      element:<Main/>,
      errorElement: <Error/>,
      children:[
        {
          path: "/register",
          element: <Register/>
      },
        {
          path: "/login",
          element: <Login/>
      },
        {
          path: "/",
          element: <Home/>
      },
        {
          path: "/instructors",
          element: <Instructors/>
        },
        {
          path: "/classes",
          element: <Classes/>
        },
        {
          path: "classes/:id",
          element: <Classes/>
        },
       
    ]
    },
    {
      path: "/dashboard",
      element: <PrivetRoute><Dashboard/></PrivetRoute>,
      children: [
        
      ]
    }
    
  ]);

export default router;

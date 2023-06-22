import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut();
  };
  const navItem = (
    <>
      <li>
        <NavLink to="/" className={({ isActive }) =>
                    isActive ? "underline" : "default" 
                  }>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/instructors" className={({ isActive }) =>
                    isActive ? "underline" : "default"
                  }>
          Instructors
        </NavLink>
      </li>
      <li>
        <NavLink to="/classes" className={({ isActive }) =>
                    isActive ? "underline" : "default"
                  }>
          Classes
        </NavLink>
      </li>
      <li>
        <NavLink to="/dashboard" className={({ isActive }) =>
                    isActive ? "underline" : "default"
                  }>
          Dashboard
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-slate-400 z-10">
      <div className="navbar-start">
        <div className="dropdown z-10">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navItem}
          </ul>
        </div>
        <Link to='/' className="animate-text bg-gradient-to-r from-blue-500  to-sky-600 bg-clip-text text-transparent text-2xl font-black shadow-xl">Photo Studio</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="gap-5 menu-horizontal uppercase font-semibold px-1">
          {navItem}
        </ul>
      </div>
      <div className="navbar-end gap-5">
        <div className="avatar">
<div className="w-12 mask mask-squircle">
  {user? <img title={user.displayName} src={user.photo} /> : ''}
</div>
</div>
      {user ? 
        <NavLink onClick={handleLogOut} className="uppercase font-semibold btn btn-error text-white">
          Logout
        </NavLink> : ''}
        {user ? '' :<NavLink to='/register' className={({ isActive }) =>
                    isActive ? "uppercase underline font-semibold" : "default uppercase font-semibold"
                  }>Register</NavLink> }

        {user ? '' :
          <NavLink to="/login" className={({ isActive }) =>
          isActive ? "uppercase underline font-semibold" : "default uppercase font-semibold"
        }>
            Login
          </NavLink>}

      </div>
    </div>
  );
};

export default NavBar;

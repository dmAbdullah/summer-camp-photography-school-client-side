import { Link, NavLink } from "react-router-dom";
import { FaSwatchbook } from 'react-icons/fa';
import { VscTasklist } from 'react-icons/vsc';

const Dashboard = () => {
    const navItem = (
        <>
          <li>
            <NavLink to="/Selected_lasses" className={({ isActive }) =>
                        isActive ? "underline font-semibold" : "default font-semibold" 
                      }><FaSwatchbook size={20}/>
              My Selected Classes
            </NavLink>
          </li>
          <li>
            <NavLink to="/enrolled_classes" className={({ isActive }) =>
                        isActive ? "underline font-semibold" : "default font-semibold"
                      }>
             <VscTasklist size={20}/> My Enrolled Classes
            </NavLink>
          </li>
         
        </>
      );
    return (
        <div>
            <div className="drawer">
  <input id="my-drawer-3" type="checkbox" className="drawer-toggle" /> 
  <div className="drawer-content flex flex-col">
    {/* Navbar */}
    <div className="w-full navbar bg-base-300">
      <div className="flex-none lg:hidden">
        <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </label>
      </div> 
      <div className="flex-1 px-2 mx-2"><Link to='/' className="animate-text bg-gradient-to-r from-blue-500  to-sky-600 bg-clip-text text-transparent text-2xl font-black shadow-xl">Photo Studio</Link></div>
      <div className="flex-none hidden lg:block">
        <ul className="menu menu-horizontal">
          {/* Navbar menu content here */}
          {navItem}
        </ul>
      </div>
    </div>
    {/* Page content here */}
    Content
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-3" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 h-full bg-base-200">
      {/* Sidebar content here */}
      {navItem}      
    </ul>
    
  </div>
</div>
        </div>
    );
};

export default Dashboard;
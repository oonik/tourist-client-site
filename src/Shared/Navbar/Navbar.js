import React from 'react';
import { Link } from 'react-router-dom';
import { FaLocationDot} from "react-icons/fa6";

const Navbar = () => {
  
    const navbarList = <>
     <li><Link to='/'>Home</Link></li>
     <li><Link to='/services'>Services</Link></li>
     <li><Link>Login</Link></li>
    </>
    return (
        <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-green-300 rounded-box w-52">
              {navbarList}
            </ul>
          </div>
           <h1 className='text-4xl font-bold lg:ml-5 text-green-400 flex items-center gap-3'><FaLocationDot></FaLocationDot> <span>Tourist</span></h1>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-green-400 font-semibold">
            {navbarList}
          </ul>
        </div>
        
      </div>
    );
};

export default Navbar;
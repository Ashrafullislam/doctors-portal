import React, { useContext } from 'react';
import {  NavLink } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import './Navbar.css'
import Switch from "react-switch";

const Navbar = () => {
 const {user,LogOut } = useContext(AuthContext)

 
    const menu = 
    <>
  
    <li> <NavLink to = '/home' > Home </NavLink> </li>
    <li> <NavLink to = '/about' > About </NavLink> </li>
    <li> <NavLink to = '/appointment' > Appointment </NavLink> </li>
    <li> <NavLink to = '/contacus' > Contact Us </NavLink> </li>
    {
      user?.uid?
    <> 
       <li> <NavLink to = '/dashboard' > Deshboard </NavLink> </li>

       <button title={user?.displayName} className='logout' onClick={LogOut} > Log out </button>

    </>

       :
       <li > <NavLink to= '/loginform' > Log in </NavLink> </li>

    }
    </>
    return (
        <div>
    <div className="navbar justify-between bg-base-100 text-black">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={1} className="menu  menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
         {menu}
      </ul>
    </div>
    <a href='/' className="btn btn-ghost normal-case text-2xl"> Doctors Portal</a>
  </div>

  <div className="navbar-center hidden lg:flex    ">
    <ul className="menu menu-horizontal p-0  ">
    {menu}
    </ul>
  </div>

   <div className=' '>
   <label  htmlFor="dashboard-drawer" tabIndex={2} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
   </div>
   
  </div>
 </div>
    );
};

export default Navbar;
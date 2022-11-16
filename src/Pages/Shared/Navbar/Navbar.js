import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    const menu = 
    <>
    <li> <NavLink to = '/home' > Home </NavLink> </li>
    <li> <NavLink to = '/about' > About </NavLink> </li>
    <li> <NavLink to = '/appointment' > Appointment </NavLink> </li>
    <li> <NavLink to = '/reviews' > Reviews </NavLink> </li>
    <li> <NavLink to = '/contacus' > Contact Us </NavLink> </li>
    <li> <NavLink to = '/loginform' > Log in </NavLink> </li>
    </>
    return (
        <div>
    <div className="navbar bg-base-100 text-black">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
         {menu}
      </ul>
    </div>
    <a href='/' className="btn btn-ghost normal-case text-2xl"> Doctors Portal</a>
  </div>
  <div className="navbar-center hidden lg:flex  ">
    <ul className="menu menu-horizontal p-0 ">
      {menu}
    </ul>
  </div>

</div>
        </div>
    );
};

export default Navbar;
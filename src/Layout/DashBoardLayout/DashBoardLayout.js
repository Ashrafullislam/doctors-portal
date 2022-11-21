import React from 'react';
import {Link, Outlet} from 'react-router-dom';
import Navbar from '../../Pages/Shared/Navbar/Navbar';

const DashBoardLayout = () => {
  return (
    <div>
      <Navbar> </Navbar>

      <div className="drawer drawer-mobile">
        <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* <!-- Page content here --> */}

          <Outlet> </Outlet>
       
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard-drawer" className="drawer-overlay" />
          <ul className="menu  p-4 w-80 bg-base-100 ">
            {/* <!-- Sidebar content here --> */}
            <li ><Link to='/dashboard'> My Appointment </Link></li>
            <li><Link to='/dashboard/users'> All Users</Link></li>
          </ul>

        </div>
      </div>
    </div>
  );
};

export default DashBoardLayout;

import React, { useContext } from 'react';
import {Link, Outlet} from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import useAdmin from '../../hooks/useAdmin';
import Navbar from '../../Pages/Shared/Navbar/Navbar';


const DashBoardLayout = () => {
const  {user} = useContext(AuthContext);
const [isAdmin] = useAdmin(user?.email) ;
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
            {/* if isAdmin user.role ? then show the all  user option  */}
            { isAdmin && 
            <>
               <li><Link to='/dashboard/users'> All Users</Link></li>
               <li> <Link to='/dashboard/adddoctors' > Add Doctors </Link> </li>
               <li> <Link to='/dashboard/managedoctors' > Manage Doctors </Link> </li>
            </> 
            }
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashBoardLayout;



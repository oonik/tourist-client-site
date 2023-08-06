import React, { useContext } from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider/AuthProvider';
import useAdmin from '../hook/useAdmin';

const DashboardLayout = () => {
    const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email)
    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer lg:drawer-open mt-5">
                <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 h-full bg-green-200 text-base-content">
                        {
                            user?.email && <li><Link to='/dashboard/booking'>My Booking</Link></li>
                        }
                        {
                            isAdmin && <li><Link to='/dashboard/allUser'>All User</Link></li>
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;



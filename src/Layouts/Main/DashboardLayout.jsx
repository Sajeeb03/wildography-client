import { Sidebar } from 'flowbite-react';
import React, { useState } from 'react';
import { FaHome } from 'react-icons/fa';
import { Link, Outlet } from 'react-router-dom';
import Header from '../../Pages/Shared/Header/Header';

const DashboardLayout = () => {
    const [drawer, setDrawer] = useState(false);
    return (
        <div>
            <Header />
            <div className='md:flex md:flex-row relative md:static'>
                <div onClick={() => setDrawer(!drawer)} className={`bg-white md:bg-[#242424] p-3 text-black md:text-white w-[250px] h-screen md:w-1/5 md:ml-0 transition ${drawer ? "-translate-x-64" : "translate-x-0"} absolute md:static z-10 ease-linear md:translate-x-0`}>
                    <ul>
                        <li>
                            <button className='border-2 border-black md:border-white p-2 w-full rounded-lg mt-2'>
                                <Link to="/dashboard/myReviews">My Reviews</Link>
                            </button>
                        </li>
                        <li>
                            <button className='border-2 border-black md:border-white p-2 w-full rounded-lg mt-2'>
                                <Link to="/dashboard/addService">Add Service</Link>
                            </button>
                        </li>
                    </ul>
                </div>
                <div className='md:flex-1 absolute md:static top-0 w-full'>
                    <Outlet />
                </div>
            </div>
            <FaHome onClick={() => setDrawer(!drawer)} className='bg-[#242424] absolute top-20 right-2 text-4xl md:hidden'></FaHome>
        </div>
    );
};

export default DashboardLayout;
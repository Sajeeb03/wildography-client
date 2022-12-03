
import { async } from '@firebase/util';
import React, { useContext, useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import img from "../../../assets/main.png"
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const [bars, setBars] = useState(false);
    const handleSignOut = async () => {
        try {
            const res = await logOut();

        } catch (error) {
            console.error(error)
        }
    }
    return (
        <div className='flex justify-between items-center my-4'>
            <div>
                <Link to="/">
                    <img src={img} alt="" className='h-14' />
                </Link>
            </div>
            <div className='hidden md:block'>
                <Link to="/">Home</Link>
                <Link className='ml-3' to="/services">Services</Link>
                <Link className='ml-3' to="/blogs">Blogs</Link>
                {
                    user?.uid ? <>

                        <Link className='ml-3' to="/dashboard/">Dashboard</Link>
                        <Link onClick={handleSignOut} className='ml-3 mr-1' to="/login">LogOut</Link>
                    </> : <Link className='ml-3' to="/login">Log In</Link>
                }

            </div>
            <div className='md:hidden relative'>
                <FaBars onClick={() => setBars(!bars)} className='mr-4 h-6 w-6' />
                {bars && <div className='absolute top-2 right-6 z-10 border-2 border-white text-xl rounded-lg bg-white text-black mt-6 py-4 px-28 text-left'>
                    <ul onClick={() => setBars(!bars)}>
                        <li><Link to="/">Home</Link></li>
                        <li><Link className='' to="/services">Services</Link></li>
                        <li><Link className='' to="/blogs">Blogs</Link></li>
                        {
                            user?.uid ? <>
                                <li>
                                    <Link className='' to="/dashboard/">Dashboard</Link>
                                </li>
                                <li>
                                    <Link onClick={handleSignOut} className='' to="/login">LogOut</Link>
                                </li>
                            </> : <li>
                                <Link className='' to="/login">Log In</Link>
                            </li>
                        }
                    </ul>
                </div>
                }
            </div>

        </div>
    );
};

export default Header;
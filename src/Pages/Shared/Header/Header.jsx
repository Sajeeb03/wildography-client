
import { async } from '@firebase/util';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import img from "../../../assets/main.png"
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
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
            <div>
                <Link to="/">Home</Link>
                <Link className='ml-3' to="/services">Services</Link>
                <Link className='ml-3' to="/blogs">Blogs</Link>
                {
                    user?.uid ? <>
                        <Link className='ml-3' to="/myreviews">My Reviews</Link>
                        <Link className='ml-3' to="/service">Add Service</Link>
                        <Link onClick={handleSignOut} className='ml-3' to="/login">LogOut</Link>
                    </> : <Link className='ml-3' to="/login">Log In</Link>
                }

            </div>

        </div>
    );
};

export default Header;
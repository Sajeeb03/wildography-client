
import React from 'react';
import { Link } from 'react-router-dom';
import img from "../../../assets/main.png"

const Header = () => {

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
                <Link className='ml-3' to="/login">Log In</Link>
            </div>

        </div>
    );
};

export default Header;
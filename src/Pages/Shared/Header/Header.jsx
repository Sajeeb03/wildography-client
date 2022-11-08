
import React from 'react';
import { Link } from 'react-router-dom';
import img from "../../../assets/main.png"

const Header = () => {

    return (
        <div className='flex justify-between items-center my-4'>
            <div>
                <img src={img} alt="" className='h-14' />
            </div>
            <div>
                <Link to="/">Home</Link>
                <Link className='ml-3' to="/">Home</Link>
                <Link className='ml-3' to="/">Home</Link>
                <Link className='ml-3' to="/">Home</Link>
            </div>

        </div>
    );
};

export default Header;
import React from 'react';
import { FaRegSmileWink } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className='h-screen flex flex-col gap-7 items-center justify-center'>
            <FaRegSmileWink className='h-[40px] w-[40px]' />
            <h1 className="text-5xl">404</h1>
            <p className="text-3xl font-semibold">Page not found</p>
            <Link to="/"><button className=' bg-[#242424] border-2 border-white rounded-lg px-4 py-2 mt-2'>Back to Home</button></Link>
        </div >
    );
};

export default Error;
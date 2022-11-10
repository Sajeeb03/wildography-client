import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../../assets/home.jpg'
const Main = () => {
    return (
        <div className='relative mb-3'>
            <div className='slider-img'>
                <img src={img} className="w-full" alt="" />
            </div>
            <div className='absolute top-3 left-5 md:top-1/3 md:left-14'>
                <h1 className="text-2xl md:text-5xl font-bold">Wildography</h1>
                <p className='w-5/6 md:w-1/3 my-3'>“When words become unclear, I shall focus with photographs. When images become inadequate, I shall be content with silence.”
                    <span className='block mt-2'>~Ansel Adams</span> </p>
                <Link to='/contact'>
                    <p className='text-orange-500'><span className=''>........</span> Contact Me</p>
                </Link>
            </div>
        </div>
    );
};

export default Main;
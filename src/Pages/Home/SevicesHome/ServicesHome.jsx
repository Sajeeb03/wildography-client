import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Service from './Service';

const ServicesHome = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch(`https://wildography-server.vercel.app/services/home`)
            .then(res => res.json())
            .then(data => {
                setServices(data.data)
            })
    }, [])
    return (
        <div className='md:my-12'>
            <h1 className="text-4xl font-bold text-center">Services</h1>
            <p className='text-center'>Services I provide regarding wildlife photography are mentioned here.</p>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5 my-5'>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>
            <div className='flex justify-center'>
                <Link to='/services'>
                    <button className='bg-[#242424] border-2 border-white rounded-lg px-4 py-2'>See All</button>
                </Link>
            </div>
        </div>
    );
};

export default ServicesHome;
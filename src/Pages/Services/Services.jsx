import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Service from '../Home/SevicesHome/Service'
const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch(`https://wildography-server.vercel.app/services`)
            .then(res => res.json())
            .then(data => {
                setServices(data.data)
            })
    }, [])
    return (
        <div className='my-12'>
            <h1 className="text-4xl font-bold text-center">Services</h1>
            <p className='text-center'>Services I provide regarding wildlife photography are mentioned here.</p>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;
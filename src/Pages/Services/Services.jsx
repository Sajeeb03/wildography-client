import { Spinner } from 'flowbite-react';
import React, { useEffect, useState } from 'react';
import ScrollToTop from '../../Hooks/useScrollToTop';
import useTitle from '../../Hooks/useTitle';
import Service from '../Home/SevicesHome/Service'
const Services = () => {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch(`https://wildography-server.vercel.app/services`)
            .then(res => res.json())
            .then(data => {
                setServices(data.data);
                setLoading(false)
            })
    }, [])

    useTitle("Services")
    ScrollToTop();

    if (loading) {
        return <div className="text-center my-64">
            <Spinner aria-label="Center-aligned spinner example" />
        </div>
    }
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
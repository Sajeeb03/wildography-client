import { Card } from 'flowbite-react';
import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    const { _id, title, details, img, price, rating } = service;
    return (
        <div className='my-4'>
            <Card imgSrc={img} className="bg-[#242424] text-white">
                <h5 className="text-2xl font-bold tracking-tight">
                    {title}
                </h5>
                <p className="font-normal ">
                    {details.length > 100 ? details.slice(0, 100) + '...' : details}
                </p>
                <div className="flex justify-end">
                    <Link to={`/services/${_id}`}>
                        <button className='bg-[#242424] border-2 border-white rounded-lg px-4 py-2'>View Details</button>
                    </Link>
                </div>
            </Card>
        </div>
    );
};

export default Service;
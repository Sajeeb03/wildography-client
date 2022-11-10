import { Card } from 'flowbite-react';
import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link } from 'react-router-dom';
import 'react-photo-view/dist/react-photo-view.css';

const Service = ({ service }) => {
    const { _id, title, details, img, price, rating } = service;
    return (
        <div className=''>
            <Card style={{ backgroundColor: "#242424" }} className="text-white">
                <PhotoProvider>
                    <PhotoView src={img}>
                        <img src={img} className="h-[210px] rounded-t-lg" alt="" />
                    </PhotoView>
                </PhotoProvider>
                <h5 className="text-2xl font-bold tracking-tight">
                    {title}
                </h5>
                <p className="font-normal ">
                    {details.length > 100 ? details.slice(0, 100) + '...' : details}
                </p>
                <div className="flex justify-between items-center">
                    <p>Price: ${price}</p>
                    <Link to={`/services/${_id}`}>
                        <button className='bg-[#242424] border-2 border-white rounded-lg px-4 py-2'>View Details</button>
                    </Link>
                </div>
            </Card>
        </div>
    );
};

export default Service;
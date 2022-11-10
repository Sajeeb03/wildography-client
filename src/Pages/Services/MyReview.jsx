import { Spinner, TextInput } from 'flowbite-react';
import React, { useContext, useEffect, useState } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const MyReview = () => {
    const { user } = useContext(AuthContext);
    const [myReviews, setMyReviews] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`https://wildography-server.vercel.app/reviews?email=${user.email}`)
            .then(res => res.json())
            .then(data => {
                setMyReviews(data.data)
                setLoading(false)
            })
            .catch(err => console.error(err))
    }, [user?.email])
    if (loading) {
        return <div className="text-center my-64">
            <Spinner aria-label="Center-aligned spinner example" />
        </div>
    }

    return (
        <div>

            {
                myReviews.map(review => <div className='border-2 border-white rounded-lg p-12 my-5' key={review._id}>
                    <div className='flex items-center gap-3'>
                        {review.img ? <img src={review?.img} className="w-12 rounded-full" alt="" /> : <FaUser className='h-6 w-6 text-white' />}
                        <p className='text-lg font-semibold'>{review.name}</p>
                    </div>
                    <div className='ml-15 mt-2'>
                        <p className='text-lg font-semibold'>Service Name: {review.service}</p>
                        <p className=''>Review: {review.review}</p>
                    </div>
                    <div className='flex justify-end gap-3 items-end'>
                        <button className='flex gap-2 bg-[#242424] border-2 border-white rounded-lg px-4 py-2'>Delete <FaTrash className='h-6 w-6'></FaTrash></button>
                        <button className='flex gap-2 bg-[#242424] border-2 border-white rounded-lg px-4 py-2'>Edit/Update <FaEdit className='h-6 w-6'></FaEdit></button>
                    </div>

                </div>)
            }

        </div>
    );
};

export default MyReview;
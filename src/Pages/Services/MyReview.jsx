import { TextInput } from 'flowbite-react';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const MyReview = () => {
    const { user } = useContext(AuthContext);
    const [myReviews, setMyReviews] = useState([])

    useEffect(() => {
        fetch(`https://wildography-server.vercel.app/reviews?email=${user.email}`)
            .then(res => res.json())
            .then(data => {
                setMyReviews(data.data)
            })
            .catch(err => console.error(err))
    }, [])

    return (
        <div className='border-2 border-white rounded-lg p-12 my-5'>
            <form>
                <TextInput
                    id="large"
                    type="text"
                    sizing="lg"
                    placeholder='Your review'
                    defaultValue={myReviews.service}
                />
                <button type="submit" className='bg-[#242424] border-2 border-white rounded-lg px-4 py-2 mt-2'>Add Review</button>

            </form>

        </div>
    );
};

export default MyReview;
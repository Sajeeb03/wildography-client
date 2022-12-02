
import { TextInput } from 'flowbite-react';
import React, { useContext, useEffect, useState } from 'react';
import { FaStar, FaUser } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import useTitle from '../../Hooks/useTitle';

const ServiceDetails = () => {
    const service = useLoaderData();
    // console.log(service.data)
    const { user, logOut } = useContext(AuthContext);
    const { title, price, rating, details, img } = service.data;
    const [reviews, setReviews] = useState([]);
    const [refresh, setRefresh] = useState(true);
    const showDate = new Date();
    const time = showDate.getDate() + showDate.getTime();

    const handleReview = async e => {
        e.preventDefault();
        const reviewDetails = {
            name: user.displayName,
            email: user.email,
            img: user.photoURL,
            review: e.target.review.value,
            service: title,
            time: time
        }

        // console.log(reviewDetails);

        try {
            const res = await fetch(`https://wildography-server.vercel.app/reviews`, {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(reviewDetails)
            })
            const data = await res.json();
            // console.log(data)
            e.target.reset();
            setRefresh(!refresh)

        } catch (error) {
            console.error(error)
        }

    }

    useTitle(`services/${title}`)

    useEffect(() => {
        fetch(`https://wildography-server.vercel.app/reviews?service=${title}`, {
            headers: {

                authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    return logOut()
                }
                return res.json()
            })
            .then(data => setReviews(data.data))
            .catch(err => console.error(err))
        window.scrollTo(0, 0)
    }, [refresh])


    return (
        <div>
            <div className='md:w-1/2 m-auto border-2 border-white p-4 rounded-lg my-12'>
                <h1 className="text-4xl font-bold text-center mb-3">{title}</h1>
                <img src={img} alt="" className='md:h-[500px] w-full' />
                <h2 className="text-2xl font-semibold my-2">Description:</h2>
                <p className='mb-3'>{details}</p>
                <h2 className="text-2xl font-semibold my-2">Price: ${price}</h2>
                <p className='flex items-center gap-2'>Ratings: {rating} <FaStar /></p>
            </div>
            <div className='border-2 border-white p-4 rounded-lg mb-12'>
                {
                    reviews.map(review => <div key={review._id} className="border-2 border-white p-4 rounded-lg mb-2">

                        <div className='flex items-center gap-3'>
                            {review.img ? <img src={review?.img} className="w-12 rounded-full" alt="" /> : <FaUser className='h-6 w-6 text-white' />}
                            <p>{review.name}</p>
                        </div>
                        <p className='ml-16'>{review.review}</p>
                    </div>)
                }
                {
                    !user?.uid ? <p className='mb-2'>Please <Link to="/login" className='border-2 border-white p-1 rounded-lg'>LOG IN</Link> to add a review.</p> :
                        <form onSubmit={handleReview}>
                            <TextInput
                                id="large"
                                type="text"
                                sizing="lg"
                                name='review'
                                placeholder='Your review'
                            />
                            <button type="submit" className='bg-[#242424] border-2 border-white rounded-lg px-4 py-2 mt-2'>Add Review</button>

                        </form>
                }
            </div>
        </div>
    );
};

export default ServiceDetails;
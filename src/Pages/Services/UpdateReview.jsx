import { async } from '@firebase/util';
import { TextInput } from 'flowbite-react';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import ScrollToTop from '../../Hooks/useScrollToTop';

const UpdateReview = () => {
    const [update, setUpdate] = useState([]);
    const route = useParams();
    const id = route.id;
    const navigate = useNavigate();
    ScrollToTop();
    const handleUpdate = async e => {
        e.preventDefault();
        const updated = {
            review: e.target.review.value
        }
        const res = await fetch(`https://wildography-server.vercel.app/reviews/${id}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(updated)
        })
        const data = await res.json();
        if (data.success) {
            toast.success(data.message, { autoClose: 500 })
            navigate('/myreviews');
        }
    }
    useEffect(() => {
        fetch(`https://wildography-server.vercel.app/reviews/${id}`)
            .then(res => res.json())
            .then(data => {
                setUpdate(data.data)
            })
            .catch(err => console.error(err))
    }, [id])
    return (
        <div className='md:w-1/2 m-auto border-2 border-white p-6 my-12 rounded-lg'>
            <form onSubmit={handleUpdate}>
                <TextInput
                    id="large"
                    type="text"
                    sizing="lg"
                    name='review'
                    defaultValue={update.review}
                />
                <button type="submit" className='bg-[#242424] border-2 border-white rounded-lg px-4 py-2 mt-2'>Update</button>
            </form>
        </div>
    );
};

export default UpdateReview;
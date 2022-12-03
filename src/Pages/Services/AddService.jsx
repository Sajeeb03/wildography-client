import { TextInput } from 'flowbite-react';
import React from 'react';
import { toast } from 'react-toastify';
import useTitle from '../../Hooks/useTitle';

const AddService = () => {
    useTitle("Add Service")
    const handleAddService = async (e) => {
        e.preventDefault();
        const form = e.target;
        const service = {
            title: form.name.value,
            img: form.url.value,
            rating: Number(form.rating.value),
            price: Number(form.price.value),
            details: form.details.value,
        }

        try {
            const res = await fetch(`https://wildography-server.vercel.app/services`, {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(service)
            })

            const data = await res.json();
            if (data.success) {
                toast.success("Service Added", { autoClose: 500 })
                e.target.reset()
            }
        } catch (error) {
            console.error(error)
        }

        // console.log(service)
    }
    return (
        <div className='border-2 border-white p-6 rounded-lg my-12 md:my-5'>
            <h1 className='text-3xl text-center font-bold'>Add A Service</h1>
            <form onSubmit={handleAddService}>
                <div>
                    <div className="block mb-1">
                        Service Name
                    </div>
                    <TextInput
                        id="name1"
                        type="text"
                        name='name'
                        placeholder="service name"
                        required={true}
                    />
                </div>
                <div>
                    <div className="block mb-1">
                        Image
                    </div>
                    <TextInput
                        id="image"
                        type="text"
                        name='url'
                        placeholder="photo url"
                        required={true}
                    />
                </div>
                <div>
                    <div className="block mb-1">
                        Rating
                    </div>
                    <TextInput
                        id="rate"
                        type="text"
                        name='rating'
                        placeholder="rating out of 5"
                        required={true}
                    />
                </div>
                <div>
                    <div className="block mb-1">
                        Price
                    </div>
                    <TextInput
                        id="price"
                        type="text"
                        name='price'
                        placeholder="Price"
                        required={true}
                    />
                </div>
                <div>
                    <div className="block mb-1">
                        Details
                    </div>
                    <TextInput
                        id="details"
                        type="text"
                        name='details'
                        placeholder="Details"
                        required={true}
                    />
                </div>
                <button type="submit" className='bg-[#242424] border-2 border-white rounded-lg px-4 py-2 mt-2'>Add Service</button>
            </form>

        </div>
    );
};

export default AddService;
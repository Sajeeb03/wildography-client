import { TextInput } from 'flowbite-react';
import React from 'react';
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa';
import profile from '../../../assets/profile.jpeg'
const About = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 items-center my-6 md:my-24 z-10'>
            <img src={profile} className="h-[556px] w-full" alt="" />
            <div className='w-2/3 m-auto mt-14 md:mt-16'>
                <h1 className="text-4xl font-bold">About Me</h1>
                <p>Hello Myself Abdullah, A passionate wildlife photographer. I have done my phd in wildlife photography from Oxford university. And I have two years of experience as a professional wildlife photographer. </p>
                <div className='mt-3'>
                    <h1 className="text-2xl font-semibold">Hire Me</h1>
                    <div className='flex justify-start gap-4 text-4xl'>
                        <FaFacebook /><FaTwitter /><FaGithub /><FaInstagram />
                    </div>
                    <div className='my-2'>
                        <TextInput
                            id="small"
                            type="text"
                            sizing="sm"
                            placeholder='Your Message'
                        />
                    </div>
                    <button className='bg-[#242424] border-2 border-white rounded-lg px-4 py-2'>Send</button>
                </div>
            </div>
        </div>
    );
};

export default About;
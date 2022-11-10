import { TextInput } from 'flowbite-react';
import React from 'react';
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import img from "../../../assets/main.png"
const Footer = () => {
    return (
        <div className='py-12 border-2 border-white'>
            <div className='grid grid-cols-1 md:grid-cols-4'>
                <div className='flex justify-center items-center'>
                    <img src={img} className="w-64" alt="" />
                </div>
                <div className='m-auto mt-0'>
                    <h1 className="text-2xl font-semibold">Technologies We Used</h1>
                    <ul>
                        <li>React</li>
                        <li>Tailwind CSS</li>
                        <li>Firebase</li>
                        <li>React router</li>
                        <li>Flowbite React</li>
                    </ul>
                </div>
                <div className='md:m-auto mt-3 ml-14 md:mt-0'>
                    <h1 className="text-2xl font-semibold">Explore</h1>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/services">Services</Link></li>
                        <li><Link to="/blogs">Blogs</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>
                <div className='md:m-auto mt-3 ml-14 md:ml-0 md:mt-0'>
                    <h1 className="text-2xl font-semibold">Hire Me</h1>
                    <div className='flex justify-start gap-4 text-4xl'>
                        <FaFacebook /><FaTwitter /><FaGithub /><FaInstagram />
                    </div>
                    <div className='my-2 w-5/6 md:w-full'>
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
            <p className='text-center'>
                <small>Copyright® reserved Nov/2022</small>
            </p>
        </div>
    );
};

export default Footer;
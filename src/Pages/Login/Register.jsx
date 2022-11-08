import { Button, Label, TextInput } from 'flowbite-react';
import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    const [userInfo, setUserInfo] = useState({ email: "", password: "" });
    const [error, setError] = useState({ email: "", password: "", general: "" })
    const handleRegister = e => {
        e.preventDefault();
        console.log(userInfo)
    }
    const handleEmail = (e) => {
        console.log(e.target.value)
        if (!/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e.target.value)) {
            setError({ ...error, email: 'Please enter a valid email' });
            setUserInfo({ ...userInfo, email: "" })
        }
        else {
            setError({ ...error, email: "" });
            setUserInfo({ ...userInfo, email: e.target.value });
        }

    }
    const handlePassword = (e) => {
        if (e.target.value.length < 6) {
            setError({ ...error, password: 'Password must be at least 6 characters' });
            setUserInfo({ ...userInfo, password: "" })
        } else {
            setError({ ...error, password: "" });
            setUserInfo({ ...userInfo, password: e.target.value });
        }
    }
    return (
        <div className='w-1/2 m-auto border-2 border-orange-500 my-24 p-24'>
            <h1 className='text-4xl font-bold text-center mb-3'>Register</h1>
            <form onSubmit={handleRegister}>
                <div>
                    <div className="block mb-1">
                        Your Name
                    </div>
                    <TextInput
                        id="name1"
                        type="text"
                        placeholder="e.g.John Doe"
                        required={true}
                        onChange={handleEmail}
                    />
                </div>
                <div>
                    <div className="block my-1">
                        Your Photo
                    </div>
                    <TextInput
                        id="photo1"
                        type="text"
                        placeholder="insert an url"
                        required={true}
                        onChange={handleEmail}
                    />
                </div>
                <div>
                    <div className="block my-1">
                        Your Email
                    </div>
                    <TextInput
                        id="email1"
                        type="email"
                        placeholder="name@mail.com"
                        required={true}
                        onChange={handleEmail}
                    />
                </div>
                {
                    error.email && <small className='text-orange-300'>{error.email}</small>
                }
                <div>
                    <div className="block my-1">
                        Your Password
                    </div>
                    <TextInput
                        id="password1"
                        type="password"
                        placeholder='password'
                        required={true}
                        onChange={handlePassword}
                    />
                </div>
                {
                    error.password && <small className='text-orange-300'>{error.password}</small>
                }

                <Button type="submit" className='w-full mt-5 bg-orange-500 hover:bg-orange-300'>
                    Register
                </Button>
                {
                    error.general && <small className='text-orange-300'>{error.general}</small>
                }
            </form>
            <p className='mt-2 text-center'>Already have an account? <Link to="/login" className='text-orange-500'>Login now!</Link></p>
        </div>
    );
};

export default Register;
import React from 'react';
import { useContext } from 'react';
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
const GoogleSignIn = () => {
    const { googleSignIn } = useContext(AuthContext);
    const handleGoogleSignIn = async () => {
        try {
            const res = await googleSignIn();
            console.log(res.user)
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <button onClick={handleGoogleSignIn} className='flex gap-2 items-center justify-center border-2 border-orange-500 rounded-lg bg-transparent w-full py-2 hover:bg-orange-500'>
            <FaGoogle /> <p>Sign Up with Google</p>
        </button>
    );
};

export default GoogleSignIn;
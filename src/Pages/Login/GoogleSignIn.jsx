import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React from 'react';
import { useContext } from 'react';
import { FaGithub, FaGoogle } from "react-icons/fa";
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
const GoogleSignIn = () => {
    const { googleSignIn, gitHubSignIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const githubProvider = new GithubAuthProvider();
    const googleProvider = new GoogleAuthProvider();
    const handleGoogleSignIn = async () => {
        try {
            const res = await googleSignIn(googleProvider);
            console.log(res.user);
            navigate(location?.state?.from?.pathname || '/')
        } catch (error) {
            console.error(error)
        }
    }
    const handleGitHubSignIn = async () => {
        try {
            const res = await gitHubSignIn(githubProvider);
            console.log(res.user)
            navigate(location?.state?.from?.pathname || '/')
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <div>
            <button onClick={handleGoogleSignIn} className='flex gap-2 items-center justify-center border-2 border-orange-500 rounded-lg bg-transparent w-full py-2 hover:bg-orange-500'>
                <FaGoogle /> <p>Sign Up with Google</p>
            </button>
            <button onClick={handleGitHubSignIn} className='flex gap-2 items-center justify-center border-2 border-orange-500 rounded-lg bg-transparent w-full py-2 hover:bg-orange-500 mt-2'>
                <FaGithub /> <p>Sign Up with Github</p>
            </button>
        </div>
    );
};

export default GoogleSignIn;
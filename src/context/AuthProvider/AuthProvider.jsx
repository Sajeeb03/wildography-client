import React from 'react';
import { createContext } from 'react';
import { getAuth, signInWithPopup, onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth'

import { useState } from 'react';
import app from '../../firebase/firebase.config';
import { useEffect } from 'react';
export const AuthContext = createContext();
const auth = getAuth(app)
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(true);


    //sign in with google account 
    const googleSignIn = (provider) => {
        setLoading(true);
        return signInWithPopup(auth, provider)
    }
//sign in with github

    const gitHubSignIn = (provider) => {
        setLoading(true);
        return signInWithPopup(auth, provider);
    }
    //registration 

    const registration = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    //sign in with email and password

    const logIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    //update user

    const updateUser = (name, url) => {
        setLoading(true)
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: url
        })
    }
    //logout
    const logOut = () => {
        setLoading(true);
        return signOut(auth)
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log("user updated")
            setUser(currentUser);
            setLoading(false);
        });
        return () => {
            unsubscribe();
        }
    }, [])

    const authInfo = {
        user,
        loading,
        googleSignIn,
        logOut,
        logIn,
        updateUser,
        registration,
        gitHubSignIn
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
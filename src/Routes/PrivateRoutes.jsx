import { Spinner } from 'flowbite-react';
import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider/AuthProvider';

const PrivateRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    if (loading) {
        return <div>
            <Spinner
                color="failure"
                aria-label="Failure spinner example"
            />
        </div>
    }

    if (!user?.uid) {
        return <Navigate to='/login' state={{ from: location }} replace></Navigate>
    }
    else {
        return children;
    }
};

export default PrivateRoutes;
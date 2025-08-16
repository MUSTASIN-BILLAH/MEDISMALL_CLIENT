import React from 'react';
import UseAuth from '../Hooks/UseAuth';
import { Navigate } from 'react-router-dom';

const privateRoute = ({children}) => {

    const {user, loading} = UseAuth();

    if(loading) {
        return <span className="loading loading-spinner text-accent"></span>
    }

    if(!user) {
        <Navigate to="/login"></Navigate>
    }

    return children;
};

export default privateRoute;
import React, { useContext, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useAdmin from '../../hook/useAdmin';
import Loading from '../../Shared/Loading/Loading';
import { Navigate, useLocation } from 'react-router-dom';

const AdminRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    const [isAdmin, adminIsLoading] = useAdmin(user?.email);
    const location = useLocation();

     if(loading || adminIsLoading){
        return <Loading></Loading>
     };
     if(user && isAdmin){
        return children;
     }
    return <Navigate to='/login' state={{from: location}} replace></Navigate>
};

export default AdminRoute;
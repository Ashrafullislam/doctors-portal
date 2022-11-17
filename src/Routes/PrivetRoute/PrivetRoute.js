import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const PrivetRoute = ({children}) => {
    const {user,loading } = useContext(AuthContext)
    const location = useLocation()
    
    if(!user) {
        return <Navigate to='/loginform'  state={{from:location}} replace />
    }
    return children ;
   
};

export default PrivetRoute;
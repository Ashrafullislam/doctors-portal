import React, {useContext} from 'react';
import {Navigate, useLocation} from 'react-router-dom';
import {AuthContext} from '../../AuthProvider/AuthProvider';
import Loading from '../../Pages/Shared/Loading/Loading';

const PrivetRoute = ({children}) => {
  const {user, loading} = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return <Loading > </Loading> 
     
  }

  if (!user?.email) {
    return <Navigate to="/loginform" state={{from: location}} replace />;
  }
  return children;
};

export default PrivetRoute;

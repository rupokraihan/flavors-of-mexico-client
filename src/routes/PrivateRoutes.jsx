import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProviders';
import { Navigate } from 'react-router-dom';
import LoadingSpinner from '../components/LoadingSpinner';

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  
  if (loading) {
    return <LoadingSpinner/>;
  }
  
  if (user) {
    return children;
  }

  return <Navigate to="/login" replace={true} />
    
};

export default PrivateRoutes;
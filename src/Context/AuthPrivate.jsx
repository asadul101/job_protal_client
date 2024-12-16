import React, { useContext } from 'react';
import AuthContext from './AuthContext';
import { Navigate, useLocation } from 'react-router-dom';

const AuthPrivate = ({children}) => {
   const {user,loder}=useContext(AuthContext)
   const location=useLocation()
   console.log(location);
   if(loder){
      return <span className="loading loading-spinner loading-lg"></span>
   }
   if(user){
      return children;
   }
   return <Navigate to='/login' state={location?.pathname}></Navigate>;
};

export default AuthPrivate;
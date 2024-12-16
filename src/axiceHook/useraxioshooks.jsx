import axios from 'axios';
import { useEffect } from 'react';
import AuthContext from '../Context/AuthContext';
import useAuth from '../hooks/AuthContexHook';
import { useNavigate } from 'react-router-dom';


const axiosInstance = axios.create({
   baseURL: 'https://job-protal-server-sooty.vercel.app',
   withCredentials: true
})

const useraxioshooks = () => {
   const{handleSinOut}=useAuth();
   const navgiter=useNavigate()

   useEffect(()=>{

      axiosInstance.interceptors.response.use(response=>{
         return response
      },error=>{
         if(error.status===401|| error.status===403){
            handleSinOut()
            .then(res=>{
               console.log(res.user)
               navgiter('login')
            })
            .catch(error=>console.log(error))
         }
         console.log('alskdfldf',error);
         return Promise.reject(error)
      })


   },[])
   return axiosInstance;
};

export default useraxioshooks;
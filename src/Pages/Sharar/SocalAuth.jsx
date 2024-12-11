import React, { useContext } from 'react';
import AuthContext from '../../Context/AuthContext';

const SocalAuth = () => {
   const { handleGoogle } = useContext(AuthContext)
   const handleGoog = () => {
      handleGoogle()
   }
   return (
      <div>
         <div className="divider">OR</div>
         <div className='flex justify-center items-center py-3'>
            <button onClick={handleGoog} className='btn btn-wide text-3xl font-bold'>Google</button>
         </div>
      </div>
   );
};

export default SocalAuth;
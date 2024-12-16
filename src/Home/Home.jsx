import React from 'react';
import Bannner from './Bannner';
import HotJobs from './HotJobs';

const Home = () => {
   return (
      <div className='py-6'>
        <Bannner></Bannner>
        <HotJobs></HotJobs>
      </div>
   );
};

export default Home;
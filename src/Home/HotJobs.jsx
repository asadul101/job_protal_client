import React, { useEffect, useState } from 'react';
import HotJobCard from './HotJobCard';

const HotJobs = () => {
   const[jobs,setJobs]=useState([])
   useEffect(()=>{
      fetch('http://localhost:5000/jobs')
      .then(res=>res.json())
      .then(data=>{
         setJobs(data)
      })
   },[])
   return (
      <>
        <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 pt-10 pb-10'>
         {
            jobs.map(job=><HotJobCard key={job._id} job={job}></HotJobCard>)
         }
        </div>
      </>
   );
};

export default HotJobs;
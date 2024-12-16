import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const JobDetalis = () => {
   const {_id, location, applicationDeadline, description, company } = useLoaderData()
   // console.log(loder);
   return (
      <div className='pt-10'>
         <h1 className='text-3xl font-bold text-center'>Job Detalis All</h1>
         <div className='space-y-2 pb-10'>
            <h1 className='text-4xl font-medium'>Company: {company}</h1>
            <p className='text-xl font-normal'>Location: {location}</p>
            <p className='text-xl font-normal'>Description: {description}</p>
            <p className='text-xl font-normal'>Applideadline: {applicationDeadline}</p>
            <Link to={`/jobapply/${_id}`}>
               <button className='btn btn-primary'>Appli Now</button>
            </Link>
         </div>
      </div>
   );
};

export default JobDetalis;
import React from 'react';
import { FaLocationDot } from "react-icons/fa6";
import { FaDollarSign } from "react-icons/fa";
import { Link } from 'react-router-dom';

const HotJobCard = ({ job }) => {
   const { _id, requirements, location, company_logo, description, salaryRange, title, company } = job;
   return (
      <div>
         <div className="card bg-base-100 shadow-xl border">
            <div className='flex gap-3 items-center pl-4 pt-4'>
               <figure>
                  <img
                     src={company_logo}
                     alt="Shoes" />
               </figure>
               <div>
                  <h2 className='text-2xl font-bold'>{company}</h2>
                  <p className='flex items-center gap-1'><FaLocationDot />{location}</p>
               </div>
            </div>
            <div className="card-body ">
               <h2 className="card-title">{title}</h2>
               <p>{description}</p>
               <div className='flex gap-2 flex-wrap'>
                  {
                     requirements.map((ments,idx) => <p key={idx} className='text-center py-2 px-1 hover:bg-slate-400 border rounded-lg '>{ments}</p>)
                  }
               </div>
               <div className="card-actions justify-end items-center mt-3">
                  <p className='font-bold flex items-center gap-2'>Salary: <FaDollarSign /> {salaryRange.max}-{salaryRange.min} {salaryRange.currency}</p>
                  <Link to={`/jobs/${_id}`}>
                     <button className="btn btn-primary">Applay Now</button>
                  </Link>
               </div>
            </div>
         </div>
      </div>
   );
};

export default HotJobCard;
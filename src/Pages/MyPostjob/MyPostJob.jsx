import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/AuthContexHook';
import { Link } from 'react-router-dom';

const MyPostJob = () => {
   const [jobs, setJobs] = useState([])
   const { user } = useAuth()
   useEffect(() => {
      fetch(`https://job-protal-server-sooty.vercel.app/jobs?email=${user.email}`)
         .then(res => res.json())
         .then(data => setJobs(data))
   }, [user.email])
   return (
      <div className='pt-10 pb-10'>
         <h1 className='text-3xl'>My post jobs {jobs.length}</h1>
         <div className="overflow-x-auto">
            <table className="table">
               {/* head */}
               <thead>
                  <tr>
                     <th></th>
                     <th>Title</th>
                     <th>Job datilien</th>
                     <th>ApplicationCount</th>
                     <th>Application</th>
                  </tr>
               </thead>
               <tbody>
                  {/* row 1 */}
                  {
                     jobs.map((job, idx) => <tr className="bg-base-200">
                        <th>{idx + 1}</th>
                        <td>{job.title}</td>
                        <td>{job.datilien}</td>
                        <td>{job.applicationCount}</td>
                        <td>
                           <Link to={`/viwapple/${job._id}`}>
                              <button className='btn btn-link'>Applecation</button>
                           </Link>
                        </td>
                     </tr>)
                  }
               </tbody>
            </table>
         </div>
      </div>
   );
};

export default MyPostJob;
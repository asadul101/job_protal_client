import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const ViweApplication = () => {
   const loder = useLoaderData()
   console.log(loder);
   const handleUpdateStatus=(e,id)=>{
      // console.log(e.target.value,id);
      const data={
         status:e.target.value
      }
      console.log(data,id);
      fetch(`http://localhost:5000/job-applycations/${id}`,{
         method:'put',
         headers:{
             'Content-Type': 'application/json'
         },
         body:JSON.stringify(data)
      })
      .then(res=>res.json())
      .then(data=>{
         if(data.modifiedCount>0){
            console.log(data);
            Swal.fire({
               position: "top-end",
               icon: "success",
               title: "Update Counte saved",
               showConfirmButton: false,
               timer: 1500
             });
         }
      })
   }
   return (
      <div className='pt-10 pb-10'>
         <h1>ViweApplication</h1>
         <div className="overflow-x-auto">
            <table className="table">
               {/* head */}
               <thead>
                  <tr>
                     <th></th>
                     <th>Eamil</th>
                     <th>Stats</th>
                     <th>Update States</th>
                  </tr>
               </thead>
               <tbody>
                  {/* row 1 */}
                  {
                     loder.map((jobs, idx) => <tr key={jobs._id} className="bg-base-200">
                        <th>{idx + 1}</th>
                        <td>{jobs.apply_cationEmail}</td>
                        <td>Quality Control Specialist</td>
                        <td>
                           <select onChange={(e)=>handleUpdateStatus(e,jobs._id)} defaultValue={jobs.status || 'Change states'} className="select select-bordered select-xs w-full max-w-xs">
                              <option disabled>Chage states</option>
                              <option>View States</option>
                              <option>Qulifection</option>
                              <option>Reject</option>
                           </select>
                        </td>
                     </tr>)
                  }
               </tbody>
            </table>
         </div>
      </div>
   );
};

export default ViweApplication;
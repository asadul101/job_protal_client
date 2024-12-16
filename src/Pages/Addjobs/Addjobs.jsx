
import React from 'react';
import useAuth from '../../hooks/AuthContexHook';
import Swal from 'sweetalert2';

const Addjobs = () => {
   const{user}=useAuth()
   const handleForm = e => {
      e.preventDefault()
      const formdata = new FormData(e.target);
      const data = Object.fromEntries(formdata.entries())
      console.log(data);
      const { min, max, currency, ...newjob } = data;
      newjob.salaryRange = { min, max, currency };
      newjob.requirements = newjob.requirements.split('\n')
      newjob.responsibilities = newjob.responsibilities.split('\n')
      console.log(newjob);
      fetch('https://job-protal-server-sooty.vercel.app/jobs', {
         method: 'post',
         headers: {
            'Content-Type': 'application/json'
         },
         body: JSON.stringify(newjob)
      })
         .then(res => res.json())
         .then(data => {
            console.log(data);
            if(data. insertedId){
               Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: "Your work has been saved",
                  showConfirmButton: false,
                  timer: 1500
                });
            }
         })
   }
   return (
      <div>
         <h1 className='text-2xl font-bold'> Add a jobs</h1>
         <form onSubmit={handleForm} className="card-body">
            {/* job title */}
            <div className="form-control">
               <label className="label">
                  <span className="label-text">Job Title</span>
               </label>
               <input type="text" name='title' placeholder="job title" className="input input-bordered" required />
            </div>
            {/* job loaction */}
            <div className="form-control">
               <label className="label">
                  <span className="label-text">Location</span>
               </label>
               <input type="text" name='location' placeholder="Loaction" className="input input-bordered" required />
            </div>
            {/* job job category */}
            <div className="form-control">
               <label className="label">
                  <span className="label-text">Pick a Job</span>
               </label>
               <select defaultValue='Pick a jobs fild' className="select select-ghost w-full max-w-xs">
                  <option disabled>Pick a jobs fild</option>
                  <option>Partime</option>
                  <option>Intern</option>
                  <option>Finaltion</option>
               </select>
            </div>
            {/* job job salati type */}
            <div className="form-control">
               <label className="label">
                  <span className="label-text">Pick a Type</span>
               </label>
               <select defaultValue='Pick a Type' className="select select-ghost w-full max-w-xs">
                  <option disabled>Pick a Type</option>
                  <option>Engineering</option>
                  <option>Marketing</option>
                  <option>Teching</option>
               </select>
            </div>
            {/* salari rang */}
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 items-end'>
               <div className="form-control"><label className="label">
                  <span className="label-text">Salary Range</span>
               </label>
                  <input type="text" name='min' placeholder="min" className="input input-bordered" required />
               </div>
               <div className="form-control">
                  <input type="text" name='max' placeholder="max" className="input input-bordered" required />
               </div>
               <div className="form-control">
                  <select defaultValue='currentcy' name='currency' className="select select-ghost w-full max-w-xs">
                     <option disabled>currentcy</option>
                     <option>BD Clien</option>
                     <option>USD</option>
                     <option>NIR</option>
                  </select>
               </div>
            </div>
            {/* job Descreption */}
            <div className="form-control">
               <label className="label">
                  <span className="label-text">Descreption</span>
               </label>
               <textarea name='description' placeholder="Descreston" className="input input-bordered" required />
            </div>
            {/* job company */}
            <div className="form-control">
               <label className="label">
                  <span className="label-text">Company</span>
               </label>
               <input type="text" name='company' placeholder="Company" className="input input-bordered" required />
            </div>
            {/* job REquerment */}
            <div className="form-control">
               <label className="label">
                  <span className="label-text">Requrement</span>
               </label>
               <textarea name='requirements' placeholder="Requrement have a new line" className="input input-bordered" required />
            </div>
            {/* job Responsibilite */}
            <div className="form-control">
               <label className="label">
                  <span className="label-text">Responsibilities</span>
               </label>
               <textarea name='responsibilities' placeholder="Responsibilities have a new line" className="input input-bordered" required />
            </div>
            {/* HR Name */}
            <div className="form-control">
               <label className="label">
                  <span className="label-text">HR Name</span>
               </label>
               <input type="text" name='hr_name' placeholder="HR Name" className="input input-bordered" required />
            </div>
            {/* HR applicationDeadline */}
            <div className="form-control">
               <label className="label">
                  <span className="label-text">applicationDeadline</span>
               </label>
               <input type="date" name='datilien' placeholder="applicationDeadline" className="input input-bordered" required />
            </div>
            {/* HR Email */}
            <div className="form-control">
               <label className="label">
                  <span className="label-text">HR Email</span>
               </label>
               <input type="text" name='hr_email' defaultValue={user?.email} placeholder="HR Email" className="input input-bordered" required />
            </div>
            {/* Compny url */}
            <div className="form-control">
               <label className="label">
                  <span className="label-text">Company url</span>
               </label>
               <input type="url" name='company_logo' placeholder="HR Email" className="input input-bordered" required />
            </div>
            {/* submit button */}
            <div className="form-control mt-6">
               <button className="btn btn-primary">Login</button>
            </div>
         </form>
      </div>
   );
};

export default Addjobs;
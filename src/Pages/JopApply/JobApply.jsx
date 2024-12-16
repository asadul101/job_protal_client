import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useAuth from '../../hooks/AuthContexHook';
import Swal from 'sweetalert2';

const JobApply = () => {
   const { id } = useParams()
   const{user}=useAuth()
   const navigate=useNavigate()
   console.log(user);
   console.log(id);
   const handleSubmit = e => {
      e.preventDefault()
      const form = e.target;
      const linked = form.linked.value;
      const github = form.github.value;
      const resume = form.resume.value;
      console.log(linked, github, resume);
      const jobApplay={linked,github,resume,apply_cationEmail:user.email,job_id:id}
      fetch('http://localhost:5000/job-applycations',{
         method:'post',
         headers:{
            'Content-Type': 'application/json'
         },
         body:JSON.stringify(jobApplay)
      })
      .then(res=>res.json())
      .then(data=>{
         console.log(data);
         if(data.insertedId){
            Swal.fire({
               position: "top-end",
               icon: "success",
               title: "Your work has been saved",
               showConfirmButton: false,
               timer: 1500
             });
             navigate('/jobAppllyCation')
         }
      })
   }
   return (
      <div className='pt-10'>
         <div className="card bg-base-100 w-full shadow-2xl">
            <h1 className="text-5xl font-bold text-center pt-10">Apply Job now!</h1>
            <form onSubmit={handleSubmit} className="card-body">
               <div className="form-control">
                  <label className="label">
                     <span className="label-text">LinkedIn</span>
                  </label>
                  <input type="url" name='linked' placeholder="linkenIn url" className="input input-bordered" required />
               </div>
               <div className="form-control">
                  <label className="label">
                     <span className="label-text">Github</span>
                  </label>
                  <input type="url" name='github' placeholder="github url" className="input input-bordered" required />
               </div>
               <div className="form-control">
                  <label className="label">
                     <span className="label-text">Resume Url</span>
                  </label>
                  <input type="url" name='resume' placeholder="resume url" className="input input-bordered" required />
               </div>
               <div className="form-control mt-6">
                  <button className="btn btn-primary">Apply Now</button>
               </div>
            </form>
         </div>
      </div>
   );
};

export default JobApply;
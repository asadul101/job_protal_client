import {
   createBrowserRouter,
 } from "react-router-dom";
import MainLayout from "../Pages/layout/MainLayout";
import Register from "../AuthRegister_Login/Register";
import Login from "../AuthRegister_Login/Login";
import Home from "../Home/Home";
import JobDetalis from "../Pages/JobDetalis/JobDetalis";
import AuthPrivate from "../Context/AuthPrivate";
import JobApply from "../Pages/JopApply/JobApply";
import JobApplyCation from "../Pages/JobApplyCation/JobApplyCation";
import Addjobs from "../Pages/Addjobs/Addjobs";
import MyPostJob from "../Pages/MyPostjob/MyPostJob";
import ViweApplication from "../Pages/ViweApplication/ViweApplication";

 const router = createBrowserRouter([
   {
     path: "/",
     element: <MainLayout></MainLayout>,
     children:[
      {
         path:'/',
         element:<Home></Home>
      },
      {
         path:'/jobs/:id',
         element:<AuthPrivate><JobDetalis></JobDetalis></AuthPrivate>,
         loader:({params})=>fetch(`https://job-protal-server-sooty.vercel.app/jobs/${params.id}`)
      },
      {
         path:'/jobapply/:id',
         element:<AuthPrivate><JobApply></JobApply></AuthPrivate>
      },
      {
         path:'/jobAppllyCation',
         element:<AuthPrivate><JobApplyCation></JobApplyCation></AuthPrivate>
      },
      {
         path:'/addjob',
         element:<AuthPrivate><Addjobs></Addjobs></AuthPrivate>
      },
      {
         path:'/postjob',
         element:<AuthPrivate><MyPostJob></MyPostJob></AuthPrivate>
      },
      {
         path:'/viwapple/:id',
         element:<AuthPrivate><ViweApplication></ViweApplication></AuthPrivate>,
         loader:({params})=>fetch(`https://job-protal-server-sooty.vercel.app/job-applycations/jobs/${params.id}`)
      },
      {
         path:'/register',
         element:<Register></Register>
      },
      {
         path:'/login',
         element:<Login></Login>
      }
     ]
   },
 ]);

 export default router;
import {
   createBrowserRouter,
 } from "react-router-dom";
import MainLayout from "../Pages/layout/MainLayout";
import Register from "../AuthRegister_Login/Register";
import Login from "../AuthRegister_Login/Login";
import Home from "../Home/Home";

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
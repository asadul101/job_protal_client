import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Sharar/Navbar';
import Footer from '../Sharar/Footer';

const MainLayout = () => {
   return (
      <div >
         <div className='px-20 pt-5'>
            <Navbar></Navbar>
            <Outlet></Outlet>
         </div>
         <Footer></Footer>
      </div>
   );
};

export default MainLayout;
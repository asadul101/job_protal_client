import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import AuthContext from '../../Context/AuthContext';
import logo from '../../assets/logo/logo (2).png'

const Navbar = () => {
   const { user,handleSinOut } = useContext(AuthContext)
   const links = <>
      <li><NavLink to='/'>Home</NavLink></li>
      <li><NavLink to='/jobAppllyCation'>My Apply</NavLink></li>
      <li><NavLink to='addjob'>A job</NavLink></li>
      <li><NavLink to='/postjob'>MyPost job</NavLink></li>
      </>

   return (
      <div className="navbar bg-base-200">
         <div className="navbar-start">
            <div className="dropdown">
               <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     className="h-5 w-5"
                     fill="none"
                     viewBox="0 0 24 24"
                     stroke="currentColor">
                     <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h8m-8 6h16" />
                  </svg>
               </div>
               <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                  {links}
               </ul>
            </div>
            <img className='w-[50px]' src={logo} alt="" />
            <h2 className='text-3xl font-bold'>Job Protal</h2>
         </div>
         <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
               {links}
            </ul>
         </div>
         <div className="navbar-end">
            {
               user ?
                  <>
                     <Link>
                        <button onClick={handleSinOut} className='btn'>LogOut</button>
                     </Link>
                  </>
                  :
                  <>
                     <Link to='/register'>Register</Link>
                     <Link to='/login'>
                        <button className='btn'>Login</button>
                     </Link>
                  </>
            }
         </div>
      </div>
   );
};

export default Navbar;
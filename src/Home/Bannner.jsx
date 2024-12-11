import React from 'react';
import { motion } from "motion/react"
import { easeInOut } from 'motion';
import images1 from '../assets/images/images1.jpg'
import images2 from '../assets/images/images2.jpg'

const Bannner = () => {
   return (
      <div className="hero bg-base-200 min-h-96">
         <div className="hero-content flex-col lg:flex-row-reverse">
            <div className='flex-1'>
               <motion.img
                  animate={{ y: [50, 100, 50] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  src={images1}
                  className="max-w-sm w-64 rounded-t-[40px] border-l-[5px] border-b-[5px] border-blue-500 rounded-br-[40px] shadow-2xl" />
               <motion.img
                  animate={{ x: [100,150,100] }}
                  transition={{ duration: 4, delay:.5, repeat: Infinity }}
                  src={images2}
                  className="max-w-sm w-64 rounded-t-[40px] border-l-[5px] border-b-[5px] border-blue-500 rounded-br-[40px] shadow-2xl" />
            </div>
            <div className='flex-1'>
               <motion.h1
                  animate={{ x: [0,50,0] }} transition={{ duration: 5, delay: 1, ease: easeInOut, repeat: Infinity }}
                  className="text-5xl font-bold">Lates <motion.span animate={{ color: ['#e16e14', '#85e814', '#df14e8'] }}
                     transition={{ duration: 1.5, repeat: Infinity }}
                  >Job</motion.span>  For you?</motion.h1>
               <p className="py-6">
                  Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                  quasi. In deleniti eaque aut repudiandae et a id nisi.
               </p>
               <button className="btn btn-primary">Get Started</button>
            </div>
         </div>
      </div>
   );
};

export default Bannner;
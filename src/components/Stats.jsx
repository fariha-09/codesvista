import React from 'react';
import { FaTools, FaUsers, FaCalendarAlt, FaHeadset } from "react-icons/fa";

export default function Stats() {
  return (
    /* Added vertical padding (py-16) and horizontal padding (px-6) */
    <section className='bg-[#0E9C9D] py-10 px-6'>
      
      {/* Container to center content and manage layout on different screens */}
      <div className='max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8'>
        
        {/* Stat Item 1 */}
        <div className='flex flex-col items-center text-[#FFFFFF] text-center'>
            <FaTools size={36} />
            <h1 className='font-bold text-[40px] md:text-[48px] mt-2'>800+</h1>
            <p className='font-semibold text-[14px] tracking-wider uppercase'>PROJECTS COMPLETED</p>
        </div>

        {/* Stat Item 2 */}
        <div className='flex flex-col items-center text-[#FFFFFF] text-center'>
            <FaUsers size={36} />
            <h1 className='font-bold text-[40px] md:text-[48px] mt-2'>3K+</h1>
            <p className='font-semibold text-[14px] tracking-wider uppercase'>HAPPY CLIENTS</p>
        </div>

        {/* Stat Item 3 */}
        <div className='flex flex-col items-center text-[#FFFFFF] text-center'>
            <FaCalendarAlt size={36} />
            <h1 className='font-bold text-[40px] md:text-[48px] mt-2'>15+</h1>
            <p className='font-semibold text-[14px] tracking-wider uppercase'>YEARS EXPERIENCE</p>
        </div>

        {/* Stat Item 4 */}
        <div className='flex flex-col items-center text-[#FFFFFF] text-center'>
            <FaHeadset size={36} />
            <h1 className='font-bold text-[40px] md:text-[48px] mt-2'>12000+</h1>
            <p className='font-semibold text-[14px] tracking-wider uppercase'>SUPPORT HOURS</p>
        </div>
        
      </div>
    </section>
  );
}
import React from 'react';
import { FaLongArrowAltRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Community.css';
import sticyimg from '../../assests/sticyimg.jpg'

const Community = () => {
    return (
        <div className=''>
            
            <div className='max-w-[1100px] mx-auto my-10 md:h-[80vh] flex items-center z-20'>
                <div className='grid md:grid-cols-2 grid-cols-1 gap-10 md:gap-48'>
                    <div className='bg-black text-white p-10 border border-purple-700'>
                        <h1 className='text-3xl my-5'>Free Lifetime Support</h1>
                        <p className='mb-5'>Only our students can get Lifetime Online Support & Course Access into their User Dashboard.</p>
                        <Link className='flex items-center gap-2 bg-sky-400 text-white w-44 rounded-full px-5 py-3'>View Our Blog <FaLongArrowAltRight /></Link>
                    </div>
                    <div className='bg-black text-white p-10 border border-purple-700'>
                        <h1 className='text-3xl my-5'>Free Lifetime Support</h1>
                        <p className='mb-5'>Only our students can get Lifetime Online Support & Course Access into their User Dashboard.</p>
                        <Link className='flex items-center gap-2 bg-sky-400 text-white w-44 rounded-full px-5 py-3'>View Our Blog <FaLongArrowAltRight /></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Community;
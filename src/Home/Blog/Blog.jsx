import React from 'react';
import { FaLongArrowAltRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import blog1 from '../../assests/blog1.jpg';
import blog2 from '../../assests/blog2.jpg';
import blog3 from '../../assests/blog3.jpg';
import blog4 from '../../assests/blog4.jpg';

const Blog = () => {
    return (
        <div className='bg-white'>
            <div className='max-w-[1240px] mx-auto pb-10'>
                <div className='devider flex py-10'>
                    <span></span>
                    <span className='def'></span>
                    <span></span>
                </div>
                <div className='pb-10'>
                    <h1 className='text-4xl text-center'>Blog</h1>
                </div>
                <div className='grid md:grid-cols-2 gap-10'>
                    <div className='md:flex'>
                        <div className='md:max-w-[230px] w-full px-5 md:px-0'>
                            <img src={blog1} alt="" />
                        </div>
                        <div className='px-5'>
                            <span className='text-sm font-semibold text-slate-400'>16 May 2021</span>
                            <h3 className='text-lg font-semibold text-blue-500'>Earned almost $300+ as a trainee & now he is doing a great job as our honorable Brand Ambassador</h3>
                            <p className='text-sm text-slate-500'>SR Dream-IT is giving you the opportunity to earn from Freelancing & also as our Brand Ambassado.....</p>
                        </div>
                    </div>
                    <div className='md:flex'>
                        <div className='md:max-w-[230px] w-full px-5 md:px-0'>
                            <img src={blog2} alt="" />
                        </div>
                        <div className='px-5'>
                            <span className='text-sm font-semibold text-slate-400'>16 May 2021</span>
                            <h3 className='text-lg font-semibold text-blue-500'>Earned almost $300+ as a trainee & now he is doing a great job as our honorable Brand Ambassador</h3>
                            <p className='text-sm text-slate-500'>SR Dream-IT is giving you the opportunity to earn from Freelancing & also as our Brand Ambassado.....</p>
                        </div>
                    </div>
                    <div className='md:flex'>
                        <div className='md:max-w-[230px] w-full px-5 md:px-0'>
                            <img src={blog3} alt="" />
                        </div>
                        <div className='px-5'>
                            <span className='text-sm font-semibold text-slate-400'>16 May 2021</span>
                            <h3 className='text-lg font-semibold text-blue-500'>Earned almost $300+ as a trainee & now he is doing a great job as our honorable Brand Ambassador</h3>
                            <p className='text-sm text-slate-500'>SR Dream-IT is giving you the opportunity to earn from Freelancing & also as our Brand Ambassado.....</p>
                        </div>
                    </div>
                    <div className='md:flex'>
                        <div className='md:max-w-[230px] w-full px-5 md:px-0'>
                            <img src={blog4} alt="" />
                        </div>
                        <div className='px-5'>
                            <span className='text-sm font-semibold text-slate-400'>16 May 2021</span>
                            <h3 className='text-lg font-semibold text-blue-500'>Earned almost $300+ as a trainee & now he is doing a great job as our honorable Brand Ambassador</h3>
                            <p className='text-sm text-slate-500'>SR Dream-IT is giving you the opportunity to earn from Freelancing & also as our Brand Ambassado.....</p>
                        </div>
                    </div>
                </div>
                <div className='flex md:justify-end justify-center my-10'>
                    <Link className='flex items-center gap-2 bg-sky-400 text-white w-44 rounded-full px-5 py-3'>View Our Blog <FaLongArrowAltRight /></Link>
                </div>
            </div>
        </div>
    );
};

export default Blog;
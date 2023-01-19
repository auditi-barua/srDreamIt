import React from 'react';
import { FaLaptop, FaLongArrowAltRight, FaRegClock, FaStar, FaStarHalfAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './CoursesP.css';
import img2 from '../assests/img2.png';
import faq from '../assests/icons/faq.png';
import join from '../assests/icons/join.png';
import help from '../assests/icons/help.png';

const CourseP = () => {
    return (
        <div >
            <div className='h-[80vh] '>
                <div className='our_courses w-full h-full flex items-center justify-center'>
                    <div className=''>
                        <div className='devider flex'>
                            <span></span>
                            <span className='def_yellow'></span>
                            <span></span>
                        </div>
                        <div>
                            <h1 className='text-4xl text-white text-center font-bold uppercase my-5'>Our Courses</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-white'>
                <div className='max-w-[1240px] mx-auto py-10'>
                    <div className='h-[600px] shadow-xl flex flex-col justify-between bg-white max-w-[400px]'>
                        <div>
                            <img className='hover:scale-110 duration-100' src={img2} alt="" />
                            <div className='button  relative top-0 priview opacity-0 hover:opacity-100'>
                                <button className='bg-white p-3 rounded-lg'>Priview Course</button>
                            </div>
                        </div>
                        <div className='px-5 text_top'>
                            <h2 className='text-2xl my-2'>Digital Marketing & Freelancing for Professionals</h2>
                            <p className='mt-2 mb-5 text-sm'>
                                কোর্স ফি সম্পূর্ণ ফ্রি! রেজিস্ট্রেশন ফি ১০০০ টাকা। যার একটি নির্দিষ্ট অংশ ব্যায় করা হবে দরিদ্র মানুষদের কল্যানে। থাকবে ১৫ ঘন্টা অনলাইন লাইভ সাপোর্ট, জুম লাইভ ক্লাসের ব্যাবস্থা, সার্টিফিকেট, বেস্ট ৩ জন শিক্ষার্থীর জন্যে ল্যাপটপ, এরপরের বেস্ট ৩ জন শিক্ষার্থীর জন্যে থাকবে স্মার্টফোন। বিশেষ সুবিধা অনলাইন ইন্টার্নশীপ এবং জব প্লেসমেন্টের সুযোগ! দ্রুত এনরোল করুন
                            </p>
                        </div>
                        <div className='text_top'>
                            <div className='flex text-amber-500 px-5'>
                                <FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfAlt />
                                <span className='text-slate-300'>(803)</span>
                            </div>
                            <div className='flex justify-between border-t p-5'>
                                <div className='flex gap-5'>
                                    <div className='flex items-center'><FaRegClock /><span>60</span></div>
                                    <div className='flex items-center'><FaLaptop /><span>30</span></div>
                                </div>
                                <Link className='border-2 font-semibold rounded-full px-3 flex items-center gap-2 border-purple-700 text-purple-700 hover:text-white hover:bg-purple-700 transition-all' to='/coursedetails'>Course Details <FaLongArrowAltRight /></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-white py-10'>
                <div className='grid grid-cols-1 sm:grid-cols-3 gap-7 text-white max-w-[1240px] mx-auto text-center py-3 px-6 md:px-0'>
                    <div className='border-2 py-10'>
                        <img className='w-24 mx-auto' src={faq} alt="" />
                        <p className='text-xl'>FAQ</p>
                        <p className='text-slate-400 text-sm'>SR DREAM IT trained 6000+ Students and most are successful In both online and offline market place</p>
                    </div>
                    <div className='border-2 py-10'>
                        <img className='w-24 mx-auto' src={join} alt="" />
                        <p className='text-xl'>Join Our Community</p>
                        <p className='text-slate-400 text-sm'>From last one year the combined earning of our students reached $600000+</p>
                    </div>
                    <div className='border-2 py-10'>
                        <img className='w-24 mx-auto' src={help} alt="" />
                        <p className='text-xl'>Need Helo ? Contect Us</p>
                        <p className='text-slate-400 text-sm'>One has to learn by heart to earn and if one tries hard, we will always be there to give 24/7 support</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseP;
import React from 'react';
import './Courses.css';
import { FaLaptop, FaLongArrowAltRight, FaRegClock, FaStar, FaStarHalfAlt } from "react-icons/fa";
import img1 from '../../assests/img1.jpg';
import img2 from '../../assests/img2.png';
import img3 from '../../assests/img3.jpg';
import { Link } from 'react-router-dom';

const Courses = () => {
    return (
        <div className='bg-white'>
            <div className='max-w-[1240px] mx-auto px-5 md:px-0 z-0'>
                <div className='devider flex'>
                    <span></span>
                    <span className='def'></span>
                    <span></span>
                </div>
                <div>
                    <div className='text-center py-10'>
                        <h1 className='text-4xl uppercase'>About this course</h1>
                        <p className='text-sm font-light md:text-lg'>Lifetime online support and lifetime course access. During the course and after finishing the course one doesn’t have to make any investment without the course fee.</p>
                    </div>
                    <div className='grid md:grid-cols-3 sm:gird-cols-2 grid-cols-1 gap-8 pb-10 border-b'>
                        <div className='h-[600px] shadow-xl flex flex-col justify-between'>
                            <div>
                                <img className='hover:scale-110 duration-100' src={img1} alt="" />
                                <div className='button  relative top-0 priview opacity-0 hover:opacity-100'>
                                    <button className='bg-white p-3 rounded-lg'>Priview Course</button>
                                </div>
                            </div>
                            <div className='px-5 relative text_top'>
                                <h2 className='text-2xl my-2'>Social Media Marketing Course</h2>
                                <p className='mt-2 mb-5 text-sm'>
                                    ডিজিটাল মার্কেটিং শিখে ফ্রিল্যান্সিং করে আয় করতে পারবেন অথবা যদি আপনার ইচ্ছে থাকে নিজের বিজনেস এবং অফলাইনে/অনলাইনে জব করার তাহলে এই স্কিল আপনাকে বাকিদের থেকে কয়েক ধাপ এগিয়ে রাখবে।আমরা কাউকে শুধুমাত্র ফ্রিল্যান্সিং শেখাই না।আমাদের প্রতিটি কোর্সের উদ্দেশ্য ফ্রিল্যান্সিং থেকে আর্নিং,লোকাল জব পেতে সহায়তা করা ও সফল উদ্যােক্তা তৈরি করা।
                                </p>
                            </div>
                            <div className='text_top'>
                                <div className='flex text-amber-500 px-5'>
                                    <FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfAlt />
                                    <span className='text-slate-300'>(803)</span>
                                </div>
                                <div className='flex justify-between border-t p-5'>
                                    <div className='flex gap-5'>
                                        <div className='flex gap-2 items-center'><FaRegClock /><span>60</span></div>
                                        <div className='flex items-center'><FaLaptop /><span>30</span></div>
                                    </div>
                                    <Link className='border-2 font-semibold rounded-full px-3 flex items-center gap-2 border-purple-700 text-purple-700 hover:text-white hover:bg-purple-700 transition-all'>Course Details <FaLongArrowAltRight /></Link>
                                </div>
                            </div>
                        </div>
                        <div className='h-[600px] shadow-xl flex flex-col justify-between'>
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
                                    <Link className='border-2 font-semibold rounded-full px-3 flex items-center gap-2 border-purple-700 text-purple-700 hover:text-white hover:bg-purple-700 transition-all'>Course Details <FaLongArrowAltRight /></Link>
                                </div>
                            </div>
                        </div>
                        <div className='h-[600px] shadow-xl flex flex-col justify-between'>
                            <div>
                                <img className='hover:scale-110 duration-100' src={img3} alt="" />
                                <div className='button  relative top-0 priview opacity-0 hover:opacity-100'>
                                    <button className='bg-white p-3 rounded-lg'>Priview Course</button>
                                </div>
                            </div>
                            <div className='px-5 text_top'>
                                <h2 className='text-2xl my-2 '>Master Course</h2>
                                <p className='mt-2 mb-5 text-sm'>
                                    বর্তমান সময়ে ডিজিটাল মার্কেটিং এর চাহিদা এবং জনপ্রিয়তা প্রচুর বৃদ্ধি পেয়েছে। Digital marketing এর ব্যবহার যতটাই বেশি বৃদ্ধি পাচ্ছে, ততটাই বেশি চাকরির সুযোগ এক্ষেত্রে হয়ে দাঁড়িয়েছে। অনলাইনে ইন্টারনেটের মাধ্যমে যেকোনো products বা services গুলোকে প্রচার বা মার্কেটিং করার প্রক্রিয়াকে বলা হয় ডিজিটাল মার্কেটিং। বিভিন্ন online platform গুলোর মাধ্যমে যেকোনো product or services এর প্রচার করাটা অধিক সহজ এবং লাভজনক।
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
                                    <Link className='border-2 font-semibold rounded-full px-3 flex items-center gap-2 border-purple-700 text-purple-700 hover:text-white hover:bg-purple-700 transition-all'>Course Details <FaLongArrowAltRight /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Courses;
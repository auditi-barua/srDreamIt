import React from 'react';
import { FaLongArrowAltRight } from 'react-icons/fa';
import blog1 from '../assests/blog1.jpg';
import blog2 from '../assests/blog2.jpg';
import blog3 from '../assests/blog3.jpg';
import blog4 from '../assests/blog4.jpg';
import blog5 from '../assests/blog5.jpg';
import blog6 from '../assests/blog6.jpg';
import blog7 from '../assests/blog7.jpg';
import blog8 from '../assests/blog8.jpg';
import blog9 from '../assests/blog9.jpg';

const BlogP = () => {
    return (
        <div className='bg-white'>
            <div className='h-[80vh] pb-16'>
                <div className='our_courses w-full h-full flex items-center justify-center'>
                    <div className=''>
                        <div className='devider flex'>
                            <span></span>
                            <span className='def_yellow'></span>
                            <span></span>
                        </div>
                        <div>
                            <h1 className='text-4xl text-white text-center font-bold uppercase my-5'>OUR BLOG</h1>
                        </div>
                    </div>
                </div>
            </div>

            <div className='max-w-[1240px] mx-auto'>
                <div className='grid grid-cols-1 gap-5 px-5 md:px-0 py-10'>
                    <div className='sm:flex gap-5 shadow-lg my-5 pb-5 sm:pb-0'>
                        <div className='overflow-hidden w-full'>
                            <img className='hover:scale-105 duration-300' src={blog1} alt="" />
                        </div>
                        <div className='sm:max-w-[500px] px-5 sm:px-0'>
                            <span className='text-slate-400 text-sm'>16 May 2021</span>
                            <h2 className='text-xl my-3 font-semibold text-slate-700'>Earned almost $300+ as a trainee & now he is doing a great job as our honorable Brand Ambassador</h2>
                            <p className='text-slate-500'>SR Dream-IT is giving you the opportunity to earn from Freelancing & also as our Brand Ambassador which can be very helpful for your career.</p>
                            <button className='p-2 flex items-center gap-3 bg-yellow-400 rounded pb-5'>Read more <FaLongArrowAltRight/></button>
                        </div>
                    </div>
                    <div className='sm:flex gap-5 shadow-lg my-5 pb-5 sm:pb-0'>
                        <div className='overflow-hidden w-full'>
                            <img className='hover:scale-105 duration-300' src={blog2} alt="" />
                        </div>
                        <div className='sm:max-w-[500px] px-5 sm:px-0'>
                            <span className='text-slate-400 text-sm'>16 May 2021</span>
                            <h2 className='text-xl my-3 font-semibold text-slate-700'>ডাক্তার থেকে সফল ফ্রিল্যান্সার</h2>
                            <p className='text-slate-500'>মেডিকেল সাইন্সের স্টুডেন্ট হয়ে $১৫০০ ডলার আর্নিং করেছেন আমাদের অন্যতম সফল স্টুডেন্ট "আমান উল্লাহ"। এই $১৫০০ ডলার আর্নিং করেই উনি থেমে থাকেননি, আরো $৫০০ ডলারের বেশি কাজ করে চলেছেন।আমরা SR Dream-IT এর পক্ষ থেকে তার সুন্দর ভবিষ্যৎ কামনা করছি যাতে তিনি আরো সফলভাবে কাজ করে যেতে পারেন।</p>
                            <button className='p-2 flex items-center gap-3 bg-yellow-400 rounded pb-5'>Read more <FaLongArrowAltRight/></button>
                        </div>
                    </div>
                    <div className='sm:flex gap-5 shadow-lg my-5 pb-5 sm:pb-0'>
                        <div className='overflow-hidden w-full'>
                            <img className='hover:scale-105 duration-300' src={blog3} alt="" />
                        </div>
                        <div className='sm:max-w-[500px] px-5 sm:px-0'>
                            <span className='text-slate-400 text-sm'>16 May 2021</span>
                            <h2 className='text-xl my-3 font-semibold text-slate-700'>৮০ টি অর্ডারে ২০০০ ডলারের বেশি আয় করেছেন AIUBian "মিলন"</h2>
                            <p className='text-slate-500'>প্রথম AIUBian হিসেবে $2000 ডলার ইনকাম করলেন "মিলন আহমেদ" , যিনি গত ৪ মাস ধরে কাজ করছেন এবং সবচেয়ে বড় কথা শুধুমাত্র ফেব্রুয়ারী মাসেই তার ইনকাম হয়েছে $632 ডলার,এপ্রিল মাসে $700 ডলারের বেশি।</p>
                            <button className='p-2 flex items-center gap-3 bg-yellow-400 rounded pb-5'>Read more <FaLongArrowAltRight/></button>
                        </div>
                    </div>
                    <div className='sm:flex gap-5 shadow-lg my-5 pb-5 sm:pb-0'>
                        <div className='overflow-hidden w-full'>
                            <img className='hover:scale-105 duration-300' src={blog4} alt="" />
                        </div>
                        <div className='w-4/6'>
                            <span className='text-slate-400 text-sm'>16 May 2021</span>
                            <h2 className='text-xl my-3 font-semibold text-slate-700'>আপনার যদি নিজের একটি মোবাইল ডিভাইস থাকে তাহলেই আমাদের ডিজিটাল Affiliate প্রোগ্রামে নিবন্ধন করতে পারবেন</h2>
                            <p className='text-slate-500'>আমাদের যে কোন কোর্স রেফার করলেই আপনি পেতে পারেন সর্বনিম্ন ২০% থেকে সর্বোচ্চ ৩০% পর্যন্ত কমিশন।</p>
                            <button className='p-2 flex items-center gap-3 bg-yellow-400 rounded pb-5'>Read more <FaLongArrowAltRight/></button>
                        </div>
                    </div>
                    <div className='sm:flex gap-5 shadow-lg my-5 pb-5 sm:pb-0'>
                        <div className='overflow-hidden w-full'>
                            <img className='hover:scale-105 duration-300' src={blog5} alt="" />
                        </div>
                        <div className='sm:max-w-[500px] px-5 sm:px-0'>
                            <span className='text-slate-400 text-sm'>16 May 2021</span>
                            <h2 className='text-xl my-3 font-semibold text-slate-700'>ডিজিটাল মার্কেটিং কোর্স শেষে আমেরিকান কোম্পানিতে ইন্টার্নশিপ</h2>
                            <p className='text-slate-500'>“মিদহাতুল ইসলাম আরাবী” কোর্স শেষে একটি আমেরিকান কোম্পানিতে ইন্টার্নশিপ করছেন। তার মুখেই শুনুন বাকি কথা “আমাদের ডিজিটাল মার্কেটিং কোর্সে Shuvo Ahmed ভাইয়া LinkedIn এর কাজ এবং গুরুত্ব বুঝিয়েছিলেন। আমি Linkedin এর মাধ্যমে এপ্লাই করে এই কোম্পানিতে কাজ করার সুযোগ পেয়েছি। আপনিও Linkedin এর জব অপশন কে কাজে লাগিয়ে এমন আরো অনেক কাজের চেষ্টা করতে পারেন। যা আপনাকে অন্যান্য অনেকের থেকেই এগিয়ে রাখবে।</p>
                            <button className='p-2 flex items-center gap-3 bg-yellow-400 rounded pb-5'>Read more <FaLongArrowAltRight/></button>
                        </div>
                    </div>
                    <div className='sm:flex gap-5 shadow-lg my-5 pb-5 sm:pb-0'>
                        <div className='overflow-hidden w-full'>
                            <img className='hover:scale-105 duration-300' src={blog6} alt="" />
                        </div>
                        <div className='sm:max-w-[500px] px-5 sm:px-0'>
                            <span className='text-slate-400 text-sm'>16 May 2021</span>
                            <h2 className='text-xl my-3 font-semibold text-slate-700'>শতভাগ পজেটিভ রিভিউ</h2>
                            <p className='text-slate-500'>একমাত্র এস আর ড্রিম আইটি তেই আপনি শতভাগ পজেটিভ রিভিউ দেখতে পারবেন।</p>
                            <button className='p-2 flex items-center gap-3 bg-yellow-400 rounded pb-5'>Read more <FaLongArrowAltRight/></button>
                        </div>
                    </div>
                    <div className='sm:flex gap-5 shadow-lg my-5 pb-5 sm:pb-0'>
                        <div className='overflow-hidden w-full'>
                            <img className='hover:scale-105 duration-300' src={blog7} alt="" />
                        </div>
                        <div className='sm:sm:max-w-[500px] px-5 sm:px-0'>
                            <span className='text-slate-400 text-sm'>16 May 2021</span>
                            <h2 className='text-xl my-3 font-semibold text-slate-700'>শতভাগ পজেটিভ রিভিউ (২)</h2>
                            <p className='text-slate-500'>একমাত্র এস আর ড্রিম আইটি-তেই আপনি শতভাগ পজেটিভ রিভিউ দেখতে পারবেন</p>
                            <button className='p-2 flex items-center gap-3 bg-yellow-400 rounded pb-5'>Read more <FaLongArrowAltRight/></button>
                        </div>
                    </div>
                    <div className='sm:flex gap-5 shadow-lg my-5 pb-5 sm:pb-0'>
                        <div className='overflow-hidden w-full'>
                            <img className='hover:scale-105 duration-300' src={blog8} alt="" />
                        </div>
                        <div className='sm:max-w-[500px] px-5 sm:px-0'>
                            <span className='text-slate-400 text-sm'>16 May 2021</span>
                            <h2 className='text-xl my-3 font-semibold text-slate-700'>We are now 5000 family members !!</h2>
                            <p className='text-slate-500'>We SR Dream-IT team is really happy to announce that our new website is finally ready where students will get many new features.</p>
                            <button className='p-2 flex items-center gap-3 bg-yellow-400 rounded pb-5'>Read more <FaLongArrowAltRight/></button>
                        </div>
                    </div>
                    <div className='sm:flex gap-5 shadow-lg my-5 pb-5 sm:pb-0'>
                        <div className='overflow-hidden w-full'>
                            <img className='hover:scale-105 duration-300' src={blog9} alt="" />
                        </div>
                        <div className='sm:max-w-[500px] px-5 sm:px-0'>
                            <span className='text-slate-400 text-sm'>16 May 2021</span>
                            <h2 className='text-xl my-3 font-semibold text-slate-700'>শতভাগ পজেটিভ রিভিউ (৩)</h2>
                            <p className='text-slate-500'>একমাত্র এস আর ড্রিম আইটি-তেই আপনি শতভাগ পজেটিভ রিভিউ দেখতে পারবেন</p>
                            <button className='p-2 flex items-center gap-3 bg-yellow-400 rounded pb-5'>Read more <FaLongArrowAltRight/></button>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default BlogP;
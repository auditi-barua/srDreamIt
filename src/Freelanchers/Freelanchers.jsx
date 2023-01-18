import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Link } from 'react-router-dom';
import free1 from '../assests/Freelanchers/free1.jpg';
import free2 from '../assests/Freelanchers/free2.jpg';
import free3 from '../assests/Freelanchers/free3.jpg';
import free4 from '../assests/Freelanchers/free4.jpg';
import free5 from '../assests/Freelanchers/free5.jpg';
import { FaLongArrowAltRight } from "react-icons/fa";

const Freelanchers = () => {

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 600 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 500, min: 0 },
            items: 1
        }
    };

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
                            <h1 className='text-4xl text-white text-center font-bold uppercase my-5'>SUCCESSFUL FREELANCERS</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className='max-w-[1240px] mx-auto'>
                <div>
                    <div className='devider flex pb-10'>
                        <span></span>
                        <span className='def'></span>
                        <span></span>
                    </div>
                    <p className='font-semibold text-center'>
                        ডিজিটাল মার্কেটিং শিখে ফ্রিল্যান্সিং করে আয় করতে পারবেন অথবা যদি আপনার ইচ্ছে থাকে নিজের বিজনেস এবং অফলাইনে/অনলাইনে জব করার তাহলে এই স্কিল আপনাকে বাকিদের থেকে কয়েক ধাপ এগিয়ে রাখবে।আমরা কাউকে শুধুমাত্র ফ্রিল্যান্সিং শেখাই না।আমাদের প্রতিটি কোর্সের উদ্দেশ্য ফ্রিল্যান্সিং থেকে আর্নিং,লোকাল জব পেতে সহায়তা করা ও সফল উদ্যােক্তা তৈরি করা।গত কয়েক মাসে আমাদের স্টুডেন্টরা প্রায় $৬০০০০০ ডলার -এর বেশি আর্নিং করেছে এবং এই আয়ের পরিমান দিন দিন বেড়েই চলেছে…
                    </p>
                </div>
                <div>
                    <div className='py-20 border-b px-5 md:px-0'>
                        <Carousel showDots={true} responsive={responsive} className='gap-5'>
                            <div>
                                <iframe className='w-full px-5 h-[200px]' src="https://www.youtube.com/embed/hgWNMsHpnHU" title='১ মাসেই ৫০০ ডলার ইনকাম করেছেন আমাদের ছাত্র " আসাফ" || ট্রেইনারঃ শুভ আহমেদ' frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            </div>
                            <div>
                                <iframe className='w-full px-5 h-[200px]' src="https://www.youtube.com/embed/4Vmg15fIhKs" title='নিজের ডিজিটাল মার্কেটিং এজেন্সি খুলতে চান সফল স্টুডেন্ট সিলেটের " মুসফিক"। ট্রেইনারঃশুভ আহমেদ' frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            </div>
                            <div>
                                <iframe className='w-full px-5 h-[200px]' src="https://www.youtube.com/embed/VQG1264La5k" title="অনলাইনে $৮৬ ডলার | অফলাইনে ৳৮৫০০ টাকা | AIUB ছাত্র সাইফুল" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            </div>
                            <div>
                                <iframe className='w-full px-5 h-[200px]' src="https://www.youtube.com/embed/ENAwZC6lEWs" title="২ মাসেই ৬০০ ডলার ইনকাম করলেন AIUB-এর ছাত্র মিলন" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            </div>
                            <div>
                                <iframe className='w-full px-5 h-[200px]' src="https://www.youtube.com/embed/3ZvhNNajbqs" title="Honest Student Review | Trainer: Shuvo Ahmed | Host:Abir Hasnat Pranto" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            </div>
                            <div>
                                <iframe className='w-full px-5 h-[200px]' src="https://www.youtube.com/embed/BR3AOrd1KuA" title='$১৫০০ ডলারের বেশি ইনকাম করেছেন " শামিম আহমেদ" । ট্রেইনারঃ শুভ আহমেদ' frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            </div>
                        </Carousel>
                    </div>
                </div>
                <div>
                    <div className='grid grid-cols-1 gap-5 px-5 md:px-0 py-10'>
                        <div className='grid md:grid-cols-2 gap-5'>
                            <div className='overflow-hidden'>
                                <img className='hover:scale-105 duration-300' src={free1} alt="" />
                            </div>
                            <div>
                                <h2 className='text-xl my-3 font-semibold text-slate-700'>৪ মাসে ২০০০ ডলারের বেশি ইনকাম করেছেন AIUB-এর “মিলন”</h2>
                                <p className='text-slate-500'>ফাইবারে ৭০ টির বেশি কাজ করে গত ৪ মাসে ২০০০ ডলারের বেশি ইনকাম করেছেন AIUB-এর “মিলন”। এ ব্যাপারে তিনি বলেন “ধন্যবাদ Shuvo Ahmed ভাইকে।যারা কাজ পাচ্ছেননা তারা হতাশ হবেননা।আগের মাসে খুব হতাশ হয়ে গেছিলাম,একদিন শুভ ভাই নিজে থেকে নক দিয়ে বললেন আপনার তো খোজখোবর পাওয়া যাচ্ছেনা।খুলে বললাম সব।ভাইয়া সাপোর্ট দিছে বলার বাহিরে।তারপর আবার ধিরে ধিরে কাজ পাই।যাই করুন নিজের সেরাটা দিয়ে করুন।২৪*৭ সাপোর্ট দিবে ভাই।আল্লাহর উপর ভরসা রাখুন।”</p>
                            </div>
                        </div>
                        <div className='grid md:grid-cols-2 gap-5'>
                            <div className='overflow-hidden'>
                                <img className='hover:scale-105 duration-300' src={free2} alt="" />
                            </div>
                            <div>
                                <h2 className='text-xl my-3 font-semibold text-slate-700'>প্রতি মাসে ৫০,০০০ টাকার বেশি ইনকাম করছেন কুয়েট এর মাহফুজ</h2>
                                <p className='text-slate-500'>একজন সোশ্যাল মিডিয়া ম্যানেজার হিসেবে কাজ করে প্রতি মাসে ৫০,০০০ টাকার বেশি ইনকাম করছেন কুয়েট এর মাহফুজ। গত কয়েকমাসে তিনি প্রায় ৫০০০ ডলারের কাছাকাছি ইনকাম এর পাশাপাশি ফাইবারে ১০০ টির বেশি অর্ডার কমপ্লিট করেছেন।</p>
                            </div>
                        </div>
                        <div className='grid md:grid-cols-2 gap-5'>
                            <div className='overflow-hidden'>
                                <img className='hover:scale-105 duration-300' src={free3} alt="" />
                            </div>
                            <div>
                                <h2 className='text-xl my-3 font-semibold text-slate-700'>Upwork এ Rising Talent Badge পেয়েছেন কুয়েটের "আসাদুজ্জামান প্রান্ত"</h2>
                                <p className='text-slate-500'>"আলহামদুলিল্লাহ ...গত ১ মাসে আমার শ্রম আর প্রতিনিয়ত Shuvo Ahmed ভাইয়ের সহযোগিতায় আপওয়ার্কে কিছুটা পথ অতিক্রম করার সাথে ইতিমধ্যে রাইজিং ট্যালেন্টও হয়ে গেছি। সবাই কাজে লেগে থেকে পরিশ্রম করে গেলে আশা করি ভালো কিছুই হবে ইনশাআল্লাহ। "</p>
                            </div>
                        </div>
                        <div className='grid md:grid-cols-2 gap-5'>
                            <div className='overflow-hidden'>
                                <img className='hover:scale-105 duration-300' src={free4} alt="" />
                            </div>
                            <div>
                                <h2 className='text-xl my-3 font-semibold text-slate-700'>কোর্স শেষ করার ২ মাসের মধ্যেই ৬৫০ ডলারের বেশি আয় করেছেন AIUB এর "মাহিদুল"</h2>
                                <p className='text-slate-500'>Mahidul Islam a student of American International University Bangladesh has earned more than $650 dollar from Fiverr and become a Level 1 Seller there. It's been a great achievement for SR DREAM IT and of course for Mahidul. "Thanks a lot to Shuvo Ahmed and SR Dream IT. Without their help, instructions and support i can't even think about this achievement.May Allah bless all our mentors and SR dream IT.So guys, stay focused and work hard nothing is impossible. Make your dream come true with SR Dream-IT."</p>
                            </div>
                        </div>
                        <div className='grid md:grid-cols-2 gap-5'>
                            <div className='overflow-hidden'>
                                <img className='hover:scale-105 duration-300' src={free5} alt="" />
                            </div>
                            <div>
                                <h2 className='text-xl my-3 font-semibold text-slate-700'>অনলাইনে ৫০০ ডলার এবং অফলাইনে ১০০০০ টাকার বেশি ইনকাম করেছেন AIUBian "সাইফুল"</h2>
                                <p className='text-slate-500'>আমাদের ব্যাচ ৫ এর স্টুডেন্ট যিনি অনলাইনে ৫০০ ডলার এবং অফলাইনে ১০০০০ টাকার বেশি ইনকাম করেছেন।এছাড়াও তার হাতে সামনেই একটি বিগ বাজেটের প্রজেক্ট আসছে। তিনি SR DREAM IT এর উদ্দেশ্যে যা বলেছেন "Alhamdulillah...Thank you Allah for blessing me much more than I deserve, I am grateful to our favorite mentor and instructor Shuvo Ahmed vaiya for his huge support from the beginning of the course.He always motivate us to work hard and inspire us to do the things in right way.I am so much glad to share my happy moment with you guys.I have got two order in fiverr."</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='pb-10'>
                    <div className='sm:flex justify-between px-5 md:px-0'>
                        <Link className='p-2 mb-3 sm:pb-0 flex items-center gap-3 rounded bg-red-500 text-white px-4'>See All Earning Proves <FaLongArrowAltRight/></Link>
                        <Link className='p-2 flex items-center gap-3 rounded bg-yellow-500 px-4'>See Course Details <FaLongArrowAltRight/></Link>
                    </div>
                    <div className='py-3 px-5 md:px-0'>
                        <ul className='flex'>
                            <li className='p-1 px-3 border'>Previus</li>
                            <li className='p-1 px-3 border'>1</li>
                            <li className='p-1 px-3 border'>Next</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Freelanchers;
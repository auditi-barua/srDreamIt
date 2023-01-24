import React from 'react';
import { FaLongArrowAltRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Lessons from './Lessons';
import Reviews from './Review/Reviews';

const Description = () => {
    return (
        <div className='bg-white '>
        <div className='h-[80vh] details border-yellow-500 '>
            <div className='our_courses w-full h-full flex items-center justify-center'>
                <div className=''>
                    <div className='devider flex'>
                        <span></span>
                        <span className='def_yellow'></span>
                        <span></span>
                    </div>
                    <div>
                        <h1 className='text-4xl text-white text-center font-bold uppercase my-5'>DIGITAL MARKETING & FREELANCING FOR PROFESSIONALS</h1>
                    </div>
                </div>
            </div>
            <div className=''>
            <ul className='flex gap-6 font-bold pt-5 text-xl ml-8'>
                <li><Link to='/description'>Description</Link></li>
                <li className='text-white hover:text-black'><Link to='/lessons'>Lessons</Link></li>
                <li className='text-white hover:text-black'><Link to='/reviews'>Reviews</Link></li>
            </ul>
        </div>
        </div>  
    <div className='mt-5 '>
    <h2 className='text-4xl ml-14 '>Description</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-5'>  
            <div>
            <p className='mt-5 ml-12'><span className='text-2xl text-red-700 font-bold'>১০০% স্কলারশীপে দশ হাজার টাকার কোর্স দেয়া হচ্ছে সম্পূর্ণ ফ্রি তে। শুধুমাত্র রেজিস্ট্রেশন ফি ১০০০ টাকা (অফেরতযোগ্য)।</span><span className='font-bold text-2xl'>রেজিস্ট্রেশন ফি এর একটি নির্দিষ্ট অংশ ব্যায় করা হবে দরিদ্র মানুষদের কল্যানে।</span></p><br/>
            <p className='text-2xl text-red-700 ml-12'>⚡পেমেন্ট করার পরে সর্বোচ্চ ২৪-৪৮ ঘন্টার মধ্যে ভর্তি কনফার্ম করা হবে, তারপর স্টুডেন্ট ড্যাশবোর্ড এ্যাক্টিভ হবে।</p><br />
            <p className='text-2xl text-red-700 ml-12 font-bold'>⚡কোর্সের সিলেবাস:   <Link className='text-blue-600'> https://rb.gy/hhjcaz</Link></p>
            <p className='text-2xl text-red-700 ml-12 font-bold'>✔️ভর্তির শেষ সময় ৩১ জানুয়ারি ২০২৩ </p><br/>
            <p className='text-2xl text-red-700 ml-12 font-bold'>✔️জুম লাইভ ক্লাস শুরুর সম্ভাব্য সময়-ফেব্রুয়ারির ৫-১০ তারিখের মধ্যে</p><br/>
            <p className='text-2xl text-red-700 ml-12 font-bold'>✔️ভর্তি কনফার্ম এর পর স্টুডেন্ট ড্যাশবোর্ডে গেলে শিক্ষার্থীরা পেয়ে যাবেন ১০ ঘন্টার প্রি-রেকর্ডেড ক্লাস ভিডিও সিরিজ<span className='text-2xl text-black'>(জুম লাইভ ক্লাস শুরুর আগেই এই রেকর্ড ক্লাস গুলো দেখে ডিজিটাল মার্কেটিং সম্পর্কে বেসিক ধারনা পাওয়া যাবে। এরপর যখন লাইভ ক্লাস শুরু হবে তখন সিলেবাস অনুযায়ী সবগুলো ক্লাস জুম এ নেয়া হবে।)</span></p><br/>
            <p className='text-2xl text-red-700 ml-12 font-bold'>✔️জুম লাইভ ক্লাস হবে ২০ টি (ডিউরেশানঃ৪০ ঘন্টা)। টোটাল কোর্স ডিউরেশান ৫০ ঘন্টা (৩ মাস)</p><br/>
            <p className='text-2xl text-red-700 ml-12 font-bold'>✔️লাইভ ক্লাস শুরুর সময় এবং ক্লাস লিংক স্টুডেন্ট ড্যাশবোর্ডে দিয়ে দেয়া হবে। তাই নিয়মিত নিজের ড্যাশবোর্ডে আপডেট চেক করবেন।</p><br/>
            <p className='text-2xl text-red-700 ml-12 font-bold'>শিক্ষা বৃত্তিঃ *দরিদ্র ও মেধাবী শিক্ষার্থীদের দেয়া হবে ১ লক্ষ টাকা পর্যন্ত স্কলারশীপ এবং টপ ৩ জন শিক্ষার্থী পাবেন ল্যাপটপ, পরের ৩ জন পাবেন স্মার্টফোন <span className='text-xl'>(কোর্স শেষে ক্লাস পারফরমেন্স, দক্ষতা এবং পরীক্ষার ফলাফলের ভিত্তিতে)</span></p><br/>
            <p className='text-2xl text-red-700 ml-12 font-bold'>⚡বিশেষ নোটঃ <span className='text-xl text-black'>একজন শিক্ষার্থী যে ব্যাচ ও সিডিউল সিলেক্ট করে ভর্তি কনফার্ম করবে সেটাতেই লাইভ ক্লাস করতে হবে,পরবর্তীতে ব্যাচ ও সিডিউল পরিবর্তন করার সুযোগ নেই।</span></p><br/>
            <p className='text-2xl text-red-700 ml-12 font-bold'>যেই ৩ টি ক্লাস সিডিউলে এখন ভর্তি চলছেঃ</p><br />
            <p className='text-xl'>ব্যাচ ৩৮ - সোমবার এবং বুধবার সন্ধ্যা ৭.১৫-৯.০০ টা </p><br />
            <p className='text-xl'>ব্যাচ ৪০ - রবিবার এবং মঙ্গলবার সন্ধ্যা ৭.১৫-৯.০০ টা</p><br/>
            <p className='text-xl'>ব্যাচ ৪১ - রবিবার এবং মঙ্গলবার রাত ৯.১৫-১১.০০ টা</p><br></br>
                <p className='text-2xl text-red-700 ml-12 font-bold'>⚡কম্পিউটার দিয়ে কিভাবে পেমেন্ট করে ভর্তি সম্পন্ন করবেন জানতে এই লিংকে ক্লিক করুন:<Link className='text-blue-600'>https://youtu.be/w7iKgD32Jjc</Link>
                </p><br/>
                <p className='text-2xl text-red-700 ml-12 font-bold'>⚡স্মার্টফোন দিয়ে কিভাবে পেমেন্ট করে ভর্তি সম্পন্ন করবেন জানতে এই লিংকে ক্লিক করুন<Link className='text-blue-600'>:https://youtu.be/9w7P8D7nNZ4</Link>
                </p><br/>
                <p className='text-2xlml-12 text-red-700 ml-12 font-bold underline'>⚡এই কোর্সের স্পেশালিটি কি? কেন এই সুযোগটি আপনার কাজে লাগানো উচিত?</p><br/>
                <p className='text-xl ml-12 '>⚡এই কোর্সটি করার জন্যে কি কি প্রয়োজন?</p><br/>
                <p className='text-xl ml-12'>✔️১০ ঘন্টার প্রি রেকর্ডেড ভিডিও সিরিজ</p><br/>
                <p className='text-xl ml-12'>   ✔️প্রতিদিন ১২-১৫  ঘন্টা জুম লাইভ সাপোর্ট (১ বছর ফ্রি সাপোর্ট)</p><br/>
                <p className='text-xl ml-12'>✔️সিক্রেট ফেসবুক গ্রুপ এর মাধ্যমে ২৪ ঘন্টা অনলাইন সাপোর্ট (লাইফটাইম ফ্রি)</p><br/>
                <p className='text-xl ml-12'> ✔️লাইভ ক্লাস শেষে ২৪ ঘন্টার মধ্যেই এইচডি কোয়ালিটি রেকর্ডেড ভিডিও (১ বছর কোর্স এক্সেস)</p><br/>
                <p className='text-xl ml-12'>    ✔️ডিজিটাল স্টুডেন্ট ড্যাশবোর্ড এর মাধ্যমে ক্লাস ভিডিও এক্সেস, লাইভ ক্লাসে জয়েন, অনলাইন সাপোর্ট এবং সিক্রেট গ্রুপের লিংক পাওয়ার সুবিধা</p><br/>
                <p className='text-xl ml-12'>    ✔️অনলাইন ইন্টার্নশীপ এবং জব প্লেসমেন্টের সুযোগ</p><br/>
                <p className='text-xl ml-12'>     ✔️কোর্স শেষে প্রফেশনাল সার্টিফিকেট </p><br/>
                <p className='text-2xlml-12 text-red-700 ml-12 font-bold underline'>⚡এই কোর্সটি করার জন্যে কি কি প্রয়োজন?</p><br/>
                <p className='text-xl ml-12'>✔️কম্পিউটার / ল্যাপটপ অবশ্যই থাকতে হবে সিলেবাসের সকল বিষয় প্রাকটিস করার জন্যে। (মোবাইল দিয়ে জুমের মাধ্যমে ক্লাস করা যাবে)</p><br/>
                <p className='text-xl ml-12'>   ✔️ English Communication Skill (Mainly for Message Communication)</p><br/>
                <p className='text-xl ml-12'>   ✔️ইন্টারনেট কানেকশান </p><br/>
                <p className='text-xl ml-12'>✔️ ধৈর্য্য সহকারে প্রতিটি বিষয় শেখার ও নিজের চেষ্টা ১০০% দেয়ার মানসিকতা</p><br/>
                <p className='text-2xl text-red-700 ml-12 font-bold underline'>⚡বিশেষ দ্রষ্টব্য:</p><br/>
                <p className='text-xl ml-12'>ভর্তি কনফার্ম এর পর থেকে লাইভ ক্লাস শুরুর আগে পর্যন্ত সময় টিও যেন স্টুডেন্টরা নিজেদের স্কিল ডেভেলপমেন্ট এর কাজ এ লাগাতে পারে সেজন্যে ভর্তি কনফার্ম এর পরে ওয়েবসাইট এ স্টুডেন্ট ড্যাশবোর্ডে গেলে শিক্ষার্থীরা পেয়ে যাবেন ১০ ঘন্টার প্রি-রেকর্ডেড ক্লাস ভিডিও সিরিজ।  <br/><br/>

                জুম লাইভ ক্লাস শুরুর আগেই এই রেকর্ড ক্লাস গুলো দেখে ডিজিটাল মার্কেটিং সম্পর্কে বেসিক ধারনা পাওয়া যাবে। এরপর যখন লাইভ ক্লাস শুরু হবে তখন সিলেবাস অনুযায়ী সবগুলো ক্লাস জুম এ নেয়া হবে।<br/><br/>

              (ভর্তি সংক্রান্ত বিষয়ে SR DREAM IT কর্তৃপক্ষ যেকোন সময় যেকোন ধরনের পরিবর্তন, পরিমার্জন কিংবা সংশোধন করার ক্ষমতা রাখে)</p><br/>
                <p className='text-2xl text-red-700 ml-12 font-bold'>⚡কোর্স ট্রেইনারঃ</p><br />
                <p className='text-xl ml-12'>✔️ট্রেইনারের নামঃ<span className='text-blue-600 underline'> শুভ আহমেদ </span></p><br/>
                <p className='text-xl ml-12'>  ✔️অভিজ্ঞতাঃ ৬ বছরের বেশি </p><br/>
                <p className='text-xl ml-12'> ✔️ট্রেইনিং করিয়েছেনঃ ৫০০০ এর বেশি শিক্ষার্থীদের যারা ফ্রিল্যান্সিং মার্কেটপ্লেস থেকে আয় করেছে ৬০০,০০০ ডলারের বেশি</p><br/>
                <p className='text-xl ml-12'>✔️এছাড়াও তিনি ডিজিটাল মার্কেটিং ট্রেইনার হিসেবে চাকরি করেছেন বাংলাদেশ সরকারের "লার্নিং এন্ড আরনিং ডেভেলপমেন্ট প্রজেক্টে" যা আইসিটি ডিভিশন বাংলাদেশ দ্বারা পরিচালিত।</p><br/>
                <p className='text-xl ml-12'> ✔️বাংলাদেশের প্রথম শ্রেনীর বেসরকারী বিশ্ববিদ্যালয় "আমেরিকান ইন্টারন্যাশনাল ইউনিভার্সিটি-বাংলাদেশ" এ উনি গেস্ট লেকচারার হিসেবে ট্রেইনিং করিয়েছেন একাধিক শিক্ষার্থীদের।</p><br/>
                <p className='text-xl ml-12'> ✔️একজন সফল উদ্দ্যোক্তা হিসেবে প্রতিষ্ঠা করেছেন দেশের অন্যতম সফল ডিজিটাল মার্কেটিং শেখার প্রতিষ্ঠান "এস আর ড্রিম আইটি"। যার মাধ্যমে হাজার হাজার শিক্ষার্থী ট্রেইনিং নিয়ে সফলভাবে কাজ করে যাচ্ছেন। </p><br/>
                <p className='text-2xl underline text-red-700 ml-12 font-bold'>⚡কেন আপনার এস আর ড্রিম আইটির এই সুযোগটি নেয়া উচিত? </p><br />
                <p className='text-xl ml-12'>✔️প্রথমত এই কোর্সের সম্পূর্ণ অর্থায়ন<span className='text-blue-600'>এস আর ড্রিম আইটি </span>নিজেই করছে</p><br/>
                <p className='text-xl ml-12'>  ✔️এস আর ড্রিম আইটি বাংলাদেশ সরকারের শিল্প মন্ত্রনালয়ের অধীনে একটি ট্রেডমার্ক  প্রতিষ্ঠান</p><br/>
                <p className='text-xl ml-12'>     ✔️প্রায় ৬০০০ এর বেশি শিক্ষার্থী ট্রেইনিং নিয়েছে যারা এখন সফলভাবে দেশে এবং দেশের বাইরে কাজ করে যাচ্ছে </p><br/>
                <p className='text-xl ml-12'> ✔️ডিজিটাল মার্কেটিং ট্রেইনিং সেক্টরে<span className='text-purple-600 underline'>এস আর ড্রিম আইটি সর্বোচ্চ রেটিং প্রাপ্ত প্রতিষ্ঠান</span>(গুগল এবং ফেসবুকে রিভিউ এর তথ্য মতে)</p><br/>
                <p className='text-xl ml-12'>    ✔️এস আর ড্রিম আইটির শিক্ষার্থীরা গত ১ বছরে<span className='text-purple-600 underline'> আয় করেছে পায় ৬০০,০০০ ডলারের বেশি</span></p><br/>
                <p className='text-xl ml-12'>✔️শিক্ষার্থীরা আমাদের ট্রেইনিং এবং সাপোর্ট সিস্টেম নিয়ে ১০০% স্যাটিসফাইড যা ফেসবুক পেজ, ফেসবুক গ্রুপ, গুগল রিভিউ কিংবা ওয়েবসাইটে ভিজিট করলেই বুঝতে পারবেন। </p><br />
               
                        <Lessons />
                        <Reviews/>
         </div>
            <div className=' pl-16 pt-5 pb-5 bg-scroll '>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/w7iKgD32Jjc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <p className='text-4xl text-center  mt-4'>৳1,000.00৳ <br/><span className='text-blue-600 text-center line-through text-xl mb-4'>10,000.00</span></p>
                <button className='border-2 bg-blue-700 font-semibold rounded-full  flex items-center gap-2 p-2 mx-auto text-white hover:text-white hover:bg-purple-700 transition-all' to=''>Purchase Now <FaLongArrowAltRight /></button>
            </div>
            </div>
            </div>
            </div>
       
    );
};

export default Description;
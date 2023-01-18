import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer';
import Navbar from '../Shared/Navbar';
import sticyimg from '../assests/sticyimg.jpg';

const Main = () => {
    return (
        <div className=''>
            <div className='comunity hidden md:block'>
                <img src={sticyimg} alt="" />
            </div>
            <div className='z-10 relative top-0'>
                <Navbar>*দরিদ্র ও মেধাবী শিক্ষার্থীদের দেয়া হবে ১ লক্ষ টাকা পর্যন্ত স্কলারশীপ এবং টপ ৩ জন শিক্ষার্থী পাবেন ল্যাপটপ, পরের ৩ জন পাবেন স্মার্টফোন । বর্তমান ক্যাম্পেইনে যারা ভর্তি হচ্ছে তারাই এই সুযোগটি নিতে পারবে। তাই দেরি না করে দ্রুত ভর্তি কনফার্ম করে এই সুযোগ কাজে লাগাতে পারবেন আপনিও</Navbar>
                <Outlet />
                <Footer />
            </div>
        </div>
    );
};

export default Main;
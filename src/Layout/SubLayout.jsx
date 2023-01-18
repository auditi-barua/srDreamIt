import React from 'react';
import { Outlet } from 'react-router-dom';
import sticyimg from '../assests/sticyimg.jpg';
import Footer from '../Shared/Footer';
import Navbar from '../Shared/Navbar';

const SubLayout = () => {
    return (
        <div className=''>
            <div className='comunity hidden md:block'>
                <img src={sticyimg} alt="" />
            </div>
            <div className='z-10 relative top-0'>
                <Navbar>If you need any kind of Digital Marketing Service then fill-up the form below or contact us through WhatsApp or Email</Navbar>
                <Outlet />
                <Footer />
            </div>
        </div>
    );
};

export default SubLayout;
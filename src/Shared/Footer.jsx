import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaRegEnvelope, FaYoutube } from 'react-icons/fa';
import logo from '../assests/logo.png';
import './Footer.css';
import bkash from '../assests/icons/bkash.png';
import rocket from '../assests/icons/rocket.png';
import nagad from '../assests/icons/nagad.png';
import dbbl from '../assests/icons/dbbl.png';
import visa from '../assests/icons/visa.png';
import mastercard from '../assests/icons/mastercard.png';
import cod from '../assests/icons/cod.png';

const Footer = () => {
    return (
        <div className='bg-black text-white'>
            <div className='max-w-[1240px] mx-auto pt-20'>
                <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 py-10 border-b border-b-slate-700'>
                    <div className='px-5 md:px-0'>
                        <img className='w-64 mb-5' src={logo} alt="" />
                        <p className='text-slate-400 text-sm'>
                            SR DREAM IT is an online-based platform of DIGITAL MARKETING Training. Our goal is to create employment by making our students skilled. For this reason, we are providing our course with lots of resources with a very reasonable course fee. We always provide our best for making our students learn and develop their working skills. If you do your best then we will be always by your side to support you to be successful.
                        </p>
                        <div>
                            <p className='flex gap-3 my-5 uppercase'>Follow us <span className='flex items-center text-2xl gap-3'><FaFacebookF /> <FaLinkedinIn /> <FaYoutube /> <FaInstagram /></span></p>
                        </div>
                    </div>
                    <div>
                        <div className='max-w-[250px] mx-auto'>
                            <h2 className='text-xl mb-5 font-semibold'>Useful links</h2>
                            <ul>
                                <li>Login</li>
                                <li>About</li>
                                <li>Courses</li>
                                <li>Affiliate Programme</li>
                                <li>FAQ</li>
                                <li>Contact Us</li>
                            </ul>
                        </div>
                    </div>
                    <div className='px-5 md:px-0'>
                        <h2 className='text-xl mb-5 font-semibold'>Contact with Us</h2>
                        <span className='flex items-center mb-5'><FaRegEnvelope /> support@selim.com</span>
                        <h2 className='text-lg mb-3 font-semibold'>Verify Your Certificate</h2>
                        <div className=''>
                            <form>
                                <input className='p-2 bef_input' placeholder='Enter your email' type="text" />
                                <input className='text-md p-2 bg-fuchsia-700 bef_button' type="submit" value='Verify' />
                            </form>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='flex items-center py-10 border-b border-b-slate-700 flex-wrap'>
                        <p className='md:w-1/5 px-5 md:px-0'>We Accept Payment Via</p>
                        <div className='flex md:justify-between justify-around md:w-4/5 flex-wrap'>
                            <img className='py-2' src={bkash} alt="" />
                            <img className='py-2' src={rocket} alt="" />
                            <img className='py-2' src={nagad} alt="" />
                            <img className='py-2' src={dbbl} alt="" />
                            <img className='py-2' src={visa} alt="" />
                            <img className='py-2' src={mastercard} alt="" />
                            <img className='py-2' src={cod} alt="" />
                        </div>
                    </div>
                </div>
                <div className='flex justify-between py-5 text-sm text-slate-400'>
                    <div>
                        <ul className='flex text-sm'>
                            <li className='px-2 border-r border-slate-700'>Terms and conditions</li>
                            <li className='px-2 border-r border-slate-700'> Privacy Policy</li>
                            <li className='px-2'>Refund Policy</li>
                        </ul>
                    </div>
                    <div>
                        <span>&copy; 2020-2023 SR Dream IT</span>
                    </div>
                </div>
                <div className='py-5 text-center'>
                    <p>Developed & Maintained by <span className='text-blue-600 font-semibold'>Auditi Barua</span></p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
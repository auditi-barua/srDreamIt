import React from 'react';
import './Header.css';
import icon1 from '../../assests/icons/icon1.png';
import icon2 from '../../assests/icons/icon2.png';
import icon3 from '../../assests/icons/icon3.png';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='pb-10 bg-white'>
            <div className='h-screen banner text-white flex items-center flex-col justify-center'>
                <h1 className='text-4xl font-semibold text-center uppercase'>LET’S LEARN DIGITAL MARKETING</h1>
                <p className='text-center uppercase my-5'>SR DREAM IT is offering professional Digital Marketing Courses with Lifetime course access & Lifetime Free online support.</p>
                <div className='flex justify-center gap-2'>
                    <button className='normal-case bg-amber-400 font-normal hover:bg-blue-700 text-white py-2 px-4 rounded'><Link to='/course'>Courses</Link></button>
                    <button className='normal-case bg-blue-600 font-normal hover:bg-blue-700 text-white py-2 px-4 rounded'><Link to='/signup'>Sign Up</Link></button>
                </div>

            </div>
            <div className='bg-black'>
                <div className='grid grid-cols-1 sm:grid-cols-3 gap-7 text-white max-w-[1240px] mx-auto text-center py-3 px-6 md:px-0'>
                    <div>
                        <img className='w-24 mx-auto' src={icon1} alt="" />
                        <p className='text-amber-400 text-xl'>6000+ GRADUATES</p>
                        <p className='text-slate-400'>SR DREAM IT trained 6000+ Students and most are successful In both online and offline market place</p>
                    </div>
                    <div>
                        <img className='w-24 mx-auto' src={icon2} alt="" />
                        <p className='text-amber-400 text-xl'>$600000+ EARNING</p>
                        <p className='text-slate-400'>From last one year the combined earning of our students reached $600000+</p>
                    </div>
                    <div>
                        <img className='w-24 mx-auto' src={icon3} alt="" />
                        <p className='text-amber-400 text-xl'>FOCUS ON LEARNING</p>
                        <p className='text-slate-400'>One has to learn by heart to earn and if one tries hard, we will always be there to give 24/7 support</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
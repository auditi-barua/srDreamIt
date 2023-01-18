import React from 'react';
import team1 from '../assests/Team1.png';
import team2 from '../assests/team2.jpg';
import team3 from '../assests/team3.jpg';
import team4 from '../assests/team4.jpg';
import team5 from '../assests/team5.jpg';
import team6 from '../assests/team6.jpg';

const Team = () => {
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
                            <h1 className='text-4xl text-white text-center font-bold uppercase my-5'>MEET THE TEAM</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className='max-w-[1240px] mx-auto'>
                <div>
                    <div className='flex justify-around'>
                        <div className='max-w-[300px] rounded-md shadow-lg border-b-4 border-blue-700'>
                            <dir className='p-0 border-b'>
                                <img src={team1} alt="" />
                            </dir>
                            <div className='px-5 pb-5'>
                                <h1 className='text-3xl text-center'>Shuvo Ahmed</h1>
                                <p className='uppercase text-center text-md text-blue-500'>FOUNDER & CEO || Lead Trainer of Digital Marketing</p>
                            </div>
                        </div>
                        <div className='max-w-[300px] rounded-md shadow-lg border-b-4 border-blue-700'>
                            <dir className='p-0 border-b'>
                                <img src={team2} alt="" />
                            </dir>
                            <div className='px-5 pb-5'>
                                <h1 className='text-3xl text-center'>Nowshin Nabila Ritu</h1>
                                <p className='uppercase text-center text-md text-blue-500'>CO-FOUNDER</p>
                            </div>
                        </div>
                    </div>
                    <div className='grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-10 py-10'>
                        <div className='max-w-[300px] rounded-md shadow-lg border-b-4 border-blue-700'>
                            <dir className='p-0 border-b'>
                                <img src={team3} alt="" />
                            </dir>
                            <div className='px-5 pb-5'>
                                <h1 className='text-3xl text-center'>Gazi Md. Aman Ullah</h1>
                                <p className='uppercase text-center text-md text-blue-500'>Online Support Trainer | LinkedIn Marketing Trainer | Digital Marketing Expert</p>
                            </div>
                        </div>
                        <div className='max-w-[300px] rounded-md shadow-lg border-b-4 border-blue-700'>
                            <dir className='p-0 border-b'>
                                <img src={team4} alt="" />
                            </dir>
                            <div className='px-5 pb-5'>
                                <h1 className='text-3xl text-center'>Mahi Islam Barshan</h1>
                                <p className='uppercase text-center text-md text-blue-500'>Online Support Trainer | Level 2 Seller | FB & IG Shop Expert | SEO Expert</p>
                            </div>
                        </div>
                        <div className='max-w-[300px] rounded-md shadow-lg border-b-4 border-blue-700'>
                            <dir className='p-0 border-b'>
                                <img src={team5} alt="" />
                            </dir>
                            <div className='px-5 pb-5'>
                                <h1 className='text-3xl text-center'>Mehnaz karim Aurni</h1>
                                <p className='uppercase text-center text-md text-blue-500'>Junior Marketing Executive & Communications Manager</p>
                            </div>
                        </div>
                        <div className='max-w-[300px] rounded-md shadow-lg border-b-4 border-blue-700'>
                            <dir className='p-0 border-b'>
                                <img src={team6} alt="" />
                            </dir>
                            <div className='px-5 pb-5'>
                                <h1 className='text-3xl text-center'>Md. Shahareyar Emon</h1>
                                <p className='uppercase text-center text-md text-blue-500'>Graphic Designer & Video Editor</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Team;
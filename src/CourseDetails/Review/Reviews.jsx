import React from 'react';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import './Reviews.css';
const Reviews = () => {
    return (
        <div className='bg-white'>
            <h2 className='text-center font-bold text-xl'>Review</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
                <div className='review-summary'>
                    <p className='font-bold'>4.85</p>
                    <div className='flex text-yellow-400'>
                        <FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfAlt />
                    </div>
                    <p className='text-xl '>Based on 46 reviews</p>
                </div>
                <div>
                    <div className='w-full'>
                        <div className='flex w-full justify-between'>
                            <div class="w-full bg-gray-200 h-8 mb-6 rounded-full ">
                                <div class="bg-purple-600 h-8 rounded-full"></div>
                            </div>
                            <p className='text-xl font-bold px-5 w-40'>5 stars</p>
                        </div>
                        <div className='flex w-full justify-between'>
                            <div class="w-full bg-gray-200 h-8 mb-6 rounded-full ">
                                <div class="bg-purple-600 h-8 rounded-full"></div>
                            </div>
                            <p className='text-xl font-bold px-5 w-40'>4 stars</p>
                        </div>
                        <div className='flex w-full justify-between'>
                            <div class="w-full bg-gray-200 h-8 mb-6 rounded-full ">
                                <div class="bg-gray-200 h-8 rounded-full"></div>
                            </div>
                            <p className='text-xl font-bold px-5 w-40'>3 stars</p>
                        </div>
                        <div className='flex w-full justify-between'>
                            <div class="w-full bg-gray-200 h-8 mb-6 rounded-full ">
                                <div class="bg-gray-200 h-8 rounded-full"></div>
                            </div>
                            <p className='text-xl font-bold px-5 w-40'>2 stars</p>
                        </div>
                        <div className='flex w-full justify-between'>
                            <div class="w-full bg-gray-200 h-8 mb-6 rounded-full ">
                                <div class="bg-gray-200 h-8 rounded-full"></div>
                            </div>
                            <p className='text-xl font-bold px-5 w-40'>1 stars</p>
                        </div>
                    </div>
                    <div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reviews;
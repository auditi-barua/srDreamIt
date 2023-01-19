import React from 'react';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import './Reviews.css';
const Reviews = () => {
    return (
        <div className='bg-white'>
            <h2 className='text-3xl ml-12 font-bold mb-8'>Reviews</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-2'>
                <div className='review-summary'>
                    <p className='text-4xl'>4.85</p>
                    <p className='text-2xl'>Based on 46 reviews</p>
                    <div className='rating text-yellow-500 text-center px-5 flex ml-12 text-5xl'>
                        <FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfAlt />
                    </div>
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-2'>
                    <div className='grid grid-cols-1 sm:grid-cols-2'>
                        <div class="w-full bg-gray-200 h-8 mb-6 rounded-full ">
                            <div class="bg-purple-600 w-full h-8 rounded-full"></div>
                        </div>
                        <p className='text-xl font-bold px-5'>5 stars</p>
                        <div class="w-full bg-gray-200 h-8 mb-6 rounded-full ">
                            <div class="bg-purple-600 h-8 rounded-full"></div>
                        </div>
                        <p className='text-xl font-bold mt-2 px-5'>4 stars</p>
                        <div class="w-full bg-gray-200 h-8 mb-6 rounded-full">
                            <div class="bg-gray-200 h-8 rounded-full"></div>
                        </div>
                        <p className='text-xl font-bold px-5'>3 stars</p>
                        <div class="w-full bg-gray-200 h-8 mb-6 rounded-full">
                            <div class="bg-gray-200 h-8 rounded-full"></div>
                        </div>
                        <p className='text-xl font-bold px-5'>2 stars</p>
                        <div class="w-full bg-gray-200 h-8 mb-6 rounded-full">
                            <div class="bg-gray-200 h-8 rounded-full"></div>
                        </div>
                        <p className='text-xl font-bold px-5'>1 stars</p>
                    </div>
                    <div>






                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reviews;
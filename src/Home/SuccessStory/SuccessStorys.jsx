import React from 'react';

const SuccessStorys = () => {
    return (
        <div className='bg-white'>
            <div className='max-w-[1240px] mx-auto px-5 md:px-0'>
                <div className='devider flex py-10'>
                    <span></span>
                    <span className='def'></span>
                    <span></span>
                </div>
                <div>
                    <h1 className='text-4xl uppercase text-center'>SUCCESS STORIES</h1>
                    <p className='text-sm font-light md:text-lg text-center pb-10'>
                        You can also be an expert in DIGITAL MARKETING like our successful students if you are working hard enough to be skilled.
                    </p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
                    <iframe width="100%" className='md:h-[400px]' src="https://www.youtube.com/embed/SxLFVXaYXY8" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    <iframe width="100%" className='md:h-[400px]' src="https://www.youtube.com/embed/BR3AOrd1KuA" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </div>
            </div>
        </div>
    );
};

export default SuccessStorys;
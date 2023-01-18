import React from 'react';
import papercut1 from '../assests/papercut1.jpg';

const About = () => {
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
                            <h1 className='text-4xl text-white text-center font-bold uppercase my-5'>About Us</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className='max-w-[1140px] mx-auto'>
                <div>
                    <div>
                        <div className='devider flex'>
                            <span></span>
                            <span className='def'></span>
                            <span></span>
                        </div>
                        <h1 className='text-3xl text-center py-5 font-semibold'>Our Origins and Story</h1>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-16 py-16'>
                        <div className=''>
                            <img className='' src={papercut1} alt="" />
                        </div>
                        <div className='text-slate-600'>
                            <p className='pb-10'>
                                SR DREAM IT is an online-based platform of DIGITAL MARKETING Training. SR DREAM IT trained 3000+ Students and most are successful In both online and offline marketplace. From last year, the combined earnings of our students reached $600000+ almost. We always provide our best for making our students learn and develop their working skills. If you do your best then we will be always by your side to support you to be successful.
                            </p>
                            <p>
                                In 2020 SR DREAM IT started it’s journey where the main concern was to develop the skills of it’s trainees which are on top of the market demand. We worked so hard that now SR DREAM IT is one of the most successful training institutes in Bangladesh with all 100% positive feedback submitted by our students all over Bangladesh.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
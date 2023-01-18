import React from 'react';
import location from '../assests/contect/location.png';
import mail from '../assests/contect/mail.png';
import help from '../assests/contect/helpline.png';
import map from '../assests/map.png'
import { useForm } from 'react-hook-form';

const ContactUs = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            checkbox: false,
        }
    });;

    const terget = '_blank'

    const handleSignUp = () => {
        console.log('clicked')
    }

    return (
        <div className='pb-10 bg-white'>
            <div className='h-[80vh]'>
                <div className='our_courses w-full h-full flex items-center justify-center'>
                    <div className=''>
                        <div className='devider flex'>
                            <span></span>
                            <span className='def_yellow'></span>
                            <span></span>
                        </div>
                        <div>
                            <h1 className='text-4xl text-white text-center font-bold uppercase my-5'> Contact Us</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-black'>
                <div className='grid grid-cols-1 sm:grid-cols-3 gap-7 text-white max-w-[1240px] mx-auto text-center py-3 px-6 md:px-0'>
                    <div>
                        <img className='w-24 mx-auto' src={location} alt="" />
                        <p className='text-amber-400 text-xl'>Email address</p>
                        <p className='text-slate-400'>Bank Town Jam E Masjid, Ground Floor, 1340 , Savar , Dhaka</p>
                    </div>
                    <div>
                        <img className='w-24 mx-auto' src={mail} alt="" />
                        <p className='text-amber-400 text-xl'>Email address</p>
                        <p className='text-slate-400'>support@srdreamit.com</p>
                    </div>
                    <div>
                        <img className='w-24 mx-auto' src={help} alt="" />
                        <p className='text-amber-400 text-xl'>Helpline</p>
                        <p className='text-slate-400'>SR DREAM IT Admission Helpline :</p>
                        <a className='text-blue-400' href='https://rb.gy/dcvi15' target={terget}>https://rb.gy/dcvi15</a>
                    </div>
                </div>
            </div>
            <div className='max-w-[1240px] mx-auto'>
                <div className='grid md:grid-cols-2 grid-cols-1'>
                    <div>
                        <img src={map} alt="" />
                    </div>
                    <div className=''>
                        <div>
                            <h2 className='text-3xl font-semibold'>Send a Message</h2>
                            <p>Contact us anytime if you face any issue and want to know something from us</p>
                        </div>
                        <form onSubmit={handleSubmit(handleSignUp)}>
                            <div className='grid grid-cols-2 gap-5'>
                                <div className="">
                                    <label className=''> <span className="">First Name</span></label><br />
                                    <input type="text" {...register("Fname", {
                                        required: "Name is Required"
                                    })} className="w-full border p-2 my-3" placeholder='Enter your first name' />
                                    {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                                </div>
                                <div className="">
                                    <label className=''> <span className="">Last Name</span></label><br />
                                    <input type="text" {...register("Lname", {
                                        required: true
                                    })} className=" w-full border p-2 my-3" placeholder='Enter your last Name' />
                                    {errors.email && <p className='text-red-500'>{errors.name.message}</p>}
                                </div>
                            </div>
                            <div className='grid grid-cols-2 gap-5'>
                                <div className="">
                                    <label className=''> <span className="">Email</span></label><br />
                                    <input type="text" {...register("phone", {
                                        required: true
                                    })} className="w-full border p-2 my-3" placeholder='Enter Your Email' />
                                    {errors.phone && <p className='text-red-500'>{errors.phone.message}</p>}
                                </div>
                                <div className="">
                                    <label className=''> <span className="">Phone No.</span></label><br />
                                    <input type="text" {...register("budget", {
                                        required: true
                                    })} className="w-full border p-2 my-3" placeholder='Enter Your Phone No' />
                                    {errors.budget && <p className='text-red-500'>{errors.budget.message}</p>}
                                </div></div>
                            <div className="">
                                <label className=''> <span className="">Your Massage</span></label><br />
                                <textarea {...register("budget", {
                                    required: true
                                })} className="w-full border p-2 my-3" placeholder='Your Massage'>
                                    At w3schools.com you will learn how to make a website. They offer free tutorials in all web development technologies.
                                </textarea>

                                {errors.budget && <p className='text-red-500'>{errors.budget.message}</p>}
                            </div>
                            <div className="">
                                <label className=''> <span className="">Are You a Human? 3+1=</span></label><br />
                                <input type="text" {...register("facebook", {
                                    required: true
                                })} className="w-full border p-2 my-3" placeholder='Type Your Answer Here' />
                                {errors.facebook && <p className='text-red-500'>{errors.facebook.message}</p>}
                            </div>
                            <input className='bg-teal-500 w-full mt-4 p-2 rounded-md font-semibold text-white' value='Send Massage' type="submit" />
                            {/* {signUpError && <p className='text-red-600'>{signUpError}</p>} */}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
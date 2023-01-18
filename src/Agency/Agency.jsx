import React from 'react';
import { useForm } from 'react-hook-form';
import gif from '../assests/sr_dream_it_banner_550x330.gif'

const Agency = () => {

    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            checkbox: false,
        }
    });;

    const handleSignUp = () => {
        console.log('hello world')
    }

    return (
        <div className='bg-white'>
            <div className='max-w-[1140px] mx-auto'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-10 items-center'>
                    <div className=''>
                        <h1 className='text-4xl my-5'>Traditional Marketing has changed! Old Days are gone!</h1>
                        <p className='my-7'>
                            This is the age of Digital Marketing so take the advantages of your website and social media accounts.
                        </p>
                        <p className='my-7'>
                            Your competitors are doing more business because they are crazy to get more sales. They are doing great marketing, maybe you are letting your customers to purchase from your competitors just because you don’t have a clear marketing plan. Don’t worry SR DREAM IT Agency is here to help you get more Traffic, Leads and more business!
                        </p>
                        <p className='my-7'>
                            Today every person uses the internet. They are your online consumers. In the digital marketing platform, the difference between big and small companies is really very small. This is where SR DREAM IT Agency helps you. Let’s promote your brand and deliver a lasting impact on your sales and growth.
                        </p>
                    </div>
                    <div className=''>
                        <img src={gif} alt="" />
                    </div>
                </div>
                <div className='md:flex gap-10 py-14'>
                    <div>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/wP2ifyiDyDA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                    <div>
                        <h1 className='text-5xl'>Grow Your Business With Us</h1>
                    </div>
                </div>
                <div className='py-10'>
                    <div className='border border-purple-700 p-5'>
                        <div>
                            <h1 className='text-3xl font-semibold text-center'>Requirement Form</h1>
                            <p className='text-center my-3'>Please fill up the form below with your requirements, our team will contact you within 24 hours. Good day!</p>
                            <form onSubmit={handleSubmit(handleSignUp)}>
                                <div className="">
                                    <label className=''> <span className="">Name</span></label><br />
                                    <input type="text" {...register("name", {
                                        required: "Name is Required"
                                    })} className="w-full border p-2 my-3" placeholder='Enter your name' />
                                    {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                                </div>
                                <div className="">
                                    <label className=''> <span className="">Email</span></label><br />
                                    <input type="email" {...register("email", {
                                        required: true
                                    })} className=" w-full border p-2 my-3" placeholder='Enter your Email' />
                                    {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                                </div>
                                <div className="">
                                    <label className=''> <span className="">Phone no</span></label><br />
                                    <input type="text" {...register("phone", {
                                        required: true
                                    })} className="w-full border p-2 my-3" placeholder='Phone No' />
                                    {errors.phone && <p className='text-red-500'>{errors.phone.message}</p>}
                                </div>
                                <div className="">
                                    <label className=''> <span className="">Estimated Budget </span></label><br />
                                    <input type="text" {...register("budget", {
                                        required: true
                                    })} className="w-full border p-2 my-3" placeholder='Estimated Budget' />
                                    {errors.budget && <p className='text-red-500'>{errors.budget.message}</p>}
                                </div>
                                <div className="">
                                    <label className=''> <span className="">Facebook Page/Post/Event/App/Website URL</span></label><br />
                                    <input type="text" {...register("facebook", {
                                        required: true
                                    })} className="w-full border p-2 my-3" placeholder='Facebook Page/Post/Event/App/Website URL' />
                                    {errors.facebook && <p className='text-red-500'>{errors.facebook.message}</p>}
                                </div>
                                <div className="">
                                    <label className=''> <span className="">If You have Any More Queries</span></label><br />
                                    <input type="text" {...register("queries", {
                                        required: true
                                    })} className="w-full border p-2 my-3" placeholder='Any Queries' />
                                    {errors.queries && <p className='text-red-500'>{errors.queries.message}</p>}
                                </div>
                                <div className="">
                                    <label className=''> <span className="">Password</span></label><br />
                                    <input type="password" {...register("password", {
                                        required: "Password is required",
                                        minLength: { value: 6, message: "Password must be 6 characters long" },
                                        pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: 'Password must have uppercase, number and special characters' }
                                    })} className="w-full border p-2 my-3" placeholder='Enter your password' />
                                    {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                                </div>

                                <div className="">
                                    <div className='flex gap-2 items-center'>
                                        <input {...register("facebook")} type="checkbox" value="facebook" className='my-3' />
                                        <label className='text-blue-500 font-semibold'> Facebook & Instagram Organic & Paid Marketing</label><br></br>
                                    </div>
                                    <div className='flex gap-2 items-center'>
                                        <input {...register("youtube")} type="checkbox" value="youtube" className='my-3' />
                                        <label className='text-blue-500 font-semibold'> YouTube Organic & Paid Promotion</label><br></br>
                                    </div>
                                    <div className='flex gap-2 items-center'>
                                        <input {...register("google_ads")} type="checkbox" value="google_ads" className='my-3' />
                                        <label className='text-blue-500 font-semibold'>Google Ads ( Search/Display/Shopping/Brand Awareness Campaigns)</label><br></br>
                                    </div>
                                    <div className='flex gap-2 items-center'>
                                        <input {...register("social_media")} type="checkbox" value="social_media" className='my-3' />
                                        <label className='text-blue-500 font-semibold'>Creating Content/SEO Content for Website/Social Media</label><br></br>
                                    </div>
                                    <div className='flex gap-2 items-center'>
                                        <input {...register("seo")} type="checkbox" name="seo" value="seo" className='my-3' />
                                        <label className='text-blue-500 font-semibold'>SEO Service</label><br></br>
                                    </div>
                                    <div className='flex gap-2 items-center'>
                                        <input {...register("graphic")} type="checkbox" value="graphic" className='my-3' />
                                        <label className='text-blue-500 font-semibold'>Graphic Design</label><br></br>
                                    </div>
                                    <div className='flex gap-2 items-center'>
                                        <input {...register("animation")} type="checkbox" value="animation" className='my-3' />
                                        <label className='text-blue-500 font-semibold'>Promotional Animated Video Making for Marketing Purpose</label><br></br>
                                    </div>
                                    <div className='flex gap-2 items-center'>
                                        <input {...register("web_development")} type="checkbox" value="web_development" className='my-3' />
                                        <label className='text-blue-500 font-semibold'>Web Design & Development</label><br></br>
                                    </div>
                                    <div className='flex gap-2 items-center'>
                                        <input {...register("linkedIn")} type="checkbox" value="linkedIn" className='my-3' />
                                        <label className='font-semibold text-blue-500'>LinkedIn Organic & Paid Promotion</label><br></br>
                                    </div>
                                </div>
                                <div className="flex gap-5 items-center">
                                    <label className=""> <span className="">Varificarion</span></label>
                                    <input type="text" {...register("varification", { required: true })} className="w-full border p-2 my-3" placeholder='' />
                                    {errors.varification && <p className='text-red-500'>{errors.varification.message}</p>}
                                </div>

                                <input className='bg-teal-500 w-full mt-4 p-2 rounded-md' value={`Submit`} type="submit" />

                                {/* {signUpError && <p className='text-red-600'>{signUpError}</p>} */}
                            </form>
                        </div>
                    </div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-10 py-10'>
                    <div className='border border-inherit'>
                        <h1 className='text-2xl text-center bg-slate-100 py-2'>***Billing & Contract Terms***</h1>
                        <div className='p-5'>
                            <div className='py-2'>
                                <h3 className='text-lg text-blue-500'>Q : How do I pay for agency fees?</h3>
                                <p className='text-sm text-slate-400'>A : We accept Bkash, Rocket, Nagad, DDBL Nexus, Master Card, Visa Card, Amex Card.</p>
                            </div>
                            <div className='py-2'>
                                <h3 className='text-lg text-blue-500'>Q : What does your invoicing process look like?</h3>
                                <p className='text-sm text-slate-400'>A : We use QuickBooks for invoicing and accounting. Invoices are setup with the payment schedule and terms as described in your signed master services agreement (MSA).</p>
                            </div>
                            <div className='py-2'>
                                <h3 className='text-lg text-blue-500'>Q : What if I want to cancel services?</h3>
                                <p className='text-sm text-slate-400'>A : Contact us via email to request a cancellation of services.</p>
                            </div>
                        </div>
                    </div>
                    <div className='border border-inherit'>
                        <h1 className='text-2xl text-center bg-slate-100 py-2'>***Our Process & Client Expectations***</h1>
                        <div className='p-5'>
                            <div className='py-2'>
                                <h3 className='text-lg text-blue-500'>Q : What kind of reports will I receive?</h3>
                                <p className='text-sm text-slate-400'>A : We build live, web-based reporting dashboards that act as a single client portal from which all of your digital marketing analytics are reported, giving you 24/7 access to campaign performance and total clarity.</p>
                            </div>
                            <div className='py-2'>
                                <h3 className='text-lg text-blue-500'>Q : What should my digital marketing budget be?</h3>
                                <p className='text-sm text-slate-400'>Q : What should my digital marketing budget be?</p>
                            </div>
                        </div>
                    </div>
                    <div className='border border-inherit'>
                        <h1 className='text-2xl text-center bg-slate-100 py-2'>***Paid (Advertising & Retargeting)*****</h1>
                        <div className='p-5'>
                            <div className='py-2'>
                                <h3 className='text-lg text-blue-500'>Q : What paid advertising and retargeting services do you offer?</h3>
                                <p className='text-sm text-slate-400'>A : We offer paid advertising campaign management across a variety of social media and search engine platforms including: Facebook Instagram Pinterest LinkedIn Google YouTube</p>
                            </div>
                            <div className='py-2'>
                                <h3 className='text-lg text-blue-500'>Q : When will I see results from paid search advertising?</h3>
                                <p className='text-sm text-slate-400'>A : Upon returning your SOW, your strategist will schedule a kick-off phone call or in-person meeting with your team.</p>
                            </div>
                            <div className='py-2'>
                                <h3 className='text-lg text-blue-500'>What is your agency's approach to paid campaigns?</h3>
                                <p className='text-sm text-slate-400'>A : Our approach to developing paid campaigns depends on variables like campaign goals, buyer personas, our clients’ sales cycles, and commercial transaction type (B2B or B2C). EX) Optimizing lead-gen campaigns with Google Ads for B2C companies with considered sales cycles, requires razor sharp buyer personas and demographic targeting, tightly themed ad groups, testing ad copy and enticing offers, focused landing pages and a variety of keywords.</p>
                            </div>

                        </div>
                    </div>
                    <div className='border border-inherit'>
                        <h1 className='text-2xl text-center bg-slate-100 py-2'>***Contact Information***</h1>
                        <div className='p-5'>
                            <div className='py-2'>
                                <h3 className='text-lg text-blue-500'>Contact us for any queries related to Agency Services -</h3>
                                <p className='text-sm text-slate-400'>Email : srdreamit.agency@gmail.com</p>
                                <p className='text-sm text-slate-400'>Facebook Page : facebook.com/srdreamit.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Agency;
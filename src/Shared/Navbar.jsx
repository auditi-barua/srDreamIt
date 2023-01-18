import React, { useContext } from 'react';
import logo from '../assests/logo.png';
import { FaBars, FaCartArrowDown } from "react-icons/fa";
import './Navbar.css';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider/AuthProvider';

const Navbar = ({ children }) => {
    const [show, setShow] = React.useState(false);

    const handle_click = () => {
        setShow(!show);
    }
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(err => console.log(err));
    }


    return (
        <div className='bg-pink-800 sticky z-10 top-0'>
            <div className='max-w-[1240px] mx-auto'>
                <div className='md:flex md:justify-between py-5 items-center uppercase font-semibold'>
                    <div className='flex items-center justify-between'>
                        <div className='md:hidden p-2 mr-2'>
                            <span className='text-slate-400 text-2xl' onClick={handle_click}><FaBars /></span>
                        </div>
                        <img className='logo pl-4 md:p-0 w-36 sm:w-64' src={logo} alt="" />
                        <div className='text-3xl text-white md:hidden pr-3'><FaCartArrowDown /></div>
                    </div>
                    <div className='hidden md:block text-sm'>
                        <ul className='flex text-bold items-center '>
                            <li ><Link className='text-white py-2 px-4 cursor-pointer hover:opacity-50' to='/'>Home</Link></li>
                            <li className='subMenu'>
                                <p className='text-white py-2 px-4 cursor-pointer hover:opacity-50' to='/'>About</p>
                                <ul class="subMenu2">
                                    <li className='border-b border-gray-400'><Link to="/about" className='hover:pl-3 duration-500'>About us</Link></li>
                                    <li><Link className='hover:pl-3 duration-500' to='/team'>Team</Link></li>
                                </ul>
                            </li>
                            <li><Link className='text-white py-2 px-4 cursor-pointer hover:opacity-50' to='/course'>Courses</Link></li>
                            <li><Link className='text-white py-2 px-4 cursor-pointer hover:opacity-50' to='/agency'>Agency</Link></li>
                            <li className='subMenu'>
                                <Link className='text-white py-2 px-4 cursor-pointer hover:opacity-50' to='/'>Sucsess storys</Link>
                                <ul class="subMenu2">
                                    <li className='border-b border-gray-400'><Link to='/freelanchers' className='hover:pl-3 duration-500'>Freelanchers</Link></li>
                                    <li><Link to='blog' className='hover:pl-3 duration-500' >Blog</Link></li>
                                </ul>
                            </li>
                            <li><Link className='text-white py-2 px-4 cursor-pointer hover:opacity-50' to='/contact'>Contact Us</Link></li>
                            {user?.uid ?
                                <>
                                    <li><button className='hover:opacity-70 button text-black yellow normal-case font-normal' onClick={handleLogOut}>Sign out</button></li>
                                </>
                               : <li><Link className='hover:opacity-70 button text-black yellow normal-case font-normal' to='/login'>Login</Link></li>}
                            <li><div className='text-3xl text-white pl-3'><FaCartArrowDown /></div></li>
                            {/* {component} */}
                        </ul>
                    </div>
                    <div className={`${show ? 'active' : undefined} absolute z-10 bg-white navbar md:hidden w-[140px] border rounded-sm mt-8`}>
                        <ul className='z-0'>
                            <li className='border-b border-slate-300 text-black py-2 px-4 cursor-pointer hover:bg-slate-200'><Link to='/'>Home</Link></li>
                            <li className='border-b border-slate-300 text-black py-2 px-4 cursor-pointer hover:bg-slate-200'><Link to='/about'>About</Link></li>
                            <li className='border-b border-slate-300 text-black py-2 px-4 cursor-pointer hover:bg-slate-200'><Link to='/course'>Courses</Link></li>
                            <li className='border-b border-slate-300 text-black py-2 px-4 cursor-pointer hover:bg-slate-200'><Link to='/agency'>Agency</Link></li>
                            <li className='text-black py-2 px-4 cursor-pointer hover:bg-slate-200'><Link to='/freelanchers'>Sucsess storys</Link></li>
                            <li className='text-black py-2 px-4 cursor-pointer hover:bg-slate-200'><Link to='/contact'>Contact Us</Link></li>
                            {user?.uid ?
                                <>
                                    <li><button className='hover:opacity-70 button text-black yellow normal-case font-normal' onClick={handleLogOut}>Sign out</button></li>
                                </>
                                :

                                <button className='button text-black yellow w-full'><Link to='/login'>Login</Link></button>}

                        </ul>
                    </div>
                </div>
            </div>
            <marquee className='text-white width-full'>
                {children}
            </marquee>
        </div >
    );
};

export default Navbar;
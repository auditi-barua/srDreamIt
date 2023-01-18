import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useToken from '../hooks/useToken';
import { AuthContext } from '../Context/AuthProvider/AuthProvider';

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { signIn } = useContext(AuthContext);
    const [loginError, setLoginError] = useState('');
    const location = useLocation();
    const [loginUserEmail, setLoginUserEmail] = useState('');
    const [token] = useToken(loginUserEmail);
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';
    
    if (token) {
        navigate(from, { replace: true });
    }

    const handleLogin = (data) => {
        console.log(data);
        setLoginError('')
        signIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user)
                setLoginUserEmail(data.email);
            })
            .catch(error => {
                console.log(error.message)
                setLoginError(error.message)
        })
    }
    
    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 p-7 bg-gray-700'>
            <h1 className='text-3xl font-semibold'>Login</h1>
                <p>If you don’t have any existing account, first</p>
                     <Link className='font-semibold text-blue-400 hover:underline cursor-pointer ' to='/signup'>Sign Up</Link>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <div className="form-control w-full  max-w-xs">
                        <label className="label">
                       <span className="label-text">Email</span>
                        </label>
                        <input type="email"
                            {...register('email',
                                { required: 'Email Address is required' })} className="input input-bordered w-full p-2 my-3 max-w-xs" /> 
                        {errors.email && <p className='text-red-600' role="alert">{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                       <span className="label-text">Password</span>
                        </label>
                        <input type="password"
                            {...register('password',
                                {
                                    required: 'Password is required',
                                    minLength: { value: 6, message: 'Password must be 6 characters or longer' }
                                })} className="input input-bordered w-full p-2 my-3 max-w-xs" /> 
                        <label className='label'><span className='label-text'>Forgot your passowrd?</span></label>
                        {errors.password && <p className='text-red-600' role="alert">{errors.password?.message}</p>}
                    </div>
                    
                    <input type='submit' className='bg-teal-500 w-full p-2 my-3' value='Login' />
                    <div>
                        {loginError && <p className='text-red-600'>{loginError}</p>}
                    </div>
                </form>
                <p>New to SR DREAMIT! <Link to='/signup' className='text-blue-500'>Create a new Account</Link></p>

            </div>
           
        </div>
    );
};

export default Login;











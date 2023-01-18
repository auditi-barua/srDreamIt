import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import {AuthContext} from '../Context/AuthProvider/AuthProvider'


const SignUp = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { createUser, updateUser } = useContext(AuthContext);
    const [signUpError, setSignUPError] = useState('');
    const handleSignUp = (data) => {
        console.log(data);
        setSignUPError('');
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast('User Created Successfully.')
                const userInfo = {
                    displayName: data.name
                }
                updateUser(userInfo)
                    .then(() => { })
                    .catch(err => console.log(err));
            })
            .catch(error => {
                console.log(error)
                setSignUPError(error.message)
            });
      
    }
    return (
        <div className='h-[800px] flex justify-center items-center '>
        <div className='w-96 p-7 bg-gray-600'>
            <h2 className='text-xl text-center'>Sign Up</h2> 
                <form onSubmit={handleSubmit(handleSignUp)}>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                   <span className="label-text">Name</span>
                    </label>
                    <input type="name" {...register('name',{ required: 'Name is required' })}
                        className="input input-bordered w-full border p-2 my-3 max-w-xs" /> 
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                   <span className="label-text">Email</span>
                    </label>
                    <input type="email" {...register('email',{ required: 'Email Address is required' })}
                            className="input input-bordered w-full border p-2 my-3 max-w-xs" /> 
                            {errors.email && <p className='text-red-600' role="alert">{errors.email?.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                   <span className="label-text">Password</span>
                    </label>
                        <input type="password" {...register('password', {
                            required: 'Password is required',
                            minLength: { value: 6, message: 'Password must be 6 character' },
                    pattern: {message:'Password must be strong'}
                        })}
                         className="input input-bordered w-full border p-2 my-3 max-w-xs" /> 
                        <label className='label'><span className='label-text'>Forgot your passowrd?</span></label>
                        {errors.password && <p className='text-red-600' role="alert">{errors.password?.message}</p>}
                   
                </div>
                
                <input type='submit'className='bg-teal-500 w-full border p-2 my-3' value='SignUp'/>
            </form>
            <p>Already have an account? <Link to='/login' className='text-blue-500 '>Please login</Link></p>
        </div>
       
    </div>
    );
};

export default SignUp;
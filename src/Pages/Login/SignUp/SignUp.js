import React from 'react';
import { useForm } from "react-hook-form";
import login from '../../../assest/login/login@4x.png'
import { Link } from 'react-router-dom';

const SignUp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleLogin = data =>{
        console.log(data)
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="lg:grid grid-cols-2  justify-center items-center">
                <div className="lg:w-1/2">
                    <img src={login} alt="" className='lg:ml-44' />
                </div>
                <div className="card  lg:max-w-sm shadow-2xl bg-base-100 lg:w-1/2 lg:ml-20">
                
                    <form onSubmit={handleSubmit(handleLogin)} className="card-body">
                       <h1 className='text-3xl font-bold text-green-400 '>Signup Now!!</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="name" {...register("name", {required: "Name is required"})} className="input input-bordered" />
                            {errors.name && <p className='text-red-500'>{errors.name?.message}</p>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" {...register("email", {required: "Email is required"})} className="input input-bordered" />
                            {errors.email && <p className='text-red-500'>{errors.email?.message}</p>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" {...register("password", {required: "password is required", minLength: {value: 8, message: "password must 8 number or character"}})} className="input input-bordered" />
                            {errors.password && <p className='text-red-500'>{errors.password?.message}</p>}
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <p className='text-center pb-4 text-red-500'>Already have an account?<Link to='/login' className='text-green-400'>Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
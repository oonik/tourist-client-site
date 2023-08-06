import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import login from '../../../assest/login/login@4x.png'
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import useToken from '../../../hook/useToken';

const SignUp = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const {handleCreateUser} = useContext(AuthContext);
    const [errorMessage, setErrorMessage] = useState("");
    const [createdUserEmail, setCreatedUserEmail] = useState('');
    const [token] = useToken(createdUserEmail);
    const navigate = useNavigate();

    if(token){
        navigate('/login')
    }

    const handleLogin = data =>{
        handleCreateUser(data.email, data.password)
        .then((result=>{
            const user = result.user;
            if(user){
                reset();
            }
            saveUser(data.name, data.email);
        }))
        .catch((error) => {
            const  errorMessage = error.message;
            setErrorMessage(errorMessage);
          });
    };

    const saveUser = (name, email) =>{
        const user = {
            name,
            email
        }
        fetch('http://localhost:5000/users', {
            method: "POST",
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data =>{
            // console.log(data)
            setCreatedUserEmail(email);
        })
    }
    return (
        <div className="hero min-h-screen">
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
                            <button className="btn btn-primary">Sign up</button>
                        </div>
                    </form>
                    <p className='text-red-500 text-center'>{errorMessage}</p>
                    <p className='text-center pb-4 text-red-500'>Already have an account?<Link to='/login' className='text-green-400'>Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import './BooktTour.css'
import 'react-day-picker/dist/style.css';
import { toast } from 'react-toastify';



const BookTour = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [selectedDate, setSelectedDate] = useState(new Date());

    const [showDatePicker, setShowDatePicker] = useState(false);

    const handleDatePicker = () => {
        setShowDatePicker(true)
    };
    
    const handleBooking = data => {
        console.log(data)
        fetch('http://localhost:5000/booking', {
            method: 'POST',
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            if(data.acknowledged){
                reset();
                toast('booking successfully', {
                    position: "top-center",
                    type: "success",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",});
            }
        })
    };
   
    return (
        <div className='bg-image sm:my-10 lg:mx-10 lg:my-20 p-10'>
            <div className='lg:flex justify-center gap-5'>
                <div className='lg:w-1/2'>
                    <h3 className='xl text-white font-bold sm:hidden lg:block'>BOOKING</h3>
                    <h1 className='text-5xl text-white font-bold mt-3'>Online Booking</h1>
                    <p className='my-5 text-white'>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit. <br /> <br /> Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                    <button className='btn btn-outline text-white px-12 pb-8 pt-5 hover:bg-white hover:text-black'>Read More</button>
                </div>
                <div className='lg:w-1/2'>
                    <h1 className='text-5xl text-white font-bold'>Book a Tour</h1>
                    <form onSubmit={handleSubmit(handleBooking)} className='mt-5'>
                        <div className='lg:flex gap-2'>
                            <input placeholder='Your Name' {...register("name", { required: 'Name is required' })} className='border-2 border-white w-full bg-transparent p-3 placeholder:text-white' />
                            {errors.name && <p className='text-red-500'>{errors.name?.message}</p>}
                            <input placeholder='Your Email' {...register("email", { required: 'Your email is required' })} className='border-2 border-white w-full bg-transparent p-3 placeholder:text-white' />
                            {errors.email && <p className='text-red-500'>{errors.email?.message}</p>}
                        </div>
                        {
                            showDatePicker && <DayPicker
                                className='text-white'
                                mode="single"
                                selected={selectedDate}
                                onSelect={setSelectedDate}
                            ></DayPicker>
                        }
                        <div className='lg:flex gap-2 lg:mt-5'>
                            <input
                                {...register("date", { required: 'Date is required' })}
                                value={format(selectedDate, 'PP')}
                                onClick={handleDatePicker}
                                className='border-2 border-white w-full bg-transparent p-3 text-white' />
                            {errors.date && <p className='text-red-500'>{errors.date?.message}</p>}

                            <select {...register("destination")} className="border-2 border-white w-full bg-transparent p-3 text-white ">
                                <option disabled selected value='malaysia'>Malaysia</option>
                                <option value='australia' className='text-black'>Australia</option>
                                <option value='indonesia' className='text-black'>Indonesia</option>
                                <option value='thailand' className='text-black'>Thailand</option>
                            </select>
                        </div>
                        <textarea placeholder="Special request" {...register("description")} className="border-2 border-white textarea-md w-full mt-5 bg-transparent placeholder:text-white text-white"></textarea>
                        <input type="submit" className='btn border-3 bg-transparent rounded-none pb-8 pt-5 text-white w-full mt-10 hover:bg-white hover:text-black' />
                    </form>

                </div>
            </div>
        </div>
    );
};

export default BookTour;
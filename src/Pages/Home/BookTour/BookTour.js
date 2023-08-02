import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import './BooktTour.css'
import 'react-day-picker/dist/style.css';
import { da } from 'date-fns/locale';


const BookTour = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [date, setDate] = useState(new Date());
    console.log(date)
    const [showDatePicker, setShowDatePicker] = useState(false);
    console.log(showDatePicker)
    const handleDatePicker = () => {
        setShowDatePicker(true)
    };
    let footer = <p>Please pick a day.</p>;
    if (date) {
        footer = <p>You picked {format(date, 'PP')}.</p>;
    }
    const handleBooking = data => {
        console.log(data)
    };
    return (
        <div className='bg-image sm:my-10 lg:m-10 p-10'>
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
                                selected={date}
                                onSelect={setDate}
                                footer={footer}
                            ></DayPicker>
                        }
                        <div className='lg:flex gap-2 lg:mt-5'>
                            <input
                                defaultValue={date ? format(date, 'PP') : ''}
                                {...register("date", { required: 'Date is required' })}
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
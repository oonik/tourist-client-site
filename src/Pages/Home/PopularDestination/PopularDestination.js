import React from 'react';

const PopularDestination = () => {

    return (
        <div className='lg:mt-10'>
            <h1 className='text-xl text-center font-bold text-green-400'>DESTINATION</h1>
            <h1 className='text-5xl font-semibold text-center text-slate-600 mt-2 mb-10'>Popular Destination</h1>
            <div className='grid lg:grid-cols-3 gap-5 mx-10'>
                <div data-aos="zoom-out-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000"
                    className='lg:col-span-2 overflow-hidden relative'>
                    <img className='w-full hover:scale-125 transition duration-500 cursor-pointer object-cover' src="https://i.postimg.cc/Hk1M95cm/destination-1.jpg" alt="" />
                    <div className='absolute top-2 left-2'>
                        <h1 className='lg:text-xl bg-white p-2 text-red-500 font-semibold'>30% OFF</h1>
                    </div>
                    <div className='absolute bottom-2 right-2'>
                        <h1 className='lg:text-xl bg-white p-2 text-green-500 font-semibold'>Thailand</h1>
                    </div>
                </div>
                <div data-aos="zoom-out-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000" 
                    className='col-span-1 w-full h-full overflow-hidden relative'>
                    <img className='w-full h-full hover:scale-125 transition duration-500 cursor-pointer object-cover' src="https://i.postimg.cc/d13ZVjX2/destination-2.jpg" alt="" />
                    <div className='absolute top-2 left-2'>
                        <h1 className='lg:text-xl bg-white p-2 text-red-500 font-semibold'>20% OFF</h1>
                    </div>
                    <div className='absolute bottom-2 right-2'>
                        <h1 className='lg:text-xl bg-white p-2 text-green-500 font-semibold'>Malaysia</h1>
                    </div>
                </div>
                <div data-aos="zoom-out-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000" 
                    className='col-span-1 overflow-hidden relative'>
                    <img className='w-full hover:scale-125 transition duration-500 cursor-pointer object-cover' src="https://i.postimg.cc/FRwbt6Rd/destination-3.jpg" alt="" />
                    <div className='absolute top-2 left-2'>
                        <h1 className='lg:text-xl bg-white p-2 text-red-500 font-semibold'>25% OFF</h1>
                    </div>
                    <div className='absolute bottom-2 right-2'>
                        <h1 className='lg:text-xl bg-white p-2 text-green-500 font-semibold'>Australia</h1>
                    </div>
                </div>
                <div data-aos="zoom-out-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000" 
                    className='lg:row-start-1 grid-rows-2 row-span-2 overflow-hidden relative'>
                    <img className='h-full hover:scale-125 transition duration-500 cursor-pointer object-cover' src="https://i.postimg.cc/6qRrBh2H/destination-4.jpg" alt="" />
                    <div className='absolute top-2 left-2'>
                        <h1 className='lg:text-xl bg-white p-2 text-red-500 font-semibold'>30% OFF</h1>
                    </div>
                    <div className='absolute bottom-2 right-2'>
                        <h1 className='lg:text-xl bg-white p-2 text-green-500 font-semibold'>Indonesia</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PopularDestination;
import React from 'react';

const PopularDestination = () => {

    return (
        <div className='lg:mt-10'>
            <h1 className='text-xl text-center font-bold text-green-400'>DESTINATION</h1>
            <h1 className='text-5xl font-semibold text-center text-slate-600 my-10'>Popular Destination</h1>
            <div className='grid lg:grid-cols-3 gap-5 mx-10'>
                <div className='lg:col-span-2 w-full'>
                    <img className='w-full' src="https://i.postimg.cc/Hk1M95cm/destination-1.jpg" alt="" />
                </div>
                <div className='col-span-1 w-full h-full'>
                    <img className='w-full h-full' src="https://i.postimg.cc/d13ZVjX2/destination-2.jpg" alt="" />
                </div>
                <div className='col-span-1'>
                    <img className='w-full' src="https://i.postimg.cc/FRwbt6Rd/destination-3.jpg" alt="" />
                </div>
                <div className='lg:row-start-1 grid-rows-2 row-span-3 h-full'>
                    <img className='h-full' src="https://i.postimg.cc/6qRrBh2H/destination-4.jpg" alt="" />
                </div>
            </div>
        </div>
    );
};

export default PopularDestination;
import React from 'react';
import banner from '../../assest/img/bg-hero.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Banner = () => {
    AOS.init()
    return (
        <div  className="hero min-h-screen mt-5" style={{ backgroundImage: `url(${banner})` }}>
            <div className="hero-overlay bg-opacity-70"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 data-aos="zoom-in-up" data-aos-duration="2000" className="mb-5 text-6xl font-bold"><span className='text-green-500'>Enjoy Your Vacation</span> With Us</h1>
                    <p className="mb-5 text-2xl text-yellow-400">Tempor erat elitr rebum at clita diam amet diam et eos erat ipsum lorem sit</p>
                    <div className="join">
                        <input className="input input-bordered join-item" placeholder="Email" />
                        <button className="btn join-item rounded-r-full bg-green-400 text-white">Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
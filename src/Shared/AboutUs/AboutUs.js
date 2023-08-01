import React from 'react';
import touristImg from '../../assest/about/istockphoto-1403617423-170667a.webp';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AboutUs = () => {
    AOS.init();
    return (
        <div className="hero  mt-20">
            <div className="hero-content flex-col lg:flex-row gap-10">
                <img 
                data-aos="zoom-in"
                data-aos-duration="2000"
                src={touristImg} alt='' className="w-1/2 h-full rounded-lg " />
                <div className='w-1/2'>
                    <h3 className="text-2xl font-bold text-green-400">ABOUT US <div className="divider w-44 "></div></h3>
                    <h1 className='text-5xl font-bold text-zinc-500'>Welcome to <span className='text-green-500'>Tourist</span></h1>
                    <p className="py-6">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit.

                        Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                    <button className="btn btn-success text-white">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
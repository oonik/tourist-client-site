import React from 'react';
import {  FaFacebook, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const MeetOurTeam = () => {
    const teams = [
        {
            id: '0',
            img: "https://i.postimg.cc/XqhRb1LK/man-poses-passport-photo-260nw-207377266.webp",
            name: "Anik Sarkar"
        },
        {
            id: '1',
            img: "https://i.postimg.cc/T1XkJ8t4/member-2.jpg",
            name: "Anik Sarkar"
        },
        {
            id: '2',
            img: "https://i.postimg.cc/Y0hSRVjQ/member-3.jpg",
            name: "Anik Sarkar"
        },
        {
            id: '3',
            img: "https://i.postimg.cc/J7NmVRCt/member-4.jpg",
            name: "Anik Sarkar"
        },
    ]
    return (
        <div className='m-10'>
            <h3 className='text-xl font-bold text-green-400 text-center'>TRAVEL GUIDE</h3>
            <h1 className='text-5xl text-slate-500 font-bold text-center mt-3 mb-10'>Meet Our Team</h1>
            <div className='lg:flex gap-5'>
            {
                teams.map(man => <div key={man.id} 
                data-aos="zoom-in-up" 
                data-aos-duration="3000" 
                className="card w-full bg-cyan-100 shadow-cyan-300/50  shadow-xl">
                <figure className="px-10 pt-10 overflow-hidden">
                  <img src={man.img} alt="Shoes" className="rounded-xl h-56 w-full hover:scale-110 transition duration-500 cursor-pointer object-cover" />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title">{man.name}</h2>
                  <div className="card-actions">
                    <Link to="https://www.facebook.com/?ref=logo"><FaFacebook className="text-2xl text-blue-600"></FaFacebook></Link>
                    <FaInstagram className='text-2xl text-orange-500'></FaInstagram>
                  </div>
                </div>
              </div>)
            }
        </div>
        </div>
    );
};

export default MeetOurTeam;
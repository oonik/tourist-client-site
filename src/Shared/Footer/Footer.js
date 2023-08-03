import React from 'react';
import img1 from '../../assest/img/package-1.jpg'
import img2 from '../../assest/img/package-2.jpg'
import img3 from '../../assest/img/package-3.jpg'

const Footer = () => {
    return (
        <footer className="footer p-10 bg-neutral text-neutral-content">
  <div>
    <span className="footer-title text-2xl">Services</span> 
    <a className="link link-hover">Branding</a> 
    <a className="link link-hover">Design</a> 
    <a className="link link-hover">Marketing</a> 
    <a className="link link-hover">Advertisement</a>
  </div> 
  <div>
    <span className="footer-title text-2xl">Company</span> 
    <a className="link link-hover">About us</a> 
    <a className="link link-hover">Contact</a> 
    <a className="link link-hover">Jobs</a> 
    <a className="link link-hover">Press kit</a>
  </div> 
  <div>
    <span className="footer-title text-2xl">Gallery</span> 
    <div className='grid grid-cols-3 gap-2'>
    <img src={img1} alt="" className='w-20 border-4' />
    <img src={img2} alt="" className='w-20 border-4'/>
    <img src={img3} alt="" className='w-20 border-4'/>
    <img src={img1} alt="" className='w-20 border-4'/>
    <img src={img2} alt="" className='w-20 border-4'/>
    <img src={img3} alt="" className='w-20 border-4'/>
    </div>
  </div> 
  <div>
    <span className="footer-title text-2xl">Newsletter</span> 
    <div className="form-control w-80">
      <label className="label">
        <span className="text-white">Enter your email address</span>
      </label> 
      <div className="relative">
        <input type="text" placeholder="username@site.com" className="input input-bordered w-full pr-16" /> 
        <button className="btn btn-success absolute top-0 right-0 rounded-l-none">Subscribe</button>
      </div>
    </div>
  </div>
</footer>
    );
};

export default Footer;
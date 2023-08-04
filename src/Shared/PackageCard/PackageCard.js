import React from 'react';
import { FaCalendarDays, FaLocationDot} from "react-icons/fa6";
import { BsPersonFill, IconName } from "react-icons/bs";

const PackageCard = ({ pack }) => {
    const { price, picture, locations, rating, days, about, person } = pack;
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><img src={picture} alt="Shoes" className='hover:scale-125 transition duration-500 cursor-pointer'/></figure>
            <table className='table-fixed '>
                <tbody className='border-collapse border border-slate-400'>
                    <tr>
                        <td className='border-2 text-center text-slate-500 border-slate-300'><span className='flex justify-center items-center gap-1'><FaLocationDot className='text-green-400'/> {locations}</span></td>
                        <td className='border-2 text-center text-slate-500 border-slate-300'><span className='flex justify-center items-center gap-1'><FaCalendarDays className='text-green-400'/> {days}</span></td>
                        <td className='border-2 text-center text-slate-500 p-2 border-slate-300'><span className='flex justify-center items-center gap-1'><BsPersonFill className='text-green-400'/> {person}</span></td>
                    </tr>
                </tbody>
            </table>
            <div className="card-body">
                <h2 className="card-title">{price}</h2>
                <p>{ about.length > 100 ? about.slice(0, 100) + '...': ''}</p>
                
            </div>
        </div>
    );
};

export default PackageCard;
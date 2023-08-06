import React from 'react';
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";

const Star = ({rating}) => {
   const ratingStar =  Array.from({ length:5 }, (elem, i) => {
       
        let number = i + 0.5;
       
        return (
            <span key={i}>
                {
                    rating >= i + 1 ? <FaStar/> : rating >= number ? <FaStarHalfAlt/> : <AiOutlineStar/>
                }
            </span>
         );
    });

    return (
        <div className='flex justify-center items-center my-2 text-yellow-500'>
            {ratingStar}
        </div>
    );
};

export default Star;
import React from 'react';

const PaitentReviewCard = ({review}) => {
  const {name, description, location, paitentImg} = review;
  return (
    <div className='flex justify-center' data-aos="zoom-out-right">
      <div className="card w-96 bg-base-100 shadow-2xl">
        <div className="card-body">
          <p> {description} </p>
          <div className="card-actions justify-center">
            <div className='flex mt-3'>
              <img  src= {paitentImg} alt='paitent review img ' className='rounded-full w-14 h-14'/>
               <div className='ml-4'> 
                <h2 className='text-2xl font-semibold'> {name} </h2>
                 <p> {location} </p>
                 </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaitentReviewCard;

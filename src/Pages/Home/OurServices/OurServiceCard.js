import React from 'react';

const OurServiceCard = ({service}) => {
    const {title,description,serviceImg,bgColor} = service ;
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src= {serviceImg}
            alt="sevice img "
            className={`rounded-xl  bg-${bgColor}`}
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title"> {title} </h2>
          <p> {description.slice(0,100)} </p>
        
        </div>
      </div>
    </div>
  );
};

export default OurServiceCard;

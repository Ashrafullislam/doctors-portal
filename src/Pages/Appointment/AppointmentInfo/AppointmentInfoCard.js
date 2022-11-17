import Aos from 'aos';
import React, { useEffect } from 'react';
import './AppointmentInfoCard.css'

const AppointmentInfoCard = ({data,setTreatment}) => {
  const {name,slots} = data;
  useEffect(()=> {
    Aos.init({duration:'1500'})
  },[])
  return (
    <div className='mx-auto text-center mt-5 ' data-aos="fade-down" >
      <div className="card max-xl:w-96 min-[]: lg:w-80  bg-base-100 shadow-xl" >
        <div className="card-body">
          <h2 className=" text-secondary text-2xl font-bold" > {name} </h2>
          <p> {slots.length > 0 ? slots[0] :'Try another day' } </p>
          <p> {slots.length > 1 ? `Available spaces ${slots.length}`:`Available space${slots.length}` } </p>
          <div className="card-actions justify-center"data-aos="fade-right" >
            <label  htmlFor="booking-modal" className={`btn  ${slots.length === 0 ? " " : "  btn-primary   bg-gradient-to-r from-primary  to-secondary  "} text-white `}
            disabled =  {slots.length === 0  }              
             onClick={()=> setTreatment (data)}> Book Appointment </label>

          </div>
        </div>
      </div>

    </div>
  );
};

export default AppointmentInfoCard;

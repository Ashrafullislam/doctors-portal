import Aos from 'aos';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PrimaryBtn from '../../../components/PrmaryBtn/PrimaryBtn';

const AppointmentInfoCard = ({data}) => {
  const {title, openTime, token} = data;
  useEffect(()=> {
    Aos.init({duration:'1000'})
  },[])

  return (
    <div className='mx-auto text-center' data-aos="zoom-in-up" >
      <div className="card w-96 bg-base-100 shadow-xl" >
        <div className="card-body">
          <h2 className=" text-secondary text-2xl font-bold" data-aos="fade-down"> {title} </h2>
          <p> {openTime} </p>
          <p> {token} </p>
          <div className="card-actions justify-center"data-aos="fade-right" >
            <Link to= '/' > <PrimaryBtn > Book Appointment </PrimaryBtn> </Link>
          </div>
        </div>
      </div>

    </div>
  );
};

export default AppointmentInfoCard;

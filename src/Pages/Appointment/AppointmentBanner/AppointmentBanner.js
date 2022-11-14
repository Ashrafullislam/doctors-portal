import React, { useState } from 'react';
import chair from '../../../assets/images/chair.png';
import bgImage from '../../../assets/images/bg.png';
import {DayPicker} from 'react-day-picker';
import { format } from 'date-fns';

const AppointmentBanner = ({selectedDate,setSelectedDate}) => {


  const styles = {
    header: {
      backgroundImage: `url(${bgImage})`,
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
    },

    content: {
      height: '100%',
      width: '100%',
    },
  };
  return (
    <section>
  <div style={styles.header} className="lg:h-[80vh]">
      <div className="hero  text-black " style={styles.content}>
        <div className="hero-content justify-around flex-col lg:flex-row-reverse">
          <img
            src={chair}
            alt=""
            className="lg:w-1/2 sm:w-10/12  mx-auto rounded-lg shadow-2xl"
           data-aos="fade-left" />
          <div data-aos="fade-right">
            <DayPicker
             mode="single" 
             selected={selectedDate}
             onSelect = {setSelectedDate}
             />


          </div>
        </div>
      </div>
    </div>
  
    </section>
  
  );
};

export default AppointmentBanner;

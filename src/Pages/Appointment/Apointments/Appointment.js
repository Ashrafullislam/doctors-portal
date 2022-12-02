import React, { useState } from 'react';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import AppointmentOption from '../AppointmentInfo/AppointmentOption';


const Appointment = () => {
    // Use Lift state to send data all children 
      // state for keep the selected time  default value must new Date () 
  const [selectedDate ,setSelectedDate] = useState(new  Date())
    return (
        <div className=''>
            <AppointmentBanner
            selectedDate = {selectedDate}
            setSelectedDate = {setSelectedDate}
            > </AppointmentBanner>

            <AppointmentOption selectedDate = {selectedDate} 
                
                setSelectedDate = {setSelectedDate}
            >
             </AppointmentOption>
        </div>
    );
};

export default Appointment;
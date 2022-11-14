import React, { useState } from 'react';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import AppointmentInfo from '../AppointmentInfo/AppointmentInfo';

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

            <AppointmentInfo selectedDate = {selectedDate} 
                
                setSelectedDate = {setSelectedDate}
            >
                
             </AppointmentInfo>
        </div>
    );
};

export default Appointment;
import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingAppointmentModal from '../BookingAppointmentModal/BookingAppointmentModal';
import AppointmentInfoCard from './AppointmentInfoCard';

  const AppointmentInfo = ({selectedDate}) => {
    const [appointOption,setAppointOption] = useState([])
    const [treatment,setTreatment] = useState(null)

    useEffect(()=> {
        fetch('appointmentOption.json')
        .then(res => res.json())
        .then(option => setAppointOption(option))
    },[])
    return (
        <section  className='mt-2 '>
          <div className='text-center text-secondary text-2xl font-bold'>
      <p>Available Appointments on : {format(selectedDate,"PP")} </p>
    </div>
              <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 px-6 mt-6'>
            {
                appointOption.map(data => <AppointmentInfoCard key={data._id}
                     data = {data} 
                     setTreatment = {setTreatment}
                     > 
                     
                </AppointmentInfoCard> )
            }
            
        </div>
        {treatment && 
         <BookingAppointmentModal treatment = {treatment} selectedDate = {selectedDate} setTreatment = {setTreatment} > </BookingAppointmentModal>

        }
        </section>
    
    );
};

export default AppointmentInfo;
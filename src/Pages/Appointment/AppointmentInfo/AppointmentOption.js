import { async } from '@firebase/util';
import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import React, { useState } from 'react';
import Loading from '../../Shared/Loading/Loading';
import BookingAppointmentModal from '../BookingAppointmentModal/BookingAppointmentModal';
import AppointmentOptionCard from './AppointmentOptionCard';

  const AppointmentOption = ({selectedDate}) => {
     const [appointOption,setAppointOption] = useState([])
     
      // const {loading} = useContext(AuthContext)


     const date = format(selectedDate,'PP')
    const [treatment,setTreatment] = useState(null)
  

    // react query part 
   const {data : appointment_option = [],  refetch,isLoading} = useQuery({
    queryKey:['appointment_option', date],
    queryFn:() => fetch(`http://localhost:5000/appointment_option?date=${date}`)
    .then(res => res.json())
    .catch(error => console.log(error))
   })
   console.log(appointment_option,'appointment option ')
    if(isLoading){
      return <Loading > </Loading>
    }
 

   return (
        <section  className='mt-2 '>
          <div className='text-center text-secondary text-2xl font-bold'>
      <p>Available Appointments on : {format(selectedDate,"PP")} </p>
    </div>
              <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 px-6 mt-6'>
            {
               appointment_option.map(data => <AppointmentOptionCard key={data._id}
                     data = {data} 
                     setTreatment = {setTreatment}
                     > 
                     
                </AppointmentOptionCard> )
            }
            
        </div>
        {treatment && 
         <BookingAppointmentModal treatment = {treatment} selectedDate = {selectedDate} setTreatment = {setTreatment} refetch = {refetch} > 
         
         </BookingAppointmentModal>

        }
        </section>
    
    );
};

export default AppointmentOption;
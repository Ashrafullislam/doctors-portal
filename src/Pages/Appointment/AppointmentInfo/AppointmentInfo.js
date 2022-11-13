import React from 'react';
import AppointmentInfoCard from './AppointmentInfoCard';

const AppointmentInfo = () => {

    const appointmentData = [

        {   _id: 1,
            title:'Teeth Orthodontics',
            openTime:'8:00 AM - 9:00 AM',
            token:'10 SPACES AVAILABLE',
        },
        {
            _id: 2,
            title:'Cosmetic Dentistry',
            openTime:'10:05 am - 11:30 am',
            token:'10 SPACES AVAILABLE',
        },
        {
            _id: 3,
            title:'Teeth Cleaning',
            openTime:'10:05 am - 11:30 am',
            token:'10 SPACES AVAILABLE',
        },
        {
            _id: 4,
            title:'Teeth Orthodontics',
            openTime:'10:05 am - 11:30 am',
            token:'10 SPACES AVAILABLE',
        },
        {
            _id: 5,
            title:'Teeth Orthodontics',
            openTime:'10:05 am - 11:30 am',
            token:'10 SPACES AVAILABLE',
        }
        ,
        {
            _id: 6,
            title:'Teeth Orthodontics',
            openTime:'10:05 am - 11:30 am',
            token:'10 SPACES AVAILABLE',
        }

    ]

    
    return (
        <section  className='mt-10'>
              <div className='grid lg:grid-cols-3 gap-6 px-6'>
            {
                appointmentData.map(data => <AppointmentInfoCard key={data._id}
                     data = {data} > 
                     
                </AppointmentInfoCard> )
            }
            
        </div>
        </section>
    
    );
};

export default AppointmentInfo;
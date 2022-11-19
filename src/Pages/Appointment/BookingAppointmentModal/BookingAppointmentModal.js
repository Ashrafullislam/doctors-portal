import { format } from 'date-fns';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../AuthProvider/AuthProvider';

const BookingAppointmentModal = ({treatment, selectedDate,setTreatment,refetch}) => {
  const {name, slots} = treatment; // treatment is the name of  Appointment name,option and slots
  const date = format(selectedDate, "PP") ;
  const {user} = useContext(AuthContext)
  const [error , setError] = useState('')
  const appointmentHandlar = (event) => {
    event.preventDefault()
    const form = event.target ;
    const appointment = form.appoint_name.value ;
    const date = form.date.value ;
    const name = form.name.value ;
    const slot = form.slot.value;
    const email = form.email.value ;
    const phone = form.phone.value ;
    if(phone.length < 11 ){
      setError('Phone number must be given atleast 11 characters')
      return ;
    }
    // make an object to send data in data base 
    const booking = {
       appointmentName: appointment ,
        paitentName:name ,
        appointment_date:date ,
        slots:slot,
        email,
        phone,
     
    }
    
    // send data in server  by post method and using fetch url ,where send data 
    fetch('http://localhost:5000/bookings',{
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(booking)
      
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      if(data.acknowledged){
        setTreatment(null)
        toast.success('Booking confirmd ')
        refetch()
      }
      
    })
 

    console.log(booking)
    // when booking was successfully has been compleated show the success toast 
  }
  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-xl font-bold">
          Treatment name:  {name}
          </h3>
          <p className="py-4">
            <form onSubmit={appointmentHandlar} className="flex  flex-col items-center leading-4	 ">
              <input
                type="text"
                name='appoint_name'
                placeholder="Appointment name"
                defaultValue={name}
                className="input bg-slate-200 input-bordered w-full max-w-xs"
              />
              <br />

              <input
                type="text"
                name='date'
                placeholder="Appointment Date"
                defaultValue={date}
                className="input bg-slate-200 input-bordered w-full max-w-xs"
              />
              <br />


              <select className="select select-primary w-full max-w-xs" name='slot' >
                {
                    slots.map( (slot , i) => <option key={i} > {slot} </option> )
                }
                
              </select>

              <br />
              <input
                type="text"
                name='name'
                defaultValue={user?.displayName}
                readOnly
                placeholder="Enter your full name "
                required
                className="input input-bordered input-accent w-full max-w-xs"
              />
              <br />
              <input
                type="email"
                name="email"
                defaultValue={user?.email}
                placeholder="Enter your email "
                readOnly
                className="input input-bordered input-accent w-full max-w-xs"
                required
              />
              <br />
              <input
                type="number"
                name='phone'
                placeholder="Enter your phone number "
                required
                className="input input-bordered input-accent w-full max-w-xs"
              />
              {error && <p className='text-red-500'> {error} </p>}
              <br />
              <input
                type="submit"
                value={'Submit '}
                className="btn bg-accent w-full max-w-xs"
              />
            </form>
          </p>
        </div>
      </div>
    </div>
  );
};

export default BookingAppointmentModal;

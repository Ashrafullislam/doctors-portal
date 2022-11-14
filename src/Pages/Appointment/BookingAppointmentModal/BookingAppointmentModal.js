import { format } from 'date-fns';
import React from 'react';

const BookingAppointmentModal = ({treatment, selectedDate}) => {
  const {name, slots} = treatment; // treatment is the name of  Appointment name,option and slots
  const date = format(selectedDate, "PP") ;

  const appointmentHandlar = (event) => {
    event.preventDefault()
    const form = event.target ;
    const appointment = form.appoint_name.value ;
    const date = form.date.value ;
    const name = form.name.value ;
    const email = form.email.value ;
    const phone = form.phone.value ;
    console.log(appointment,date,name,email,phone)
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
            {name}
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


              <select className="select select-primary w-full max-w-xs">
                {
                    slots.map( (slot , i) => <option key={i} > {slot} </option> )
                }
                
              </select>

              <br />
              <input
                type="text"
                name='name'
                email
                placeholder="Enter your full name "
                required
                className="input input-bordered input-accent w-full max-w-xs"
              />
              <br />
              <input
                type="email"
                name="email"
                placeholder="Enter your email "
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

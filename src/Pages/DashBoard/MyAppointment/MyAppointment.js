import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import Loading from '../../Shared/Loading/Loading';
import './MyAppointment.css';
const MyAppointment = () => {
 const {user} = useContext(AuthContext);

 const url = `http://localhost:5000/bookings?email=${user?.email}`;
 const {data:bookings = []  , isLoading } = useQuery({
    queryKey: ['bookings', user?.email],
    queryFn: async ()=> {
        // now get token  from localstorage 
      const res = await fetch(url, 
        {
        headers: {
            authorization: `bearer ${localStorage.getItem('accessToken')}`
        }
      } 
      );
      const data = await res.json();
      return data ;  
    }

 })
 if(isLoading){
    return <Loading > </Loading>
 }
 console.log(bookings,'see bookings')


return (
<div>
  <h3 className="text-3xl"> My Appointment</h3>
 <div>
   <div className="overflow-x-auto mt-5">
     <table className="table w-full">

        <thead className=''>
        <tr className='head-tr'>
            <th></th>
            <th>Paitent Name</th>
            <th> Treatment Name </th>
            <th> Date </th>
            <th> Appointment Time </th>
        </tr>
        </thead>
        <tbody>
         { bookings?
            bookings?.map((booking ,i) =>   
            <tr key={booking._id}>
                <th> {i+1} </th>
                <td> {booking.paitentName} </td>
                <td> {booking.appointmentName}  </td>
                <td> {booking.appointment_date} </td>
                <td> {booking.slots} </td>
            </tr> )
            :
            ''

       }
        
        
        </tbody>
       </table>

      </div>
     </div>
    </div>

    );
};

export default MyAppointment;
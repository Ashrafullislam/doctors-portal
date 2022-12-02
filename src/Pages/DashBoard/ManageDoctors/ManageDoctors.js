import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import Loading from '../../Shared/Loading/Loading';
import DeleteDoctorModal from './DeleteDoctorModal/DeleteDoctorModal';

const ManageDoctors = () => {
  const [doctor,setDoctor] = useState(null)
  const {data:doctors,isLoading} = useQuery({
    queryKey:['doctors'],
    queryFn: async () => {
    const res = await fetch('http://localhost:5000/doctors')
    const data = res.json()
    return data ;
    }

  })
  
  console.log(doctors,'doctors ')
  if(isLoading){
    return <Loading > </Loading>
  }

  // make an delete handlar to set data 
  const deleteDoctorHandlar = doctor => {
    setDoctor(doctor)
  }
console.log(doctor)
    return (
        <div>
            <h2 className='text-2xl font-bold'> Manage Doctors {doctors.length}  </h2>
            <div>
   <div className="overflow-x-auto mt-5">
     <table className="table w-full">

        <thead className=''>
        <tr className='head-tr'>
            <th>SI:</th>
            <th> Image </th>
            <th>  Name </th>
            <th>  Speciality </th>
            <th>  Email </th>
            <th> Added Date </th>
            <th> Delete </th>
        </tr>
        </thead>
        <tbody>
         { doctors&&
          
              doctors?.map((doctor ,i) =>   
            <tr key={doctor._id}>
                <th> {i+1} </th>
                <td> <img src={doctor.image} className='w-20 h-20 rounded-full' alt='' /> </td>
                <td> {doctor.name}  </td>
                <td> {doctor.specialty} </td>
                <td> {doctor.email} </td>
                <td> {doctor.email} </td>
                <td > <label htmlFor="deleteDoctor-modal" className="btn bg-red-500 btn-sm text-white" onClick={()=>deleteDoctorHandlar(doctor) }> Delete </label> </td>
               
            </tr> )
                    
            
        }
        
        </tbody>
       </table>

      </div>
      <div>
        {
          doctor&& 
          <DeleteDoctorModal
          title={doctor?.name}
          message={`Are you sure you want to delete ${doctor?.name} ? .If you delete the doctors then you will could not recover ${doctor?.name} data  `}
           doctor={doctor} setDoctor={setDoctor}

        >
           </DeleteDoctorModal>
        }
        
      </div>
       </div>

        </div>
    );
};

export default ManageDoctors;
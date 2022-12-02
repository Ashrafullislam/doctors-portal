import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loading from '../../Shared/Loading/Loading';

const ManageDoctors = () => {

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

    return (
        <div>
            <h2 className='text-2xl font-bold'> Manage Doctors {doctors.length}  </h2>
            <div>
   <div className="overflow-x-auto mt-5">
     <table className="table w-full">

        <thead className=''>
        <tr className='head-tr'>
            <th></th>
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
                <td> <button  className='btn bg-red-500 btn-sm text-white' > Delete </button> </td>
            </tr> )
                    
            
        }
        
        
        </tbody>
       </table>

      </div>
       </div>
        </div>
    );
};

export default ManageDoctors;
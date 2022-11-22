import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

const AllUsers = () => {
    // make react-query function  to get all users 
    const {data:users = [],refetch} = useQuery({
        queryKey: ['users'],
        queryFn: async ()  =>  {
            const res = await fetch('http://localhost:5000/users');
            const data = await  res.json()
            return data ;
        }
    })

    // make admin handlar 
    const handleMakeAdmin = _id => {
      fetch(`http://localhost:5000/users/admin/${_id}`, {
        method:'PUT',
        // get token from local storage 
        headers: {
          authorization: `bearer ${localStorage.getItem('accessToken')}`
        }
      })
      .then(res =>  res.json())
      .then(data => {
        if( data.modifiedCount >  0){
          toast.success('Admin created successfull')
          refetch()

        }
        console.log(data)
      })
      .catch(err => console.log(err))
    }

    return (
   <div>
            <h2 className='my-3'> All users </h2>
            <div className="overflow-x-auto">
  <table className="table w-full">

    <thead>
      <tr className='head-tr'>
        <th>SI </th>
        <th>Name</th>
        <th> Email </th>
        <th> Admin </th>
        <th> Delete </th>
      </tr>
    </thead>
    <tbody>
      
     {
      users.map((user, i) => 
    
        <tr key={user._id}>
        <td> {i+1} </td>
        <td> {user.name} </td>
        <td> {user.email} </td>
        {/* if  user.role  === admin ? .then hide admin button and create admin */}
        <td>{  user?.role !== 'admin' &&
          <button onClick={()=>handleMakeAdmin(user._id)} className='btn btn-xs btn-secondary' > Make Admin </button>
          }  </td>

        <td> <button className=' btn btn-xs bg-red-500'> Delete  </button> </td>
      </tr>

         )
     }
    
    </tbody>
  </table>
</div>
        </div>
    );
};

export default AllUsers;
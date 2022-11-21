import { useQuery } from '@tanstack/react-query';
import React from 'react';

const AllUsers = () => {
    // make react-query function  to get all users 
    const {data:users = []} = useQuery({
        queryKey: ['users'],
        queryFn: async ()  =>  {
            const res = await fetch('http://localhost:5000/users');
            const data = await  res.json()
            return data ;
        }
    })
    console.log(users)
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
        <tr>
        <td> {i+1} </td>
        <td> {user.name} </td>
        <td> {user.email} </td>
        <td> <button className='btn btn-xs btn-secondary' > Make Admin </button> </td>
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
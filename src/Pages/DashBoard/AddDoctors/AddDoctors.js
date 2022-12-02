import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';

const AddDoctors = () => {
    const {register,formState:{errors}, handleSubmit} = useForm ();
    const [err, setErr] = useState('')
    const [success,setSuccess] = useState('')
    const navigate = useNavigate()
    const imageHostKey = process.env.REACT_APP_imgbb_key;
    // console.log(imageHostKey,'image host key')
  // load data from database using react query 
  const {data:specialties , isLoading} = useQuery({
    queryKey:['specialty'],
    queryFn: async () => {
    const res =  await fetch ('http://localhost:5000/doctorSpecialty')
    const data = res.json() ;
    return data ;

    }

  })

  if(isLoading){
    return <Loading > </Loading>
  }
      
 const handleAddDoctor = data => {
 const image = data.image[0];
 const formData = new FormData();
 formData.append('image',image);
 // upload photo in imgbb to get url and host  the image 
 const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
 fetch(url, {
  method:'POST',
  body: formData
 })
 .then(res => res.json())
  .then(imgData => {
    if(imgData.success){
      console.log(imgData.data.url )
      
      const doctor = {
        name:data.name ,
        email:data.email,
        specialty:data.specialty,
        image:imgData.data.url
      }
      // save doctor data in data base using post method 
      fetch('http://localhost:5000/doctor',{
        method: 'POST',
        headers:{
          'content-type':'application/json',
          authorization: `bearer ${localStorage.getItem('accessToken')}`
        },
        body:JSON.stringify(doctor)
      })
      .then(res => res.json())
      .then(result => {
        console.log(result)
        toast.success(`${data.name} is added successfully ` )
        navigate('/dashboard/managedoctors')
      })
      .catch(err => console.log(err,'doctor add page '))
      
    }
  })
 }

 return (

 <div className='bg-slate-100 px-20 pb-20 '>
  <h2 className='text-3xl mb-4 pt-5'> Add A New Doctor </h2>

<div className=' bg-white w-3/4 rounded-md '>
<form onSubmit={handleSubmit(handleAddDoctor) } className = 'ml-6 mr-6  pt-6 pb-12' > 

<label className="label"> <span className="mt-4 pl-2"> Name </span> </label>
<input placeholder='Enter your name' type="text" {...register ("name",{required: "Name is required"})}
 className="input input-bordered w-full"/>
 {errors.name && <p role='alert' className='text-red-600'> {errors.name.message}  </p>}
 
<label className="label"> <span className="mt-5 pl-2"> Email </span> </label>
<input placeholder='Enter your email ' type="email" {...register ('email',{required:"Email is required "})} className="input input-bordered w-full "/>
{errors.email && <p role="alert" className='text-red-600'> {errors.email.message} </p> }
 
<div className="form-control w-full mt-5">
  <label className="label">
    <span className="pl-2"> Speciality </span>
  </label>
  <select     {...register('specialty')}

   className="select select-bordered">
    {
      specialties.map(specialty =>    
         <option
         key={specialty._id} value = {specialty.name}
         > {specialty.name} </option>
      )
    }
   
  </select>

 </div>

 <label className="label"> <span className="mt-5 pl-2"> Upload photo </span> </label>
<input placeholder='Upload your photo  ' type="file" {...register ('image',{required:"Photo is required "})} className="input input-bordered w-full "/>
{errors.image && <p role="alert" className='text-red-600'> {errors.image.message} </p> }
 

 {
  err && <p className='text-red-500'> {err} </p>
 }
 {
  success && <p className='text-green-500'> {success} </p>
 }
<input type="Submit"  value={'Add  '}className="btn bg-accent w-full mt-5" />



   </form>
 </div>

</div>

  );
};

export default AddDoctors;
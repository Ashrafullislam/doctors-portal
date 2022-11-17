import { GoogleAuthProvider } from 'firebase/auth';
import React, {useContext, useState} from 'react';
import {useForm} from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import toast from 'react-hot-toast'
const LogInForm = () => {
    const {LogInUser,LogInGoogle} = useContext(AuthContext ); 
    const provider = new GoogleAuthProvider();
    const [err, setErr] = useState('')
    const [success,setSuccess] = useState('')
    const location = useLocation()
    const navigate = useNavigate ()
    const from  = location.state?.from?.pathname  || "/"

  // source from react-form-hook
  const handleLogin = (data, e) => {
  
    setSuccess('')
   console.log(data )
    LogInUser(data.email, data.password)
    .then(result => {
      const  userResult = result.user ;
      setErr('')
      e.target.reset()
      setSuccess("User login successfull ")
      navigate( from ,{replace:true});
      console.log(userResult)
    })
    .catch(err  => {
      const error = err.message ;
      console.log(error)
      setErr(error)
      setSuccess('')
    })
  }


  // google login handlar 
  const GoogleLogIn = () =>  {
     LogInGoogle(provider)

  }
  
  const {register,formState:{errors}, handleSubmit} = useForm ();
  return (
    <div  className=' lg:w-96 mx-auto w-11/12 py-6 px-8 shadow-lg  mt-4'>
        <h2 className='text-2xl font-normal text-center mb-6'> Log in  </h2>
      <form onSubmit={handleSubmit(handleLogin) } > 

        <label className="label"> <span className=""> Email </span> </label>
        <input  type="email" {...register ("email",{required: "Email address is requerd"})}
         className="input input-bordered w-full "/>
         {errors.email && <p role='alert' className='text-red-600'> {errors.email.message}  </p>}
         
        <label className="label"> <span className=""> Password </span> </label>
        <input  type="password" {...register ('password',{required:"Password is requerd"})} className="input input-bordered w-full "/>
        {errors.password && <p role="alert" className='text-red-600'> {errors.password.message} </p> }
         
        {
          err && <p className='text-red-500'> {err} </p>
        }
        {
          success && <p className='text-green-500'> {success} </p>
        }
        <label className="label"> <span className=""> Forget Password ? </span> </label>
        <input type="Submit"  value={'Log in '}className="btn bg-accent w-full" />
        <p className='mt-2'> New to Doctors Portal ? <Link to='/signup' className='text-secondary' > Create  new account  </Link> </p>
        <div className="divider ">OR</div>
      
      <button onClick={GoogleLogIn} className='btn border-slate-900 bordered btn-outline text-accent    w-full ' > Continue with google </button>


      </form>
    </div>
  );
};

export default LogInForm;

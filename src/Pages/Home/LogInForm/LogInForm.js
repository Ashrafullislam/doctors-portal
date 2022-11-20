import { GoogleAuthProvider } from 'firebase/auth';
import React, {useContext, useState} from 'react';
import {useForm} from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import toast from 'react-hot-toast'
const LogInForm = () => {
    const {LogInUser,LogInGoogle,loading} = useContext(AuthContext ); 
    const provider = new GoogleAuthProvider();
    const {user} = useContext(AuthContext)
    const [err, setErr] = useState('')
    const [success,setSuccess] = useState('')
    const location = useLocation()
    const navigate = useNavigate ()
    const from  = location.state?.from?.pathname || "/"
   console.log(from,'form')
  
  // source from react-form-hook
  const handleLogin = (data, e) => {
 
    setSuccess('')
    LogInUser(data.email, data.password)
    .then(result => {
      const  userResult = result.user ;
      console.log(userResult)

     //  verified user only able to log in 
      // if(!userResult.emailVerified){
      //    toast.error(" Please verify your email  ")
      //    return ;
      // }

      setSuccess("User login successfull ")
      getUserToken(data.email)
      setErr('')
    
      e.target.reset()
       
    })
    .catch(err  => {
      const error = err.message ;
      setErr(error)
      setSuccess('')
    })
  }
   
  // token create and veriy jwt token to access user 
      // get access token from server site 
      const getUserToken = (email) => {
        fetch(`http://localhost:5000/jwt?email=${email}`)
        .then(res =>  res.json())
         .then(data => {
            if(data.accessToken){
                localStorage.setItem('accessToken', data.accessToken)
                navigate( from ,{replace:true});

            }
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

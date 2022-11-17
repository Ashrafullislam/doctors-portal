import Aos from 'aos';
import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

 const SignUpForm = () => {

    const {user,CreateUser,LogInGoogle} = useContext(AuthContext)
    const googleProvider = new GoogleAuthProvider() ;
    let [error,setError] = useState(null)
    const [signUpError , setSignUpError] = useState('')

    const {register, reset,formState:{errors}, handleSubmit} = useForm ();

    const handleSignUp = (data,e) => {
        
    CreateUser(data.email, data.password)
 
    .then(result => {
       const  userResult = result.user ;
       console.log(userResult)
        alert("User create successfull")
        e.target.reset()
    })
    .catch(error => { 
        const err = error.message ;
        console.log(err)
        setSignUpError(err)
    })

  }


    const GoogleLogIn = () => {
        LogInGoogle(googleProvider)
        .then(result => {
            const userResult = result.user ;
            alert(" Google Log in successfull ")
        })
        .catch(err => {
            const error = err.message ;
            console.log(error)
            setSignUpError(error)
           
        })
    }
 

    useEffect(()=> { 
    Aos.init({duration:'1500'})
    },[])

    return (
        <div className=' lg:w-96 w-11/12 mx-auto  py-5 px-8  mb-5 shadow-lg  mt-3 '>
               <h2 className='text-2xl font-normal text-center mb-6'> Sign up  </h2>
      <form onSubmit={handleSubmit(handleSignUp) } > 

      <label className="label"> <span className="">  Name </span> </label>
        <input  type="text" {...register ("name",{required: "Name  is requerd"})}
         className="input input-bordered w-full "/>
         {errors.name && <p role='alert' className='text-red-600'> {errors.name.message}  </p>}
         

        <label className="label"> <span className=""> Email </span> </label>
        <input  type="email" {...register ("email",{required: "Email address is requerd"})}
         className="input input-bordered w-full "/>
         {errors.email && <p role='alert' className='text-red-600'> {errors.email.message}  </p>}
         
        <label className="label"> <span className=""> Password </span> </label>
        <input  type="password" {...register ('password',{required:"Password is requierd",
         minLength:{value:6, message:'Password should atleast 6 characters'}, })} className="input input-bordered w-full "/> 
        {errors.password && <p role="alert" className='text-red-600'> {errors?.password.message}
        </p> }
         {
            signUpError && <p className='text-red-600'> {signUpError} </p>
         }
        <input type="Submit"  value={'Sign up '}className="btn bg-accent mt-4 w-full" />
        <p className='my-2'> Already have an account ? <Link to='/loginform' className='text-secondary  ' >Log in  here  </Link> </p>
        <div className="divider ">OR</div>
      
       <button onClick={GoogleLogIn} className='btn border-slate-900 bordered btn-outline text-accent    w-full ' > Continue with google </button>

      </form>
          
        </div>
    );
};


export default SignUpForm ;

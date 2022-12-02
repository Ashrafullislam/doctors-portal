import Aos from 'aos';
import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import toast from 'react-hot-toast';
import useToken from '../../hooks/useToken';

 const SignUpForm = () => {
    const {user,CreateUser,LogInGoogle,updateUser,userVerify} = useContext(AuthContext)
    const googleProvider = new GoogleAuthProvider() ;
    let [error,setError] = useState(null)
    const [signUpError , setSignUpError] = useState('')
    const navigate = useNavigate()
    const {register, formState:{errors}, handleSubmit} = useForm ();
    // useToken part 
    const [createdUserEmail,setCreatedUserEmail] = useState('')
    const [token] = useToken(createdUserEmail)
  
    if(token){
        navigate('/')
    }
  // %%%%%%   handle sign up form  %%%%%%%%% 
    const handleSignUp = (data,e) => { 
    CreateUser(data.email, data.password)
 
    .then(result => {
       const  userResult = result.user ;
       toast.success('User create successfull,Please check your inbox  spam folder to verify email ')
        const userInfo = { displayName:data.name,}
        updateUser(userInfo)
        .then(()=> { 
            // save user function call for created user data save in  database
              saveUser(data.name, data.email)
            
        })
        .catch (err => { console.log(err.message)  } )
        e.target.reset()
        // user verify with  email send from firebase 
        userVerify(user)
    })
    .catch(error => { 
        const err = error.message ;
        console.log(err)
        setSignUpError(err)
    })

// make a function to save user info in database 
    const saveUser = (name,email) => {
        const user = {name,email};
        fetch(`http://localhost:5000/users`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body:JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            console.log('save  user ',data)
            if(data.acknowledged){
                setCreatedUserEmail(email)
            }                

        })
    } 

  }

  
// user Sign up  by google 
     const GoogleLogIn = () => {
        LogInGoogle(googleProvider)
        .then(result => {
            const userResult = result.user ;
            const email = userResult.email;
            const name = userResult.displayName;
            googleSaveUser(name,email)
            toast.success(" Google Log in successfull ")
        })
        .catch(err => {
            const error = err.message ;
            console.log(error)
            setSignUpError(error)
           
        })

     // make a function to save user info in database and get create token 
    const googleSaveUser = (name,email) => {
        const user = {name,email};
        fetch(`http://localhost:5000/users`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body:JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            console.log('save  user ',data)
            if(data.acknowledged){
                setCreatedUserEmail(email)
            }                

        })
     }

    }
 

  // its usses for animation 
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

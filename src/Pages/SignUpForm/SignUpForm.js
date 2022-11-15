import Aos from 'aos';
import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

 const SignUpForm = () => {

    const {user,CreateUser,LogInGoogle} = useContext(AuthContext)
    const googleProvider = new GoogleAuthProvider() ;
    let [error,setError] = useState(null)
  

    // make an login form handlar and apply the user 
    const RegisterFormHandlar = (event ) => {
        event.preventDefault()
        const form = event.target;
        const firstName = form.firstName.value ;
        const lastName = form.lastName.value ;
        const email = form.email.value ;
        const password = form.password.value ; {
        const confirm = form.confirm.value ;

        if(password !== confirm){
            alert(`Password and Confirm password didn't match `)
            return ;
        }
        console.log(email,password,firstName,lastName)
        setError(null)
        CreateUser(email,password)
        .then(result => {
            const userResult = result.user ;
            form.reset()
            alert('User log in successfull')
            setError(null)
            console.log(userResult)
        })
        .catch(err => {
            const error = err.message ;
            setError(error)
           
            console.log(error,'log in user ')

        })

    }
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
           
        })
    }
    useEffect(()=> { 
    Aos.init({duration:'1500'})
    },[])

    return (
        <div className=' lg:w-96 w-11/12 mx-auto  py-5  mb-5 shadow-lg  mt-3 '>
                <form onSubmit={RegisterFormHandlar} className="flex mx-8 px-5 py-10  login-form flex-col items-center leading-4	 ">
            
            <h2 className='text-3xl font-semibold  py-4' data-aos="fade-down"> Please Register now   </h2>
            <input
                type="text"
                name='firstName'
                placeholder="Enter your First Name "
                required
                className="input input-accent input-bordered  w-full "
                 data-aos='fade-right'
              />
              <br />

              <input
                type="text"
                name='lastName'
                placeholder="Enter your last name "
                className="input input-accent input-bordered w-full "
                data-aos='fade-left'

              />
              <br />

              <input
                type="email"
                name='email'
                placeholder="Enter your email "
                required
                className="input input-accent input-bordered w-full "
                data-aos='fade-right'

              />
              <br />
              <input
                type="password"
                name="password"
                placeholder="Enter your password  "
                className="input input-accent input-bordered  w-full "
                required
                data-aos='fade-left'

              />
              <br />
              <input
                type="password"
                name="confirm"
                placeholder="Confirm password  "
                className="input input-accent input-bordered  w-full "
                required
                data-aos='fade-right'

              />
              <br />

             {
                error && <span className='text-red-600 mb-2'> {error} </span>
             }
              <input
                type="Submit"
                value={'Sign up '}
                className="btn bg-accent w-full"
                data-aos="fade-left"
              />
               <p className='text-lg my-3 '> Or </p>
               <button onClick={GoogleLogIn} className='btn btn-accent  w-full  text-white' 
                  data-aos='fade-right'
                  >Continue with google </button>
               <br  />
               <p> You have already an account ? <Link to='/login' className='text-blue-600' > Log in   </Link> </p>
            </form>
        </div>
    );
};


export default SignUpForm ;


import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Login = () => {
    const {user,LogInUser,LogInGoogle} = useContext(AuthContext)
    const googleProvider = new GoogleAuthProvider() ;
    const [error,setError] = useState(null)

    // make an login form handlar and apply the user 
    const LogInFormHandlar = (event ) => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value ;
        const password = form.password.value ; 
        console.log(email,password)
        setError(null)
        LogInUser(email,password)
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
    const GoogleLogIn = () => {
        LogInGoogle(googleProvider)
        .then(result => {
            const userResult = result.user ;
            alert(" Google Log in successfull ")
        })
        .catch(err => {
            const error = err.message ;
            console.log(error)
            setError(error)
        })
    }
  

    return (
        <div className=' lg:w-96 mx-auto w-11/12 py-6  shadow-lg  mt-4 '>
          
            <form onSubmit={LogInFormHandlar} className="flex mx-8 px-5 py-10    login-form flex-col items-center leading-4	 ">
            
            <h2 className='text-3xl font-semibold  py-4'> Log  in now  </h2>
              <input
                type="email"
                name='email'
                placeholder="Enter your email "
                required
                className="input input-accent input-bordered w-full "
              />
              <br />
              <input
                type="password"
                name="password"
                placeholder="Enter your password  "
                className="input input-accent input-bordered  w-full "
                required
              />
              <br />
             {
                error && <span className='text-red-600 mb-2'> {error} </span>
             }
              <input
                type="Submit"
                value={'Log in '}
                className="btn bg-accent w-full"
              />
               <p className='text-lg my-3 '> Or </p>
               <button onClick={GoogleLogIn} className='btn btn-accent  w-full  text-white' > Continue with google </button>
               <br  />
               <p> You have no account ? <Link to='/signup' className='text-blue-600' > Register Now  </Link> </p>
            </form>
        </div>
    );
};

export default Login;
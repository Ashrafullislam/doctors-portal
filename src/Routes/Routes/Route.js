import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../../Layout/Main';
import Appointment from '../../Pages/Appointment/Apointments/Appointment';
import Home from '../../Pages/Home/Home/Home';
import LogInForm from '../../Pages/Home/LogInForm/LogInForm';
import SignUpForm from '../../Pages/SignUpForm/SignUpForm';

  const router = createBrowserRouter ([
    {
        path: '/', element: <Main  > </Main>,
        children: [
            {
                path: '/', element: <Home > </Home>
            },
            {
                path: '/home'  , element: <Home > </Home>
            },
            {
                path: '/appointment' , element: <Appointment > </Appointment>
            },
           
            {
                path: '/loginform' , element: <LogInForm > </LogInForm>
            },
            {
              path:'/signup', element: <SignUpForm > </SignUpForm>
            },
            {
                path: '*'  , element: <div> Oh sorry !  Routes not found  </div>
            }
        ]
    }
  ])

  export default router ;
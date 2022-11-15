import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../../Layout/Main';
import Appointment from '../../Pages/Appointment/Apointments/Appointment';
import Home from '../../Pages/Home/Home/Home';
import Login from '../../Pages/Login/Login';
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
                path: '/login' , element: <Login > </Login>
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
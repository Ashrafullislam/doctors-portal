import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import DashBoardLayout from '../../Layout/DashBoardLayout/DashBoardLayout';
import Main from '../../Layout/Main';
import About from '../../Pages/About/About/About';
import Appointment from '../../Pages/Appointment/Apointments/Appointment';
import MyAppointment from '../../Pages/DashBoard/MyAppointment/MyAppointment';
import Home from '../../Pages/Home/Home/Home';
import LogInForm from '../../Pages/Home/LogInForm/LogInForm';
import SignUpForm from '../../Pages/SignUpForm/SignUpForm';
import PrivetRoute from '../PrivetRoute/PrivetRoute';

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
               path: '/about', element: <PrivetRoute> <About > </About> </PrivetRoute>
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
    },
    {
        path:'/dashboard',  element:  <PrivetRoute> <DashBoardLayout >  </DashBoardLayout>  </PrivetRoute>,
        children: [
            {path: '/dashboard',  element: <MyAppointment > </MyAppointment> }
        ]

    }
  ])

  export default router ;
import React, { useContext } from 'react';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import AppintmentHome from '../AppintmentHome/AppintmentHome';
import Banner from '../Banner/Banner';
import ContactUs from '../ContactUs/ContactUs';
import DentalCare from '../DentalCare/DentalCare';
import Info from '../Info/Info';
import OurServices from '../OurServices/OurServices';
import PaitentReviews from '../PaitentReview/PaitentReviews';

const Home = () => {
  
    return (
        <div className='mx-5'>
            <Banner > </Banner>
             <Info > </Info>
             <OurServices > </OurServices>
             <DentalCare > </DentalCare>
             <AppintmentHome > </AppintmentHome>
             <PaitentReviews >  </PaitentReviews>
             <ContactUs > </ContactUs>
        </div>
    );
};

export default Home;
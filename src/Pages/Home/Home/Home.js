import React from 'react';
import AppintmentHome from '../AppintmentHome/AppintmentHome';
import Banner from '../Banner/Banner';
import ConnectedUs from '../ConnectedUs/ConnectedUs';
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
             <ConnectedUs > </ConnectedUs>
        </div>
    );
};

export default Home;
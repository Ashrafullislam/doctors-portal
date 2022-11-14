import React from 'react';
import Flouride from '../../../assets/images/fluoride.png'
import Cavity from '../../../assets/images/cavity.png'
import Teeth from '../../../assets/images/whitening.png'
import OurServiceCard from './OurServiceCard';


const OurServices = () => {

const ourservie = [
    {
        id: 1 ,
        title: 'Fluoride Treatment',
        description: 'Fluoride varnish can be applied to both baby teeth and adult teeth by a dentist. The process involves painting a varnish containing high levels of fluoride onto the surface of the tooth twice a year to prevent decay. ',
        serviceImg: Flouride,
        bgColor: 'bg-gradient-to-r from-primary to-secondary'
    },
    {
        id: 2 ,
        title: 'Cavity Filling ',
        description: 'Confident Smiles Through Dental Filling. Are your teeth unevenly spaced, irregular, or crowded together? Are they ground down, chipped, or cracked?',
        serviceImg: Cavity,
        bgColor: 'bg-gradient-to-r from-primary to-secondary'
    },
    {
        id: 3 ,
        title: 'Teeth Whitening ',
        description: 'We are providing best service for whitenning your teeth . If you want whiter teeth that will last longer, you should stay away from stain-causing foods like coffee and other bad habits like smoking . Cleaning your teeth completely is essential for avoiding stains from forming. ',
        serviceImg: Teeth,
        bgColor: 'bg-gradient-to-r from-primary to-secondary'
    }
]
    return (
        <div>
            <h2 className='text-primary text-center  ' > Our Services </h2>
            <h2 className='text-4xl font-semibold text-center'> Services We Provide </h2>
            <div className='mt-10 grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 gap-y-6 gap-x-5 justify-items-center justify-center'>
                {
                    ourservie.map(service => <OurServiceCard key={service.id} service = {service} > </OurServiceCard>)
                }
            </div>
        </div>
    );
};

export default OurServices;
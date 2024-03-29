import React from 'react';
import people1 from '../../../assets/images/people1.png'
import PaitentReviewCard from './PaitentReviewCard';
import qoute from '../../../assets/icons/quote.svg'


const PaitentReviews = () => {
    const reviews = [
        {
            _id:1 ,
            name: 'Rasel ',
            location: 'Dhaka banglades',
            description: 'Dr. Brijesh patel and staff are friendly and caring professionals. He is extremely competent, meticulous, and skilled in dentistry and patient care. Over the years, I have had fillings, crowns and cleanings. All done without problems or stress. This includes work done for my mother and cousin’s wife ',
            paitentImg: people1,

        },
        {
            _id:2 ,
            name: ' Payel Shah  ',
            location: 'Sylhet ,  Zindabazar',
            description: 'I recommend this dental place to everyone in need of any dental procedure Dr Brijesh delivers a level of care and expertise that seldom coexists. he is a perfectionist who makes you feel more like a relative seating in his chair than simply another patient. That why I trusted him to do extensive work in my mouth that resulted in a winning smile. ',
            paitentImg: 'https://www.brijdentalclinic.com/wp-content/uploads/2018/06/Payal-Shah-150x150-60x60.jpg',

        },
        {
            _id:3 ,
            name: '	Richa Vasant',
            location: 'Uttora,Dhaka banglades',
            description: ' Recently I met with an accident and got my tooth fractured.I went to many hospitals to retain my original teeth but got a negative solution.Then I came to know about Brij dental clinic and met Dr.Brijesh S Patel who has 10 + year’s experience in dentistry.He is so caring and explained me the clear solution for my complete dental problem ',
            paitentImg: 'https://www.brijdentalclinic.com/wp-content/uploads/2018/06/Richa-Vasant-150x150-60x60.jpg',

        }
     

    ]
   
    return (
        <section className='mt-16 ' >
            <div className='flex justify-between ' >
              <div className='flex flex-col justify-center'>
               <p className='text-xl font-bold text-secondary ml-3 '> Testimonial </p>
                <h2 className=' text-4xl mt-2 ml-3' data-aos='flip-right' > What Our Patients Says </h2>
              </div>
              <div className='flex justify-end'>
                <img  src={qoute} alt='qoute ' className='w-48 h-48' />
              </div>
            </div>
            <div className='mx-auto'>
               
                 <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-x-5 gap-y-10 grid-cols-1 mt-2 mx-auto'>
                    {
                        reviews.map(review => <PaitentReviewCard 
                            key={review._id} 
                            review = {review} >

                         </PaitentReviewCard>)
                    }
                 </div>
            </div>
            
        </section>
    );
};

export default PaitentReviews;
import Aos from 'aos';
import React, { useEffect } from 'react';
import clock from '../../../assets/icons/clock.svg'
import marker from '../../../assets/icons/marker.svg'
import phone from '../../../assets/icons/phone.svg'

const Info = () => {
  useEffect(()=> {
    Aos.init({duration:'1500'})
  },[])
    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 my-20 gap-5'>
          <div className='flex bg-primary lg:flex-row md:flex-row  items-center flex-col justify-center sm:px-3 py-10 text-white rounded-lg' data-aos="fade-right">
            <div className='mr-4'>
                <img src={clock} alt='clock  img '  className='w-16 h-16' />
              </div>
              <div>
               <h2  className='text-xl  font-semibold'> Openning Hours </h2>
                <p> Saturday to Thursday 9 am to 4pm </p>
            </div>
          </div>

          <div className='flex lg:flex-row md:flex-row  items-center  flex-col sm:px-3 justify-center bg-accent text-white py-10 rounded-lg' data-aos="fade-up" >
            <div className=' mr-4'>
                <img src={marker} alt='location marker img '  className='w-16 h-16' />
              </div>
              <div>
               <h2  className='text-xl  font-semibold'> Visit Our Location   </h2>
                <p> Habiganj sadar, Sylhet, Bangladesh  </p>
            </div>
          </div>
          
          <div className='flex bg-secondary lg:flex-row md:flex-row sm:px-3 items-center flex-col justify-center text-white py-10 rounded-lg' data-aos="fade-left" >
            <div className='mr-4'>
                <img src={phone} alt='phone  img ' className='w-16 h-16' />
              </div>
              <div>
               <h2 className='text-xl  font-semibold'> Contact Us  now   </h2>
                <p> ashrafull6252@gamil.com <br  />  017#######4 </p>
            </div>
          </div>
            
        </div>
    );
};

export default Info;
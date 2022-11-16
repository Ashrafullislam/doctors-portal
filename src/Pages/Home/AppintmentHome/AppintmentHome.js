import React, { useEffect } from 'react';
import doctor from '../../../assets/images/doctor.png'
import doctorBg from '../../../assets/images/appointment.png';
import { Link } from 'react-router-dom';
import PrimaryBtn from '../../../components/PrmaryBtn/PrimaryBtn';
import Aos from 'aos';

const AppintmentHome = () => {
  useEffect(()=> {
    Aos.init({duration:'1500'})
  },[])
  return (
    <section className='mt-10 rounded-lg  ' style={{backgroundImage:`url(${doctorBg})`}} data-aos="flip-up" >
      <div className="hero ">
  <div className="grid lg:grid-cols-2 md:grid-cols-1  grid-cols-1 justify-items-center ">
    <img src= {doctor} alt='' className="max-w-sm rounded-lg  -mt-20 lg:w-4/5 lg:block md:block hidden"  />
    <div className='lg:-w-1/2 lg:pl-0 md:pl-6 pl-6 pt-10 pb-4 pr-10 '>
        <p className='text-xl font-bold text-primary'> Appointment </p>
      <h1 className="text-4xl font-semibold text-white" data-aos="fade-left" data-aos-duration="2500" > Make an appointment Today</h1>
      <p className="py-4 text-white"> It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page </p>
      <Link> <PrimaryBtn > Get Started  </PrimaryBtn>  </Link>
    </div>
  </div>
</div>

    </section>
  );
};

export default AppintmentHome;

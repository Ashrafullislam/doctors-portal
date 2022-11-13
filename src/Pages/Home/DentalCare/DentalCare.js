import React from 'react';
import { Link } from 'react-router-dom';
import treatment from '../../../assets/images/treatment.png'
import PrimaryBtn from '../../../components/PrmaryBtn/PrimaryBtn';

const DentalCare = () => {
  return (
    <div className='mt-20 mb-20 max-w-[1200px] mx-auto ' >
     <div className="card lg:card-side bg-base-100 flex lg:justify-around justify-center items-center ">
  <figure data-aos="fade-right" ><img src={treatment} alt=" treatement img "className='lg:w-[458px] w-[60vw] sm:h-[406px]	 lg:h-[576px] rounded-lg' /></figure>
  <div className="card lg:w-[497px] sm:w-5/6	">
    <h2 className="card-title text-5xl font-bold  " data-aos="fade-up">Exceptional Dental Care, on Your Terms</h2>
    <br  /> <br  />
    <p>Click the button to listen on Spotiwhy app Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias laborum aperiam, molestias omnis sed magnam nulla voluptate? . Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit obcaecati minima accusantium recusandae dolores voluptatum aut expedita, iusto dolorum porro?<br  /> <br  />
    <Link to='/'  > <PrimaryBtn  > Get Started  </PrimaryBtn> </Link>
    </p>
    </div>
  </div>
</div>
  );
};

export default DentalCare;

import React, { useEffect } from 'react';
import chair from '../../../assets/images/chair.png';
import bgImage from '../../../assets/images/bg.png';
import './Banner.css';
import Aos from 'aos';

const Banner = () => {

    const styles = {
        header: {
          backgroundImage: `url(${bgImage})`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
 
        },
      
        content: {
          height: '100%',
          width: '100%',
                          
        }
      }
      useEffect(()=> {
        Aos.init({duration:'1000'})
      },[])
  return (
     <div style={styles.header} className = 'lg:h-[80vh]'>
      <div className="hero  text-black " style={styles.content} >
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={chair} alt="" className="lg:w-1/2 sm:w-10/12 rounded-lg shadow-2xl" data-aos="fade-up" />
          <div>
            <h1 className="text-5xl font-bold" data-aos="fade-down" > Your New Smile Starts Here</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
            <button className="btn  bg-gradient-to-r from-primary to-secondary text-white">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  
  );
};

export default Banner;

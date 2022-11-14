import React from 'react';
import appointmentBg from '../../../assets/images/appointment.png'


const ContactUs = () => {
    const connectedBg = {
        background:`url(${appointmentBg})`,
        backgroundSize:'cover',
    }
  return (
    <section className='mt-10  flex justify-center  py-20' style={connectedBg} >
      <div className=''>

        <h2 className='text-xl font-bold text-secondary text-center' data-aos="fade-down" > Contact Us </h2>
        <h2 className='text-4xl mt-3 mb-6 text-white ' data-aos="fade-down" > Stay connected with us </h2>
        <form className="form-control lg:w-full md:w-96 sm:w-80  " data-aos="zoom-in" >
          <input
            type="emial"
            name='email'
            placeholder="Enter your email "
            className="input input-bordered lg:w-full w-5/6 mx-auto "
            required
          />
          <br  />
          <input
            type="text"
            name='subject'
            placeholder="Subject "
            className="input input-bordered  lg:w-full w-5/6 mx-auto "
            required
          />
          <br  />

          <textarea className="textarea textarea-bordered h-24  lg:w-full w-5/6 mx-auto"
          name='message'  
          placeholder="Your message " required>

          </textarea>

         
        </form>
      </div>

    </section>
  );
};

export default ContactUs;

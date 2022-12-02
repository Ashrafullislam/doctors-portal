import Aos from 'aos';
import React, { useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import './AppointmentInfoCard.css'

const AppointmentOptionCard = ({data,setTreatment}) => {
  const {user} = useContext(AuthContext)
  const navigate = useNavigate()
  const {name,slots} = data;
  console.log(slots,'slots ')

  
  useEffect(()=> {
    Aos.init({duration:'1500'})
  },[])

  const handleBook = () => {
  
      setTreatment(data)
 

  }
  return (
    <div className='mx-auto text-center mt-5 ' data-aos="fade-down" >
      <div className="card max-xl:w-96 min-[]: lg:w-80  bg-base-100 shadow-xl" >
        <div className="card-body">
          <h2 className=" text-secondary text-2xl font-bold" > {name} </h2>
          <p> {slots?.length > 1 ? slots[0] :'Try another day' } </p>
          <p> {slots?.length > 1 ? `Available spaces ${slots?.length}`:`Available space${slots?.length}` } </p>

          <div className="card-actions justify-center"data-aos="fade-right" >
          {user?.email? 
            <label  htmlFor="booking-modal" className={`btn  ${slots?.length === 0 ? " " : "  btn-primary   bg-gradient-to-r from-primary  to-secondary  "} text-white `}
            disabled =  {slots?.length === 0  }              
            onClick={handleBook}> Book Appointment </label>  

             :
            <Link to= '/loginform' > 
            
            <label  className={`btn  ${slots?.length === 0 ? " " : "  btn-primary   bg-gradient-to-r from-primary  to-secondary  "} text-white `}
             disabled =  {slots?.length === 0  }              
              onClick={()=> setTreatment (data)} > Book Appointment </label>
             </Link>

          }

          </div>
        </div>
      </div>

    </div>
  );
};

export default AppointmentOptionCard;

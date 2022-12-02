import React from 'react';

const DeleteDoctorModal = ({doctor,setDoctor,title,message}) => {

    // make an cancel button 
    const cancelDeleteDoctor = () => {
        setDoctor(null)
    } 

    // success deleteaction 
    const deleteSuccessAction = doctor => {
        setDoctor(doctor);
    }

  return (
  <div>
            {/* The button to open modal */}


{/* Put this part before </body> tag */}
<input type="checkbox" id="deleteDoctor-modal" className="modal-toggle" />
<div className="modal">
  <div className="modal-box">
    <h3 className="font-bold text-lg"> {title} </h3>
    <p className="py-4"> {message} </p>
    <div className="modal-action">
      <label htmlFor="deleteDoctor-modal" onClick={()=>deleteSuccessAction(doctor)} className="btn btn-outline btn-error"> Delete  </label>
      <button onClick={cancelDeleteDoctor} className='btn btn-outline btn-info' > Cancel  </button>
    </div>
  </div>
</div>
        </div>
    );
};

export default DeleteDoctorModal;
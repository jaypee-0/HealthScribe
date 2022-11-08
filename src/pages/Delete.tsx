import Button from "../components/Button";
import "../styles/Profile.scss";
import React from 'react';
import DeleteBg from '../assets/icons/DeleteBg.svg'

const Delete = () => {
  
  return (
    <div id="Profile" className='delete vh-100'>
      <nav className="w-100 bgPr py-4">
        <h3 className="text-center text-white mb-0">Delete Event</h3>
      </nav>
        <div className="text-center mt-5">
          <img src={DeleteBg} height={150} width={150} alt="" />
          <p className="col-8 col-md-6 col-lg-3 mx-auto fs-4">Are you sure you want to delete this event.</p>
          <div className="d-flex justify-content-center gap-4 mt-4 me-4">
                    <button className="mt-4 border-0 bg-transparent fw-bold px-5 py-3 rounded-pill text-Pr">
                    NO
                    </button>
                    <button className="mt-4 border px-5 py-3 fw-bold rounded-pill bgPr text-white">
                    YES
                    </button>
          </div>
        </div>
    </div>
  );
};

export default Delete;

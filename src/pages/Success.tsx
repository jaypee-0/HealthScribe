import Button from "../components/Button";
import "../styles/Profile.scss";
import React from 'react';
import success from '../assets/icons/success.svg'

const Success = () => {
  
  return (
    <div id="Profile" className='vh-100 success'>
      {/* <Navbar /> */}
      {/* <img
        src={Logo}
        className='w-100 d-none d-md-block'
        style={{ height: 150 }}
        alt='background.png'
      /> */}
      <nav className="w-100 bgPr py-4">
        <h3 className="text-center text-white mb-0">Success!</h3>
      </nav>
        <div className="text-center mt-5">
          <img src={success} height={150} width={150} alt="" />
          <p className="mt-5">Your profile has been updated.</p>
          <Button title={'CONTINUE'} url={'/timeline'} bg={false} color={false} border={true} />
        </div>
    </div>
  );
};

export default Success;

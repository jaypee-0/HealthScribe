import Button from "../components/Button";
import "../styles/Profile.scss";
import React from 'react';
import exportimg from '../assets/icons/export.svg'

const Export = () => {
  
  return (
    <div id="auth" className='vh-100' style={{ backgroundColor: "#fff" }}>
      <nav className="w-100 bgPr py-4">
        <h3 className="text-center text-white mb-0">Export Data</h3>
      </nav>
        <div className="text-center mt-5">
          <img src={exportimg} height={150} width={150} alt="" />
          <p className="" style={{marginBottom: '5rem'}}>Coming Soon!</p>
          <Button title={'CONTINUE'} url={'/timeline'} bg={false} color={false} border={true} />
        </div>
    </div>
  );
};

export default Export;

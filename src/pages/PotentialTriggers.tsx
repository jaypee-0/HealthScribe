import Button from "../components/Button";
import "../styles/Profile.scss";
import React from 'react';
import exportimg from '../assets/icons/export.svg'

const PotentialTriggers = () => {
  
  return (
    <div id="Profile" className='vh-100 potentialtriggers'>
      <nav className="w-100 bgPr py-4">
        <h3 className="text-center text-white mb-0">Potential Triggers</h3>
      </nav>
        <div className="text-center mt-5">
          <img src={exportimg} height={150} width={150} alt="" />
          <p className="">Coming Soon!</p>
          <Button title={'CONTINUE'} url={'/timeline'} bg={false} color={false} border={true} />
        </div>
    </div>
  );
};

export default PotentialTriggers;

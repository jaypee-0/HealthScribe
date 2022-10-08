import React from 'react';

const Footer = () => {
  return (
    <div style={{ backgroundColor: '#9F9F9F' }} className='pb-4 pt-5 text-light'>
      <div className='container d-flex'>
        <div className='col-4'>
          <ul className='list-unstyled ps-0'>
            <li>About Us</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className='col-4'>
          <ul className='list-unstyled ps-0'>
            <li>Features</li>
          </ul>
        </div>
        <div className='col-4'></div>
      </div>
    </div>
  );
};

export default Footer;

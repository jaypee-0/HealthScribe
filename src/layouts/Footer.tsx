import React from 'react';

const Footer = () => {
  return (
    <div style={{ backgroundColor: '#fff' }} className='py-5 text-dark'>
      <div className='container d-flex flex-column flex-md-row'>
        <div className='col-12 col-md-4'>
          <ul className='list-unstyled ps-0'>
            <li>......</li>
          </ul>
        </div>
        <div className='col-12 col-md-4'>
        <ul className='list-unstyled ps-0'>
            <li className='mb-2'>About Us</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className='col-12 col-md-4'>
          <p className='mb-0'>Copywright 2022 HealthScribe.netifly.com</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

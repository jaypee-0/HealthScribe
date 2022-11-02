import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/Logo.svg';

const Footer = () => {
  return (
    <div style={{ backgroundColor: '#fff' }} className='py-5 text-dark'>
      <div className='container d-flex flex-column flex-md-row'>
        <div className='col-12 col-md-4'>
          <ul className='list-unstyled ps-0'>
            <div className='d-flex justify-content-center justify-content-md-start'>
            <Link to='/'>
              <img src={Logo} alt='logo.png' height='50' width='100' />
            </Link>
          </div>
          </ul>
        </div>
        <div className='col-12 col-md-4'>
        <ul className='list-unstyled ps-0'>
            <li className='mb-2'>About Us</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className='col-12 col-md-4 d-flex flex-column flex-md-row'>
          <p className='mb-0'>Copywright 2022</p> <p><span className='mt-3 mt-md-0 ms-md-3'>healthscribe.netifly.com</span> </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

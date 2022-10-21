import React from 'react'
import logo from "../assets/blank.jpg";

const Dropdown = () => {
  return (
    <div className='bg-light position-absolute py-3' style={{top: '0', maxWidth: '500px', right: 0, border: "1px solid #dcd", borderBottomLeftRadius: "10px", zIndex: 4}}>
        <div className='px-4 d-flex align-items-center me-5'>
            <img src={logo} className="rounded-pill" alt='logo.png' height='60' width='60' />
            <p className='mb-0 ms-3'>User Name</p>
        </div>
        <hr />
        <div className='px-4 my-4'>
            <ul className='list-unstyled'>
                <li className='mb-2'>My Profile</li>
                <li className='mb-2'>App Details</li>
                <li className='mb-2'>Export Data (Coming Soon)</li>
                <li className='mb-2'>Privacy & Terms</li>
            </ul>
        </div>
        <hr />
        <p className='mb-0 text-center'>Log Out</p>
    </div>
  )
}

export default Dropdown
import React from 'react'
import logo from "../assets/blank.jpg";

const Dropdown = () => {
  return (
    <div className='bg-light position-absolute py-3' style={{top: '0', maxWidth: '500px', right: 0, borderBottom: "1px solid #000", borderLeft: "1px solid #000", borderBottomLeftRadius: "10px", zIndex: 4}}>
        <div className='px-4 d-flex align-items-center me-5'>
            <img src={logo} className="rounded-pill" alt='logo.png' height='70' width='70' />
            <p className='mb-0 ms-3'>User Name</p>
        </div>
        <hr />
        <div className='px-4 my-4'>
            <ul className='list-unstyled'>
                <li>My Profile</li>
                <li>App Details</li>
                <li>Privacy & Terms</li>
            </ul>
        </div>
        <hr />
        <p className='text-center'>Log Out</p>
    </div>
  )
}

export default Dropdown
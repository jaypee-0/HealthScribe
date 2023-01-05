import React from 'react'
import logo from "../assets/blank.jpg";
import { useNavigate } from 'react-router-dom';
import { useuserAuth } from '../context/UserAuth';

const Dropdown = () => {
  const history = useNavigate()
  const { signOut }:any = useuserAuth();

  const handleSignOut = async (e:React.SyntheticEvent) => {
    e.preventDefault();
    try {
      await signOut
      history('/login')
    } catch (err:any) {
      console.log(err)
    }
  } 

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
                <li className='mb-2' onClick={()=> history('/export')}>                   Export Data (Coming Soon)
                  </li>
                <li className='mb-2'>Privacy & Terms</li>
            </ul>
        </div>
        <hr />
        <button onClick={handleSignOut} className='ms-4 mb-0 border-0 text-center' style={{background: 'transparent'}}>Log Out</button>
    </div>
  )
}

export default Dropdown
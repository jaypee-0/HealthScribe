import React from 'react'
import logo from "../assets/blank.jpg";
import { useNavigate } from 'react-router-dom';
import { useuserAuth } from '../context/UserAuth';
import { auth } from './Firebase';

const Dropdown = () => {
  const history = useNavigate()
  const { user, setuser, signOut }:any = useuserAuth();
  console.log(user, "user drop")
  
  const handleSignOut = async () => {
    try {
      await signOut(auth)
      .then(() => {
          setuser(null)
          localStorage.removeItem("HealthScribe_Token")
          localStorage.removeItem("HealthScribe_ID")
          console.log("sign out successful");
          history('/login')
      })
    } catch (err:any) {
      console.log(err)
    }
  } 

  return (
    <div className='bg-light position-absolute py-3' style={{top: '0', maxWidth: '500px', right: 0, border: "1px solid #dcd", borderBottomLeftRadius: "10px", zIndex: 4}}>
        <div className='px-4 d-flex align-items-center me-5'>
            {/* <img src={logo} className="rounded-pill" alt='logo.png' height='60' width='60' />
            <p className='mb-0 ms-3'>{"User Name"}</p> */}
            <img src={user.pic ? user.pic : logo} className="rounded-pill" alt='logo.png' height='60' width='60' />
            <p className='mb-0 ms-3'>{user.fullName ? user.fullName.split(" ")[0] : "User Name"}</p>
        </div>
        <hr />
        <div className=''>
            <ul className='list-unstyled dropdeets'>
                <li className='' onClick={()=> history('/profile')}>My Profile</li>
                <li className=''>App Details</li>
                <li className='' onClick={()=> history('/export')}>                   
                Export Data (Coming Soon)
                  </li>
                <li className=''>Privacy & Terms</li>
            </ul>
        </div>
        <hr />
        <button onClick={handleSignOut} className='ms-4 mb-0 border-0 text-center buttonSignOut'>Log Out</button>
    </div>
  )
}

export default Dropdown
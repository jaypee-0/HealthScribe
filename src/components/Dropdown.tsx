import React from 'react'
import logo from "../assets/blank.jpg";
import { useNavigate } from 'react-router-dom';
import { useuserAuth } from '../context/UserAuth';

const Dropdown = () => {
  const history = useNavigate()
  const { signOut, user, setuser }:any = useuserAuth();

  const handleSignOut = async (e:React.SyntheticEvent) => {
    e.preventDefault();
    try {
      await signOut
      setuser(null)
      history('/login')
    } catch (err:any) {
      console.log(err)
    }
  } 

  return (
    <div className='bg-light position-absolute py-3' style={{top: '0', maxWidth: '500px', right: 0, border: "1px solid #dcd", borderBottomLeftRadius: "10px", zIndex: 4}}>
        <div className='px-4 d-flex align-items-center me-5'>
            <img src={user.displayName ? user.photoURL : logo} className="rounded-pill" alt='logo.png' height='60' width='60' />
            <p className='mb-0 ms-3'>{user.displayName ? user.displayName : "User Name"}</p>
        </div>
        <hr />
        <div className=''>
            <ul className='list-unstyled dropdeets'>
                <li className=''>My Profile</li>
                <li className=''>App Details</li>
                <li className='' onClick={()=> history('/export')}>                   Export Data (Coming Soon)
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
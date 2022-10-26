import { useEffect, useState } from "react";
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import LoginNavbar from "../layouts/LoginNavbar";
import Logo from '../assets/Logo.svg';
import { useNavigate } from "react-router-dom";
import Timeline from "./Timeline";
import Profile from "./Profile";

const Login = () => {
  const [user, setUser] = useState<any>({})
  // const handleCallbackResponse = (response: any) => {
  //   // console.log('encoded JWT ID' + response.credential);
  //   var userObj = jwt_decode(response.credential);
  //   // console.log('decoded JWT ID' + userObj);
  //   setUser(userObj);
  //   document.getElementById('signinButton').hidden = true;
  // };

  // const handleSignOut = (e: MouseEvent<HTMLButtonElement, MouseEvent>) => {
  //   e.preventDefault();
  //   setUser({});
  //   document.getElementById('signinButton').hidden = false;
  // };

  // useEffect(() => {
  //   if (window.google) {
  //     window.google.accounts.id.initialize({
  //       client_id: '145893185256-ri0009ijfn3i97bjqs9gakn4r1uimamh.apps.googleusercontent.com',
  //       callback: handleCallbackResponse,
  //     })

  //     window.google.accounts.id.renderButton(
  //       document.getElementById('signinButton'),
  //       {theme: 'outline', size: 'large', type: 'standard'}
  //     )
  //   }
  // }, [])
  
  const widthsize = screen.width
  const navigate = useNavigate()

  return (
    <div className="vh-100" style={{backgroundColor: "#F5F5F5"}}>
      <LoginNavbar />
        <div
          className='my-auto position-relative py-4 container d-flex flex-column pt-5 align-items-center justify-content-center' >
          <Link to='/'>
            <img src={Logo} alt='logo.png' height='60' width='150' />
          </Link>
          <h2 className="mt-4">Welcome to HealthScribe</h2>
          <div className="d-flex mt-4 mb-5">
            <input type="checkbox" />
            <p className="mb-0 ms-2">I agree to the terms of use</p>
          </div>
          {user && !user.email ? (
            <div className="">
              <div id="signinButton" className="mb-0 ms-3"></div>
            </div>
          ) : (
            <div className="">
              <Routes>
                <Route path='/profile' element={<Profile />}></Route>
                <Route path='/timeline' element={<Timeline />}></Route>
              </Routes>
            </div>
          )
          }
      </div>
    </div>
  );
};

export default Login;

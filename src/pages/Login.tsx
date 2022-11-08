import React from "react";
import LoginNavbar from "../layouts/LoginNavbar";
//import google from "../assets/google.png"
//import facebook from "../assets/facebook.png"
import email from "../assets/icons/email.svg"
import { Link } from "react-router-dom";


const Login = () => {
  return (
    <div id="auth" className="vh-100">
      <LoginNavbar />
      <div
          className='py-4 container col-11 col-md-6 col-lg-4 mx-md-auto pt-5' >
          
            <p className="text-center mt-5 mb-5">Log in using your email.</p>
          <div id="form" className="d-flex justify-content-center">
            <img src={email} alt="" />
            <input className="ms-3" type="text" placeholder="Email" />
          </div>  
          <div className="text-center">

          <Link to={'/profile'}>
          <button className="continue mt-4 border px-5 py-3 rounded-pill bgPr text-white">
            CONTINUE
          </button>
          </Link>
          </div>
          {/* <button className="d-flex justify-content-center w-100 py-3 rounded border mt-4 my-auto" style={{boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'}}>
            <img className="me-3" src={google} alt="" />
            <p className="mb-0">Continue with Google</p>
          </button>
          <button className="d-flex bg-primary justify-content-center w-100 py-3 rounded border-0 mt-4 my-auto" style={{boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'}}>
            <img className="me-3" src={facebook} alt="" />
            <p className="mb-0 text-white">Continue with Facebook</p>
          </button> */}
          <p className="text-center text-Org mt-5">First time here?</p>
      </div>
    </div>
  );
};

export default Login;

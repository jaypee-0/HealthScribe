import React from "react";
//import { useNavigate } from "react-router-dom";
//import Timeline from "./Timeline";
//import Profile from "./Profile";
import SignUpNavbar from "../layouts/SignUpNavbar";
//import google from "../assets/google.png"
//import facebook from "../assets/facebook.png"
import email from "../assets/icons/email.svg"
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div id="auth" className="vh-100" style={{backgroundColor: "#F5F5F5"}}>
      <SignUpNavbar />
        <div
          className='py-4 container col-11 col-md-6 col-lg-4 mx-md-auto pt-5' >
          
            <p className="text-center mt-5">Sign up with your email.</p>
          <div className="d-flex justify-content-center mb-5">
            <input type="checkbox" />
            <p className="mb-0 ms-2">I agree to the <span className="text-decoration-underline" style={{color: '#1DA1F2', cursor:'pointer'}}>Terms of Use.</span></p>
          </div>
          <div id="form" className="d-flex justify-content-center">
            <img src={email} alt="" />
            <input className="ms-3" type="text" placeholder="Email" />
          </div>  
          <div className="text-center">

          <Link to={'/login'}>
          <button className="mt-4 border px-5 py-3 rounded-pill bgPr text-white" style={{boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'}}>
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
          <p className="text-center text-Org mt-5">Already have an account?</p>
      </div>
    </div>
  );
};

export default SignUp;

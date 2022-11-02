import React from "react";
//import { useNavigate } from "react-router-dom";
//import Timeline from "./Timeline";
//import Profile from "./Profile";
import SignUpNavbar from "../layouts/SignUpNavbar";
import google from "../assets/google.png"
import facebook from "../assets/facebook.png"

const SignUp = () => {

  return (
    <div className="vh-100" style={{backgroundColor: "#F5F5F5"}}>
      <SignUpNavbar />
        <div
          className='py-4 container col-11 col-md-6 col-lg-4 mx-md-auto pt-5' >
          
          <div className="d-flex justify-content-center my-5">
            <input type="checkbox" />
            <p className="mb-0 ms-2">I agree to the <span className="text-decoration-underline" style={{color: '#1DA1F2', cursor:'pointer'}}>Terms of Use.</span></p>
          </div>
          <button className="d-flex justify-content-center w-100 py-3 rounded border mt-4 my-auto" style={{boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'}}>
            <img className="me-3" src={google} alt="" />
            <p className="mb-0">Continue with Google</p>
          </button>
          <button className="d-flex bg-primary justify-content-center w-100 py-3 rounded border-0 mt-4 my-auto" style={{boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'}}>
            <img className="me-3" src={facebook} alt="" />
            <p className="mb-0 text-white">Continue with Facebook</p>
          </button>
          <p className="text-center text-Org mt-5">Already have an account?</p>
      </div>
    </div>
  );
};

export default SignUp;

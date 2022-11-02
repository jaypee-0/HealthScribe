import React from "react";
import LoginNavbar from "../layouts/LoginNavbar";
import google from "../assets/google.png"
import facebook from "../assets/facebook.png"

const Login = () => {

  return (
    <div className="vh-100" style={{backgroundColor: "#F5F5F5"}}>
      <LoginNavbar />
      <div
          className='py-4 container col-11 col-md-6 col-lg-4 mx-md-auto pt-5'>          
          <div className="d-flex justify-content-center my-5">
            <p className="mb-0">Log in to continue your journey.</p>
          </div>
          <button className="d-flex justify-content-center w-100 py-3 rounded border mt-4 my-auto" style={{boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'}}>
            <img className="me-3" src={google} alt="" />
            <p className="mb-0">Continue with Google</p>
          </button>
          <button className="d-flex bg-primary justify-content-center w-100 py-3 rounded border-0 mt-4 my-auto" style={{boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'}}>
            <img className="me-3" src={facebook} alt="" />
            <p className="mb-0 text-white">Continue with Facebook</p>
          </button>
          <p className="text-center text-Org mt-5">First time here?</p>
      </div>
    </div>
  );
};

export default Login;

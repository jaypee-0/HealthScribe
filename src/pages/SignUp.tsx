import React from "react";
import SignUpNavbar from "../layouts/SignUpNavbar";
import logo from '../assets/blank.jpg';
import google from '../assets/google.png'
import facebook from '../assets/facebook.png'
import { useNavigate } from "react-router-dom";
import Login from "./Login";

const SignUp = () => {    

  const navigate = useNavigate()
  const widthsize = screen.width

  return (
    <div className="vh-100" style={{backgroundColor: "#F5F5F5"}}>
        <div>
          <Login /> 
        </div>
    </div>
  );
};

export default SignUp;

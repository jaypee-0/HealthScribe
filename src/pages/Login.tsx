import React from "react";
import LoginNavbar from "../layouts/LoginNavbar";
import google from "../assets/google.png"
import facebook from "../assets/facebook.png"
import email from "../assets/icons/email.svg"
import { Link } from "react-router-dom";
import { useuserAuth } from '../context/UserAuth';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const { logIn }:any = useuserAuth();
  const navigate = useNavigate();

  const [email, setemail] = React.useState("")
  const [password, setpassword] = React.useState("")
  const [error, seterror] = React.useState("")

  const handleSubmit = async (e:React.SyntheticEvent) => {
    e.preventDefault();
    seterror("")
    try {
      await logIn(email, password)
      navigate('/profile')
    } catch (err:any) {
      console.log(err)
      seterror(err?.message)
    }
  }
  return (
    <div id="auth" className="vh-100">
      <LoginNavbar />
      <form onSubmit={handleSubmit}
          className='py-4 container col-11 col-md-6 col-lg-4 mx-md-auto pt-5' >
          
            <p className="text-center mt-5 mb-3">Log in using your email.</p>
            {error &&
            <div><p className='m-0 text-center text-danger py-2 rounded' style={{background: '#FFB6C1'}}>{error}</p></div>
            }
         <div id='form' className='d-flex justify-content-center'>
          <img src={email} alt='' />
          <input value={email} onChange={(e)=>setemail(e.target.value)} className='ms-3' type='text' placeholder='Email' />
        </div>
        <div id='form' className='d-flex justify-content-center'>
          <img src={email} alt='' />
          <input value={password} onChange={(e)=>setpassword(e.target.value)} className='ms-3' type='password' placeholder='Password' />
        </div>

          <div className="text-center">
          <button type="submit" className="continue mt-4 border px-5 py-3 rounded-pill bgPr text-white">
            CONTINUE
          </button>
          </div>
          {/* Google */}
          <button className="d-flex justify-content-center w-100 py-3 rounded border mt-4 my-auto" style={{boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'}}>
            <img className="me-3" src={google} alt="" />
            <p className="mb-0">Continue with Google</p>
          </button>
          {/* Facebook */}
          <button className="d-flex bg-primary justify-content-center w-100 py-3 rounded border-0 mt-4 my-auto" style={{boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'}}>
            <img className="me-3" src={facebook} alt="" />
            <p className="mb-0 text-white">Continue with Facebook</p>
          </button>
          <p className="text-center text-Org mt-5">First time here?</p>
      </form>
    </div>
  );
};

export default Login;

import React from 'react';
//import { useNavigate } from "react-router-dom";
//import Timeline from "./Timeline";
//import Profile from "./Profile";
import SignUpNavbar from '../layouts/SignUpNavbar';
import google from '../assets/google.png';
import facebook from '../assets/facebook.png';
import email from '../assets/icons/email.svg';
import { Link } from 'react-router-dom';
import { useuserAuth } from '../context/UserAuth';
import { useNavigate } from 'react-router-dom';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { addDoc, collection, doc, orderBy, query, serverTimestamp, setDoc } from "firebase/firestore";
import { auth, db } from '../components/Firebase';

const SignUp = () => {
  const { signUp, setuser }:any = useuserAuth();
  const navigate = useNavigate();
  const [email, setemail] = React.useState("")
  const [password, setpassword] = React.useState("")
  const [error, seterror] = React.useState("")
  const [emailExists, setEmailExists] = React.useState(false);

  
  const handleSubmit = async (e:React.SyntheticEvent) => {
    e.preventDefault();
    seterror("")
    await signUp(email, password)
    .then(async (user: any) => {
      console.log(user)
      if (user) {
          const usersRef = doc(db, "users", user.user.uid);
            setDoc(doc(db, 'events', user.user.uid), {
              uid: user.user.uid,
              timestamp: serverTimestamp(),
            })
            setDoc(usersRef, { uid: user.user.uid, email: email, password: password });
            const token = await user.user.getIdToken();
            navigate('/login')
        }
    })
    .catch((error:any) => {
        if (error.code === "auth/email-already-in-use") {
            setEmailExists(true);
            return;
        }
        seterror(error);
    });
  }
 
  
  const [signInWithGoogle, user, loading] = useSignInWithGoogle(auth);  
  const googleSignin = () => {
    signInWithGoogle([''], { prompt: 'select_account' })
      .then((res:any) => {
        console.log(res);
        navigate('/profile');
        setuser(res.user)
      })
      .catch((err) => {
        console.log(err);
        seterror(err?.message);
      });
  };

  return (
    <div id='auth' className='vh-100'>
      <SignUpNavbar />
      <div className='py-4 container col-11 col-md-6 col-lg-4 mx-md-auto pt-5'>
        <form onSubmit={handleSubmit} >
        <p className='text-center mt-5'>Sign up with your email.</p>
        <div className='d-flex justify-content-center mb-3'>
          <input type='checkbox' />
          <p className='mb-0 ms-2 agree'>
            I agree to the{' '}
            <span className='text-decoration-underline'>Terms of Use.</span>
          </p>
        </div>
        {emailExists &&
        <div><p className='m-0 text-center text-danger py-2 rounded' style={{background: '#FFB6C1'}}>{"Email already in use"}</p></div>
        }
        {error &&
        <div><p className='m-0 text-center text-danger py-2 rounded' style={{background: '#FFB6C1'}}>{"Invalid Email"}</p></div>
        }
        <div id='form' className='d-flex justify-content-center'>
          <img src={email} alt='' />
          <input value={email} onChange={(e)=>setemail(e.target.value)} className='ms-3' type='text' placeholder='Email' />
        </div>
        <div id='form' className='d-flex justify-content-center'>
          <img src={email} alt='' />
          <input value={password} onChange={(e)=>setpassword(e.target.value)} className='ms-3' type='password' placeholder='Password' />
        </div>
        <div className='text-center'>
            <button type='submit' className='continue mt-4 border px-5 py-3 rounded-pill bgPr text-white'>
              CONTINUE
            </button>
        </div>
        </form>
        {/* Google */}
        {/* <button
          onClick={googleSignin}
          className='d-flex justify-content-center w-100 py-3 rounded border mt-4 my-auto'
          style={{ boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' }}>
          <img className='me-3' src={google} alt='' />
          <p className='mb-0'>Continue with Google</p>
        </button> */}
        {/* Facebook */}
        {/* <button
          className='d-flex bg-primary justify-content-center w-100 py-3 rounded border-0 mt-4 my-auto'
          style={{ boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' }}>
          <img className='me-3' src={facebook} alt='' />
          <p className='mb-0 text-white'>Continue with Facebook</p>
        </button> */}
        <p className='text-center text-Org mt-5' onClick={()=>navigate('/login')}>Already have an account?</p>
      </div>
    </div>
  );
};

export default SignUp;

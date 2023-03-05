import React from 'react';
import LoginNavbar from '../layouts/LoginNavbar';
import google from '../assets/google.png';
import facebook from '../assets/facebook.png';
import email from '../assets/icons/email.svg';
import { Link } from 'react-router-dom';
import { useuserAuth } from '../context/UserAuth';
import { useNavigate } from 'react-router-dom';
import {
  useSignInWithGoogle,
  useSignInWithFacebook,
} from 'react-firebase-hooks/auth';
import { auth, db } from '../components/Firebase';
import { collection, onSnapshot, query, where } from 'firebase/firestore';

const Login = () => {
  const { logIn, setuser, setuserDetails }: any = useuserAuth();
  const navigate = useNavigate();

  const [email, setemail] = React.useState('');
  const [password, setpassword] = React.useState('');
  const [error, seterror] = React.useState('');

  const [signInWithGoogle, user, loading] = useSignInWithGoogle(auth);

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    seterror('');
    try {
      await logIn(email, password).then(async (user: any) => {
        console.log(user);
        if (user) {
          const token = await user.user.getIdToken();
          const id = await user.user.uid;
          setuserDetails({id: user.user.uid})
          localStorage.setItem("HealthScribe_Token", token)
          localStorage.setItem("HealthScribe_ID", id)
          
          const docRef = collection(db, "users");
          const q = query(docRef, where("uid", "==", id));
          onSnapshot(q, (snapshot) => {
            snapshot.docs.forEach((item: any) => {
              setuser(item.data());
              localStorage.setItem("HealthScribe_User", item.data())
              navigate('/profile');
            });
          });
        }
      });
    } catch (err: any) {
      if (err.code === 'auth/invalid-email') {
        seterror('Invalid Email');
        return;
      }
      seterror('Invalid Password');
    }
  };

  const googleSignin = () => {
    signInWithGoogle([''], { prompt: 'select_account' })
      .then((user: any) => {
        const token = user.user.getIdToken();
        setuserDetails({id: user.user.uid})
        localStorage.setItem("HealthScribe_Token", token)
        navigate('/profile');
        setuser(user.user);
      })
      .catch((err: any) => {
        if (err.code === 'auth/invalid-email') {
          seterror('Invalid Email');
          return;
        }
        seterror('Invalid Password');
      });
  };

  const [signInWithFacebook] = useSignInWithFacebook(auth);
  const facebookSignin = () => {
    signInWithFacebook([''], { prompt: 'select_account' })
      .then((res: any) => {
        console.log(res);
        navigate('/profile');
        setuser(res.user);
      })
      .catch((err) => {
        console.log(err);
        seterror(err?.message);
      });
  };

  return (
    <div id='auth' className='vh-100'>
      <LoginNavbar />
      <div className='py-4 container col-11 col-md-6 col-lg-4 mx-md-auto pt-5'>
        <form onSubmit={handleSubmit}>
          <p className='text-center mt-5 mb-3'>Log in using your email.</p>
          {error && (
            <div>
              <p
                className='m-0 text-center text-danger py-2 rounded'
                style={{ background: '#FFB6C1' }}>
                {error}
              </p>
            </div>
          )}
          <div id='form' className='d-flex justify-content-center'>
            <img src={email} alt='' />
            <input
              value={email}
              onChange={(e) => setemail(e.target.value)}
              className='ms-3'
              type='text'
              placeholder='Email'
            />
          </div>
          <div id='form' className='d-flex justify-content-center'>
            <img src={email} alt='' />
            <input
              value={password}
              onChange={(e) => setpassword(e.target.value)}
              className='ms-3'
              type='password'
              placeholder='Password'
            />
          </div>

          <div className='text-center'>
            <button
              type='submit'
              className='continue mt-4 border px-5 py-3 rounded-pill bgPr text-white hover_down'>
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
          onClick={facebookSignin}
          className='d-flex bg-primary justify-content-center w-100 py-3 rounded border-0 mt-4 my-auto'
          style={{ boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' }}>
          <img className='me-3' src={facebook} alt='' />
          <p className='mb-0 text-white'>Continue with Facebook</p>
        </button> */}
        {/* <p className='text-center text-Org mt-5'>First time here?</p> */}
      </div>
    </div>
  );
};

export default Login;

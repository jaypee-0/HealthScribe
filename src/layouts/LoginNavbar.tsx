// import logo from '../assets/blank.jpg';
import { Link } from 'react-router-dom';
import '../styles/NavBar.scss';

const Navbar = () => {
  return (
    <>
      <div className='w-100 py-3 header'>
        <div className='container d-flex flex-column justify-content-end align-items-center'>
          <div className='d-flex gap-2 gap-md-4 align-items-center justify-content-between'>
            <h2 className='para text-white mb-0 py-2 fw-bold'>Welcome back!</h2>
            {/* <Button title={'Sign Up'} url={'/signup'} border bg={false} color={false} /> */}
          </div>
        </div>
      </div>
      <div className='d-flex gap-2 py-2 gap-md-4 justify-content-around'>
        <Link to='/login'>
          <button className="login">LOG IN</button>
        </Link>
        <Link to='/signup'>
          <button className="login">SIGN UP</button>
        </Link>
      </div>
          <div className='col-6 bgPr' style={{height: 3}}></div>
    </>
  );
};

export default Navbar;

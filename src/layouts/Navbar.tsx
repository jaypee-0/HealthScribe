import Logo from '../assets/Logo.svg';
import '../styles/NavBar.scss';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {

  const navigate = useNavigate();

  return (
    <div className='w-100 py-3 bg-light'>
      <div className='container d-flex justify-content-between align-items-center'>
        <div>
          <Link to='/'>
            <img src={Logo} alt='logo.png' height='40' width='150' />
          </Link>
        </div>
        <div className='d-flex gap-2 gap-md-4 justify-content-between'>
          <Link to='/login'>
            <button className="login">Log In</button>
          </Link>
          <Link to='/signup'>
            <button className="get-start">SIGN UP</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

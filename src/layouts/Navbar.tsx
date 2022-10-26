import Logo from '../assets/Logo.svg';
import { Link } from 'react-router-dom';
import '../styles/NavBar.scss';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../app/store';

const Navbar = () => {

  const navigate = useNavigate();
  const accessToken = useSelector((state : RootState) => state.session.accessToken);
  const loading = useSelector((state : RootState) => state.session.loading);
  const currentUser = useSelector((state : RootState) => state.session.currentUser);

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
            <button className="get-start">Get Started</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

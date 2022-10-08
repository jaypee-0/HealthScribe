import Button from '../components/Button';
import logo from '../assets/blank.jpg';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='w-100 py-3 bg-light'>
      <div className='container d-flex justify-content-between align-items-center'>
        <div>
          <Link to='/'>
            <img src={logo} alt='logo.png' height='40' width='100' />
          </Link>
        </div>
        <div className='d-flex gap-4 justify-content-between'>
          <Button title={'Log In'} url={'/login'} bg={false} color='black' />
          <Button title={'Get Started'} url={'/signup'} bg color />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

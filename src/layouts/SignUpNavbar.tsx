import Button from '../components/Button';
import logo from '../assets/blank.jpg';

const Navbar = () => {
  return (
    <div className='w-100 py-3 bg-light'>
      <div className='container d-flex justify-content-end align-items-center'>
        <div className='d-flex gap-2 gap-md-4 align-items-center justify-content-between'>
          <p className='mb-0 me-5'>Already have an account?</p>
          <Button title={'LOG IN'} url={'/login'} border bg={false} color={false} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

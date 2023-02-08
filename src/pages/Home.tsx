import Button from '../components/Button';
import '../styles/Home.scss';
import Logo from '../assets/Logo.svg';
import Navbar from '../layouts/Navbar';
import Footer from '../layouts/Footer';
import People from '../assets/People.svg';
import iPodnCell from '../assets/iPodnCell.svg';
import CreateProfile from '../assets/CreateProfile.svg';
import Insights from '../assets/Insights.svg';
import LogEventMenu from '../assets/LogEventMenu.svg';
import { useuserAuth } from '../context/UserAuth';

const Home = () => {
  const width = screen.width
  const { token }: any = useuserAuth();

  return (
    <>
    <Navbar />
    <div id='Home'>
      <div className="welcome" id='Hero'>
        <div id="first"
          className='position-relative d-flex flex-column flex-lg-row pt-5 align-items-center justify-content-center px-4 px-md-0'>
          <div className="fw-bold text-white col-md-11 col-lg-5 text-center mb-50 mb-md-5 ps-md-5">
            <p className="fw-bold text-white fs-5">Health Tracker</p>
            <h2 className="fw-bold text-white fs-1">Welcome to HealthScribe</h2>
            <p className='para text-white mt-1 mt-md-3 col-md-10 col-lg-10 mx-md-auto fs-5'>
              Keep track of your health related symptoms on all of your devices. Click <span className="fw-bold">Learn More</span> to see how HealthScribe works.
            </p>
            <div className='d-flex gap-5 mt-5 justify-content-center'>
              {!token&&
              <Button title={'CREATE ACCOUNT'} url={'/signup'} bg color={true} border={false} />
              }
              <div className="view">
                <Button title={'LEARN MORE'} url={'/signup'} bg={false} color={false} border={true} />
              </div>
            </div>
          </div>
          <div className=' col-lg-7' id="second">
            <img className='h-100 col-12 col-sm-0' src={People} alt='Logo.svg' />
          </div>
        </div>

      </div>
      <div id='iPodnCell' className='container mx-auto col-md-6'>
        <img className='img' src={iPodnCell} alt="" />
      </div>

      <div id='fourth' className='py-5 container gap-5'>
        <hr className='w-75 mx-auto' />
        <h2 className='text-center mb-5 pb-2'>How HealthScribe Works</h2>
        <div className='mt-5 d-flex flex-column-reverse flex-md-row flex-md-wrap justify-content-between align-items-center'>
          <div className='col-12 col-md-6 mb-2 mb-md-5 '>
            <div className='col-10 mx-auto text-center'>
              <img src={CreateProfile} className='img-fluid' alt='' />
            </div>
          </div>
          <div className='col-12 col-md-6 mb-0 mb-md-5'>
            <div className='col-11 col-md-10 mx-auto '>
            <h6>Create a profile</h6>
              <h3>Personalize the experience
to set and achieve your
goals</h3>
              <p className="mt-3 text-secondary fs-5">Use your social media account to create/login
to a HealthScribe account

              </p>
            </div>
          </div>
          </div>
        <div className='mt-5 d-flex flex-column flex-md-row flex-md-wrap justify-content-between align-items-center'>
          <div className='col-12 col-md-5 my-1 my-md-5'>
          <div className='col-11 col-md-10 mx-auto'>
          <h6>Log your events</h6>
              <h3>Manage your health
                information in one place</h3>
              <p className="mt-3 text-secondary fs-5">Easily record and track your symptoms, medication, mood, food, and drinks 
              </p>
            </div>
          </div>
          <div className='col-12 col-md-6 mt-1 my-md-5'>
            <div className='col-10 mx-auto text-center'>
              <img src={LogEventMenu} className='img-fluid' alt='' />
            </div>
          </div>
        </div>
        <div className='mt-5 d-flex flex-column-reverse flex-md-row flex-md-wrap justify-content-between align-items-center'>
          <div className='col-12 col-md-6 mb-2 mb-md-5 '>
            <div className='col-10 mx-auto text-center'>
              <img src={Insights} className='img-fluid' alt='' />
            </div>
          </div>
          <div className='col-12 col-md-6 mb-0 mb-md-5'>
            <div className='col-11 col-md-10 mx-auto'>
              <h6>View your data</h6>
              <h3>Analyze your information over time</h3>
              <p className="mt-3 text-secondary fs-5">
              Visually compare your information to gain 
meaningful insights about your health 
              </p>
            </div>
          </div>
          </div>
      </div>

      <div id="fifth" className='bgPr'>
        <div className='container text-center text-light'>
          <p className='fs-3 fw-bold'>Manage your Information 24/7 from any device.</p>
          <p className='mb-5 '>Understanding your health has never been easier.</p>
            <Button title={'GET STARTED'} url={'/signup'} bg color border={false} />
        </div>
      </div>
    </div>

    <Footer />
    </>
  );
};

export default Home;

import Button from '../components/Button';
import '../styles/Home.scss';
import Logo from '../assets/Logo.svg';
import Navbar from '../layouts/Navbar';
import Footer from '../layouts/Footer';
import People from '../assets/People.svg';

const Home = () => {
  const width = screen.width
  console.log(width)

  return (
    <>
    <Navbar />
    <div id='Home'>
      <div className="welcome" id='Hero'>
        <div
          style={{ minHeight: width >= 575 ? '80vh' : '60vh' }}
          className='position-relative py-4 container d-flex flex-column pt-5 align-items-center justify-content-center'>
          <div>
            <h2 className="text-white">Welcome to HealthScribe</h2>
            <p className='para text-white col-11 mr-auto col-md-8 mt-1 mt-md-3'>
              Keep track of your health related symptoms on all of your devices. Click learn more to see how HealthScribe works
            </p>
            <div className='d-flex gap-5 mt-5'>
              <Button title={'LEARN MORE'} url={'/timeline'} bg color={true} border={false} />
              <div className="view">
                <Button title={'VIEW FEATURES'} url={'/signup'} bg={false} color={false} border={true} />
              </div>
            </div>
          </div>
          <div className='people'>
            <img className='img-fluid' src={People} alt='Logo.svg' />
          </div>
        </div>

      </div>

      <div id='second' className='py-5 container text-center'>
        <h2 className='mt-5'>Are you ready to improve your life?</h2>
        <p className='col-sm-10 mt-4 col-md-7 mx-auto'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam ipsa
          possimus suscipit repellendus dolore, doloribus, voluptatem maiores
          sapiente impedit, amet ipsum sint accusantium esse placeat!
        </p>
        <div className='d-flex flex-column flex-md-row col-12 justify-content-between col-md-10 mx-auto my-2 my-md-5'>
          <div className='col-9 mb-4 mb-md-0 mx-auto col-md-3'>
            <img className='img-fluid' src={Logo} alt='Logo.svg' />
          </div>
          <div className='col-9 mb-4 mb-md-0 mx-auto col-md-3'>
            <img className='img-fluid' src={Logo} alt='Logo.svg' />
          </div>
          <div className='col-9 mb-4 mb-md-0 mx-auto col-md-3'>
            <img className='img-fluid' src={Logo} alt='blank.svg' />
          </div>
        </div>
      </div>

      <div id='third' style={{ backgroundColor: '#D9D9D9' }}>
        <div className='container py-5'>
          <p className='mb-4 mt-0 mt-md-5'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
            reiciendis at atque id necessitatibus quam maxime. Est possimus
            voluptatum aperiam! Natus voluptatum odio consequuntur ipsam
            reiciendis asperiores quae tempore perferendis!
          </p>
          <div className='text-center my-4'>
            <Button title={'TRY NOW'} url={'/'} bg color border={false} />
          </div>
        </div>
      </div>

      <div id='fourth' className='py-5 container gap-5'>
        <hr className='w-75 mx-auto' />
        <h2 className='text-center mb-5 pb-5'>How HealthScribe Works</h2>
        <div className='mt-5 d-flex flex-column-reverse flex-md-row flex-md-wrap justify-content-between align-items-center'>
          <div className='col-12 col-md-6 mb-2 mb-md-5 '>
            <div className='col-10 mx-auto'>
              <img src={Logo} className='img-fluid' alt='' />
            </div>
          </div>
          <div className='col-12 col-md-6 mb-0 mb-md-5'>
            <div className='col-11 col-md-10 mx-auto '>
            <h6>Create a profile</h6>
              <h3>Personalize the experience
to set and achieve your
goals</h3>
              <p>Use your social media account to create/login
to a HealthSCribe account

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
              <p>Easily record and track your symptoms, medication, mood, food, and drinks 
              </p>
            </div>
          </div>
          <div className='col-12 col-md-6 mt-1 my-md-5'>
            <div className='col-10 mx-auto'>
              <img src={Logo} className='img-fluid' alt='' />
            </div>
          </div>
        </div>
        <div className='mt-5 d-flex flex-column-reverse flex-md-row flex-md-wrap justify-content-between align-items-center'>
          <div className='col-12 col-md-6 mb-2 mb-md-5 '>
            <div className='col-10 mx-auto'>
              <img src={Logo} className='img-fluid' alt='' />
            </div>
          </div>
          <div className='col-12 col-md-6 mb-0 mb-md-5'>
            <div className='col-11 col-md-10 mx-auto'>
              <h6>View your data</h6>
              <h3>Analyze your information over time</h3>
              <p>
              Visually compare your information to gain 
meaningful insights about your health 
              </p>
            </div>
          </div>
          </div>
      </div>

      <div className='bgPr' style={{paddingTop: '6rem', paddingBottom: '5rem'}}>
        <div className='container text-center text-light'>
          <p className='fs-3 fw-bold'>Manage your Information 24/7 from any device.</p>
          <p className='mb-4'>Understanding your health has never been easier.</p>
            <Button title={'Create Account'} url={'/signup'} bg color border={false} />
        </div>
      </div>
    </div>

    <Footer />
    </>
  );
};

export default Home;

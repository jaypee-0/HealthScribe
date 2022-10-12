import Button from '../components/Button';
import '../styles/Home.scss';
import blank from '../assets/blank.jpg';

const Home = () => {
  const width = screen.width
  console.log(width)

  return (
    <div id='Home'>
      <div id='Hero'>
        <div
          style={{ minHeight: width >= 575 ? '80vh' : '60vh' }}
          className='position-relative py-4 container d-flex flex-column pt-5 align-items-center justify-content-center'>
          <h2>Welcome to HealthScribe</h2>
          <p className='col-11 mx-auto col-md-8 mt-2 mt-md-5'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio magnam quidem maiores accusamus corporis non mollitia maxime, sapiente possimus distinctio illo autem, reprehenderit, nesciunt quasi?
          </p>
          <div className='d-flex gap-5 mt-5'>
            <Button title={'LEARN MORE'} url={'/signup'} bg color />
            <Button title={'VIEW FEATURES'} url={'/signup'} bg color />
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
            <img className='img-fluid' src={blank} alt='blank.png' />
          </div>
          <div className='col-9 mb-4 mb-md-0 mx-auto col-md-3'>
            <img className='img-fluid' src={blank} alt='blank.png' />
          </div>
          <div className='col-9 mb-4 mb-md-0 mx-auto col-md-3'>
            <img className='img-fluid' src={blank} alt='blank.png' />
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
            <Button title={'TRY NOW'} url={'/'} bg color />
          </div>
        </div>
      </div>

      <div id='fourth' className='py-5 container gap-5'>
        <h2 className='text-center'>Features</h2>
        <div className='mt-5 d-flex flex-column flex-md-row flex-md-wrap justify-content-between'>
          <div className='col-12 col-md-6 mb-5 '>
            <div className='col-10 mx-auto'>
              <img src={blank} className='img-fluid' alt='' />
            </div>
          </div>
          <div className='col-12 col-md-6 mb-5'>
            <div className='col-10 mx-auto'>
              <h3>Log Your Health Information</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Explicabo fuga sit pariatur voluptatibus, consequatur assumenda
                voluptate, perspiciatis sed necessitatibus veritatis aspernatur
                perferendis! Vero dicta iste deleniti excepturi neque sapiente
                iure perferendis necessitatibus quidem laudantium recusandae
                mollitia, voluptates illum maiores architecto.
              </p>
            </div>
          </div>
          <div className='col-12 col-md-5 mb-5 mt-5'>
          <div className='col-10 mx-auto'>
              <h3>Analyze Your Data</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Explicabo fuga sit pariatur voluptatibus, consequatur assumenda
                voluptate, perspiciatis sed necessitatibus veritatis aspernatur
                perferendis! Vero dicta iste deleniti excepturi neque sapiente
                iure perferendis necessitatibus quidem laudantium recusandae
                mollitia, voluptates illum maiores architecto.
              </p>
            </div>
          </div>
          <div className='col-12 col-md-6 my-5'>
            <div className='col-10 mx-auto'>
              <img src={blank} className='img-fluid' alt='' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

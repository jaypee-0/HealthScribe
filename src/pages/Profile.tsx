import Navbar from "../layouts/Navbar.SignedIn";
import Logo from "../assets/Logo.svg";
import profile from "../assets/profile.png";
import Button from "../components/Button";
import "../styles/Profile.scss";

const Profile = () => {
  
  return (
    <div className='vh-100' style={{ backgroundColor: "#F5F5F5" }}>
      <Navbar />
      <img
        src={Logo}
        className='w-100 d-none d-md-block'
        style={{ height: 150 }}
        alt='background.png'
      />
      <div className='my-auto position-relative py-4 container d-flex flex-column flex-md-row pt-5 align-items-center align-items-md-start justify-content-center justify-content-md-around'>
      <h3 className="text-center d-md-none">Create your profile</h3>
        <div className=" col-md-3 col-lg-3">
        <div className="text-center position-relative">
          <img className="col-7 col-md-12 mx-auto" style={{borderRadius: 50, maxHeight: 300, maxWidth: 300}} src={profile} alt='profile.png' />
          <button className="position-absolute bg-secondary border-0 d-flex justify-content-center align-items-center fw-bold text-light me-5 me-md-0 p-md-3" style={{width: 20, height: 20, borderRadius: '50px', top: '82%', right:'10%'}}>+</button>
        </div>
        <div>
          <p className="d-none text-center d-md-block mt-4 fs-5">User Name</p>
        </div>
        </div>
          <p className="d-md-none">Upload Photo</p>
        <div className=" col-10 col-md-6" >
      <h3 className="text-center d-none d-md-block mb-4">Create your profile</h3>
          <form action="" className="d-flex flex-column p-4 p-md-5 rounded" style={{background: "white"}}>

          <input className="mb-3 py-2 py-md-3 px-2 rounded border border-1" type="text" placeholder="Full Name" />
          <input className="mb-3 py-2 py-md-3 px-2 rounded border border-1" type="email" placeholder="Email" />
          <input className="mb-3 py-2 py-md-3 px-2 rounded border border-1" type="date" placeholder="Birth Date" />
          <div className="d-flex justify-content-center gap-3">
            <Button title={'CANCEL'} url={'/'} bg={false} color={false} border={true} />
            <Button title={'SAVE'} url={'/timeline'} bg color border={false} />
          </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;

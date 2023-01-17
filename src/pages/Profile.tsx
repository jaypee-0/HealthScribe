import Navbar from "../layouts/Navbar.SignedIn";
//import Logo from "../assets/Logo.svg";
import profile from "../assets/profile.png";
import Button from "../components/Button";
import "../styles/Profile.scss";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import React from 'react';
import { Link } from "react-router-dom";
import { AnyARecord } from "dns";
import { useuserAuth } from "../context/UserAuth";


const Profile = () => {
  const { user }: any = useuserAuth();
  console.log(user);
  
  
  const [startDate, setStartDate] = React.useState(new Date());
  const [fullname, setfullname] = React.useState(user.displayName? user.displayName: "")
  const [email, setemail] = React.useState(user.displayName? user.email: "")
  const [image, setImage] = React.useState({ preview: '', raw: '' })
  const handleImgChange = (e:any) => {
   setImage({
    preview: URL.createObjectURL(e?.target?.files[0]),
    raw: e?.target?.files[0]
   })
  }

  const handleUpload = async (e:any) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", image.raw);
  };
  
  return (
    <div id="Profile" className='vh-100'>
      {/* <Navbar /> */}
      {/* <img
        src={Logo}
        className='w-100 d-none d-md-block'
        style={{ height: 150 }}
        alt='background.png'
      /> */}
      <nav className="w-100 bgPr py-4">
      <h3 className="text-center text-white mb-0">Create your profile</h3>

      </nav>
      <div className='mt-md-5 position-relative py-4 container d-flex flex-column flex-md-row pt-5 align-items-center align-items-md-start justify-content-center justify-content-md-around'>
        <div className=" col-md-3 col-lg-3">
        <div className="text-center position-relative">
          <img className="col-7 col-md-12 mx-auto img-fluid" style={{borderRadius: '50%', maxHeight: 300, maxWidth: 300}} src={image.preview ? image.preview : user.photoURL?`${user.photoURL}`: profile} alt='profile.png' />
          <button onClick={handleUpload} className="position-absolute bg-secondary border-0 d-flex justify-content-center align-items-center fw-bold text-light me-5 me-md-0 p-md-3" style={{width: '25px', height: '25px', borderRadius: '50px', top: '80%', right:'12%'}}>+</button>
          <input id='fileupload' style={{display: 'none '}} type="file" onChange={handleImgChange} accept="image/*" className='mt-2 w-auto mt-md-auto form-control align-self-start ms-auto upload py-2' />
        </div>
        <div>
          <p className="d-none text-center d-md-block mt-4 fs-5">{user.displayName ? user.displayName : 'User Name'}</p>
        </div>
        </div>
          <p className="d-md-none">Upload Photo</p>
        <div className=" col-10 col-md-6" >
      {/* <h3 className="text-center d-none d-md-block mb-4">Create your profile</h3> */}
          <form id="form" action="" className="d-flex flex-column p-4 p-md-5 rounded" style={{background: "white"}}>

          <input className="mb-3 py-2 py-md-3 px-2" type="text" placeholder="Full Name" value={fullname} />
          <input className="mb-3 py-2 py-md-3 px-2" type="email" placeholder="Email" value={email} />
          <DatePicker className="mb-3 py-2 py-md-3 px-2 w-100"  placeholderText="mm/dd/yyyy" selected={startDate} onChange={(date:any) => setStartDate(date)} />
          {/* <input className="mb-3 py-2 py-md-3 px-2 rounded border border-1" type="date" placeholder="Birth Date" /> */}
          <div className="d-flex justify-content-center gap-3">
            <Link to="/">
            <button className="bg-transparent border-0 py-2 py-md-3 fw-bold text-Pr">CANCEL</button>
            </Link>
            <Button title={'SAVE'} url={'/success'} bg={false} color={false} border={true} />
          </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;

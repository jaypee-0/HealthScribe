import Navbar from "../layouts/Navbar.SignedIn";
import profile from "../assets/profile.png";
import Button from "../components/Button";
import DatePicker from "react-datepicker";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useuserAuth } from "../context/UserAuth";
import "../styles/Profile.scss";
import "react-datepicker/dist/react-datepicker.css";
import { doc, serverTimestamp, setDoc, updateDoc } from "firebase/firestore";
import { db, storage } from "../components/Firebase";
import { ref } from "firebase/storage";

const Profile = () => {
    const { user, userDetails, setuserDetails }: any = useuserAuth();
    const navigate = useNavigate();
    const [loading, setloading] = React.useState(false);
    const [startDate, setStartDate] = React.useState(new Date());
    const [fullname, setfullname] = React.useState(user.fullName ? user.fullName : "");
    const [email, setemail] = React.useState(user.email ? user.email : "");
    const [image, setImage] = React.useState({ preview: "", raw: "" });

    const handleImgChange = (e: any) => {
        setImage({
            preview: URL.createObjectURL(e?.target?.files[0]),
            raw: e?.target?.files[0]
        });
    };

    // const handleUpload = async (e: React.SyntheticEvent) => {
    //   e.preventDefault();
    //   const formData = new FormData();
    //   formData.append('image', image.raw);
    //   console.log(image.raw)
    // };

    const handleSubmit = async (e: React.SyntheticEvent) => {
        e.preventDefault();
        navigate("/success");           
        setuserDetails({
            ...userDetails,
            email: email,
            fullName: fullname,
            dob: startDate
        });
        await updateDoc(doc(db, "users", userDetails?.id), {
            fullName: fullname,
            dateOfBirth: startDate,
            pic: "",
            timestamp: serverTimestamp()
        })
    };
    React.useEffect(() => {
        setTimeout(() => {
            setloading(false);
        }, 3000);
    }, []);

    if (loading) {
        return (
            <div style={{ width: "100%", height: "80vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <div className="lds-ripple">
                    <div></div>
                    <div></div>
                </div>
            </div>
        );
    } else {
        return (
            <div id="Profile" className="vh-100">
                <nav className="w-100 bgPr py-4">
                    <h3 className="text-center text-white mb-0">Create your profile</h3>
                </nav>
                <div className="mt-md-5 position-relative py-4 container d-flex flex-column flex-md-row pt-5 align-items-center align-items-md-start justify-content-center justify-content-md-around">
                    <div className=" col-md-3 col-lg-3">
                        <div className="text-center position-relative" style={{height: 250, width: 250, borderRadius: '50%', border: "1px solid #000",}}>
                            <img
                                className="col-7 col-md-12 mx-auto img-fluid"
                                style={{ borderRadius: "50%", height: "250px", width: "250px" }}
                                src={image.preview ? image.preview : user.pic ? `${user.pic}` : profile}
                                alt="profile.png"
                            />
                            {/* <button
              onClick={handleUpload}
              className='position-absolute bg-secondary border-0 d-flex justify-content-center align-items-center fw-bold text-light me-5 me-md-0 p-md-3'
              style={{
                width: '25px',
                height: '25px',
                borderRadius: '50px',
                top: '80%',
                right: '12%',
              }}>
              +
            </button> */}
                            <div className="">
                                <input
                                    id="fileupload"
                                    type="file"
                                    onChange={handleImgChange}
                                    accept="image/*"
                                    className="mt-2 mt-md-auto align-self-start ms-auto upload py-2 bg-secondary position-absolute text-secondary"
                                    style={{
                                        width: "15px",
                                        height: "15px",
                                        borderRadius: "50px",
                                        top: "80%",
                                        right: "12%",
                                        display: "block",
                                        background: "#000"
                                    }}
                                />
                            </div>
                        </div>
                        <div>
                            <p className="d-none text-center d-md-block mt-4 fs-5">{user.fullName ? user.fullName.split(" ")[0] : "User Name"}</p>
                        </div>
                    </div>
                    <p className="d-md-none">Upload Photo</p>
                    <div className=" col-10 col-md-6">
                        {/* <h3 className="text-center d-none d-md-block mb-4">Create your profile</h3> */}
                        <form id="form" onSubmit={handleSubmit} className="d-flex flex-column p-4 p-md-5 rounded" style={{ background: "white" }}>
                            <input className="mb-3 py-2 py-md-3 px-2" type="text" placeholder="Full Name" value={fullname} onChange={(e) => setfullname(e.target.value)} />
                            <input className="mb-3 py-2 py-md-3 px-2" type="email" placeholder="Email" value={email} onChange={(e) => setemail(e.target.value)} />
                            <DatePicker className="mb-3 py-2 py-md-3 px-2 w-100" placeholderText="mm/dd/yyyy" selected={startDate} onChange={(date: any) => setStartDate(date)} />
                            {/* <input className="mb-3 py-2 py-md-3 px-2 rounded border border-1" type="date" placeholder="Birth Date" /> */}
                            <div className="d-flex justify-content-center gap-3">
                                <Link to="/">
                                    <button className="bg-transparent border-0 py-2 py-md-3 fw-bold text-Pr">CANCEL</button>
                                </Link>
                                <button
                                    type="submit"
                                    className="py-2 px-3 py-md-3 px-md-4 px-lg-5 fw-bold rounded-pill hover_down bgPr"
                                    style={{
                                        color: "white",
                                        border: "1px solid white"
                                    }}
                                >
                                    {"SAVE"}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
};

export default Profile;

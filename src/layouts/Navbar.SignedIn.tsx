import Button from "../components/Button";
import logo from "../assets/blank.jpg";
import { Link } from "react-router-dom";
import React from "react";
import { Spin as Hamburger } from "hamburger-react";

const Navbar = () => {

  return (
    <div className='w-100 py-3 bg-light'>
      <div className='container d-flex justify-content-between align-items-center'>
        <div>
          <Link to='/'>
            <img src={logo} alt='logo.png' height='40' width='100' />
          </Link>
        </div>
        <div className='d-flex gap-2 gap-md-4 justify-content-between'>
          <Hamburger
            size={32}
            onToggle={(toggled) => {
              if (toggled) {
                // open a menu
              } else {
                // close a menu
              }
            }}
            color='#000'
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

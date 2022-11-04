import React from "react";
import Button from "../components/Button";
import Logo from "../assets/Logo.svg";
import { Link } from "react-router-dom";
import { Spin as Hamburger } from "hamburger-react";
import Dropdown from "../components/Dropdown";

const Navbar = () => {
  const [ShowDrop, setShowDrop] = React.useState<Boolean>(false)

  function Show () {
    setShowDrop(true)
  }
  function Hide () {
    setShowDrop(false)
  }

  return (
    <div className='w-100 py-3 bgPr'>
      <div className='container d-flex justify-content-between position-relative align-items-center'>
        <div>
          {/* <Link to='/'>
            <img src={Logo} alt='logo.png' height='40' width='100' />
          </Link> */}
        </div>
        <div className='d-flex gap-2 gap-md-4 justify-content-between' style={{zIndex: 5}}>
          <Hamburger
            size={32}
            onToggle={(toggled) => {
              if (toggled) {
                Show()
              } else {
                Hide()
              }
            }}
            color='#fff'
          />
        </div>
        {ShowDrop && <Dropdown />}
      </div>
    </div>
  );
};

export default Navbar;

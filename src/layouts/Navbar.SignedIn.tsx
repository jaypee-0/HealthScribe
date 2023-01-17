import React from "react";
import Button from "../components/Button";
import Logo from "../assets/Logo.svg";
import { Link } from "react-router-dom";
import { Spin as Hamburger } from "hamburger-react";
import Dropdown from "../components/Dropdown";
import { useuserAuth } from "../context/UserAuth";

const Navbar = () => {
  
  const { user }: any = useuserAuth();
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
            color='#ddd'
          />
        </div>
        {ShowDrop && <Dropdown />}
      </div>
    </div>
  );
};

export default Navbar;

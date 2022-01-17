import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Squeeze as Hamburger } from "hamburger-react";
import logo from "../Assets/NSP Logo.svg";
import ReactParticle from "../Components/ReactParticle";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };

  var prevScrollpos = window.pageYOffset;
  window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("navbar").style.top = "0";
    } else {
      document.getElementById("navbar").style.top = "-100px";
    }
    prevScrollpos = currentScrollPos;
  };
  return (
    <div>
      <ReactParticle />
      <div className="navbar" id="navbar">
        <NavLink to="./">
          <img src={logo} alt="" className="logo" />
        </NavLink>
        <ul className={click ? "nav-links active" : "nav-links"}>
          <li>
            <NavLink to="./" className="links" onClick={handleClick}>
              Home
            </NavLink>
          </li>

          <li>
            <NavLink to="./Services" className="links" onClick={handleClick}>
              Services
            </NavLink>
          </li>

          <li>
            <NavLink to="./Testimonials" className="links" onClick={handleClick}>
              Testimonials
            </NavLink>
          </li>

          <li>
            <NavLink to="./About" className="links" onClick={handleClick}>
              About
            </NavLink>
          </li>

          <li>
            <NavLink to="./Contact" className="links" onClick={handleClick}>
              Contact
            </NavLink>
          </li>
        </ul>
        <div className="hamburger">
          <Hamburger toggled={click} toggle={setClick} size={25} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

import React, { useState } from "react";
import { Link } from "react-router-dom";
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
        <Link to="./">
          <img src={logo} alt="" className="logo" />
        </Link>
        <ul className={click ? "nav-links active" : "nav-links"}>
          <li>
            <Link to="./" className="links" onClick={handleClick}>
              Home
            </Link>
          </li>

          <li>
            <Link to="./Services" className="links" onClick={handleClick}>
              Services
            </Link>
          </li>

          <li>
            <Link to="./Testimonials" className="links" onClick={handleClick}>
              Testimonials
            </Link>
          </li>

          <li>
            <Link to="./About" className="links" onClick={handleClick}>
              About
            </Link>
          </li>

          <li>
            <Link to="./Contact" className="links" onClick={handleClick}>
              Contact
            </Link>
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

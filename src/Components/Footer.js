import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { IoLogoWhatsapp } from "react-icons/io";
// import { Link } from "react-router-dom"; 
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "../Pages/Home";
// import Testimonials from "../Pages/Testimonials";
// import Services from "../Pages/Services";
// import About from "../Pages/About";
// import Contact from "../Pages/Contact";

const Footer = () => {
  return (
      <footer>
      <div className="waves">
          <div className="wave" id="wave1"></div>
          <div className="wave" id="wave2"></div>
          <div className="wave" id="wave3"></div>
          <div className="wave" id="wave4"></div>
        </div>
        <div className="footer-content">
        
        <div className="footer-icons">
          <FaFacebookF
            className="Social-icons"
          />
          <RiInstagramFill
            className="Social-icons"
          />
          <FaTwitter
            className="Social-icons"
          />
          <FaLinkedinIn
            className="Social-icons"
          />
          <IoLogoWhatsapp
            className="Social-icons"
            
          />
        </div>
        <ul className="Footer-map">
          <li>
            <a href="./" className="footer-links">
              Home
            </a>
          </li>

          <li>
            <a href="./Services" className="footer-links">
              Services
            </a>
          </li>

          <li>
            <a href="./Testimonials" className="footer-links">
              Testimonials
            </a>
          </li>

          <li>
            <a href="./About" className="footer-links">
              About
            </a>
          </li>

          <li>
            <a href="./Contact" className="footer-links">
              Contact
            </a>
          </li>
        </ul>
        <p> &copy; 2022 NSP Stacks Solutions | All Rights Reserved</p>
        </div>
      </footer>
  );
};
export default Footer;

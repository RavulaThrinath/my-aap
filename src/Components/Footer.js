import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { IoLogoWhatsapp } from "react-icons/io";
import { Link } from "react-router-dom";

const Footer = (props) => {
  const twitterURL =
    "https://twitter.com/Praveen70376822?t=MI1hyxac8XKPxyHkXnhH_g&s=08";
  const instaURL =
    "https://instagram.com/nsp_stacks_solutions?utm_medium=copy_link";
  const whtasappURL =
    "https://api.whatsapp.com/send?phone=+91-9100668566&text=Hello!";
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
          <a href=".">
            <FaFacebookF className="Social-icons" />
          </a>
          <a href={instaURL} target="_blank" rel="noopener noreferrer">
            <RiInstagramFill className="Social-icons" />
          </a>
          <a href={twitterURL} target="_blank" rel="noopener noreferrer">
            <FaTwitter className="Social-icons" />
          </a>
          <a href="." target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn className="Social-icons" />
          </a>
          <a href={whtasappURL} target="_blank" rel="noopener noreferrer">
            <IoLogoWhatsapp className="Social-icons" />
          </a>
        </div>
        <ul className="Footer-map">
          <li>
            <Link to="./" className="footer-links">
              Home
            </Link>
          </li>

          <li>
            <Link to="./Services" className="footer-links">
              Services
            </Link>
          </li>

          <li>
            <Link to="./Testimonials" className="footer-links">
              Testimonials
            </Link>
          </li>

          <li>
            <Link to="./About" className="footer-links">
              About
            </Link>
          </li>

          <li>
            <Link to="./Contact" className="footer-links">
              Contact
            </Link>
          </li>
        </ul>
        <p>
          &copy; 2022
          <a className="Title-link" href="./" alt="">
            NSP Stacks Solutions
          </a>{" "}
          | All Rights Reserved
        </p>
      </div>
    </footer>
  );
};
export default Footer;

import React from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdLocationOn, MdEmail } from "react-icons/md";
import { FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { IoLogoWhatsapp } from "react-icons/io";
import Form from "../Components/Form";
// import emailjs from "emailjs-com";

const Contact = () => {
  const twitterURL =
    "https://twitter.com/Praveen70376822?t=MI1hyxac8XKPxyHkXnhH_g&s=08";
  const instaURL =
    "https://instagram.com/nsp_stacks_solutions?utm_medium=copy_link";
  const whtasappURL =
    "https://api.whatsapp.com/send?phone=9100668566&text=Hello!";
  return (
    <div className="Contact-main">
      <h1 className="contact-title">
        {`Any Question or Remarks? \n Just Write us a Message..`}
      </h1>
      <div className="form-container">
        <div className="container-left">
          <div className="left1">
            <div className="left-title">Contact Information</div>
            <div className="left-subtitle">
              Fill up the form and our team will <br /> get back to you within
              24 hours
            </div>
          </div>
          <div className="left2">
            <div className="icons">
              <BsFillTelephoneFill
                style={{ color: "#ffffff", width: "16px", height: "16px" }}
              />
              <span>+91-9100668566</span>
            </div>
            <div className="icons">
              <MdEmail
                style={{ color: "#ffffff", width: "16px", height: "16px" }}
              />
              <span>nspstackssolutions@gmail</span>
            </div>
            <div className="icons">
              <MdLocationOn
                style={{ color: "#ffffff", width: "16px", height: "16px" }}
              />{" "}
              <span>Medchal, Telangana</span>
            </div>
          </div>
          <div className="left3">
            <a href={instaURL} target="_blank" rel="noopener noreferrer">
              <RiInstagramFill
                style={{ color: "#ffffff", width: "16px", height: "16px" }}
              />
            </a>
            <a href={twitterURL} target="_blank" rel="noopener noreferrer">
              <FaTwitter
                style={{ color: "#ffffff", width: "16px", height: "16px" }}
              />
            </a>
            <a href={whtasappURL} target="_blank" rel="noopener noreferrer">
              <IoLogoWhatsapp
                style={{ color: "#ffffff", width: "16px", height: "16px" }}
              />
            </a>
          </div>
        </div>
        <div className="container-right">
          <Form />
          
        </div>
      </div>
    </div>
  );
};

export default Contact;

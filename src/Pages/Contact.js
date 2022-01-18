import React, { useEffect } from "react";
import {
  FaPhoneAlt,
  FaTwitter,
  FaEnvelope,
  FaInstagramSquare,
  FaWhatsappSquare,
  FaMapMarkerAlt,
} from "react-icons/fa";
import Form from "../Components/Form";
import Aos from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  const twitterURL =
    "https://twitter.com/Praveen70376822?t=MI1hyxac8XKPxyHkXnhH_g&s=08";
  const instaURL =
    "https://instagram.com/nsp_stacks_solutions?utm_medium=copy_link";
  const whtasappURL =
    "https://api.whatsapp.com/send?phone=+91-9100668566&text=Hello!";
  return (
    <div className="Contact-main">
      <h1
        className="contact-title"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        data-aos-duration="500"
      >
        {`Any Question or Remarks? \n Just Write us a Message..`}
      </h1>
      <div
        className="form-container"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        data-aos-duration="700"
      >
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
              <FaPhoneAlt
                style={{ color: "#EEEEEE", width: "16px", height: "16px" }}
              />
              <span>+91-9100668566</span>
            </div>
            <div className="icons">
              <FaEnvelope
                style={{ color: "#EEEEEE", width: "16px", height: "16px" }}
              />
              <span>nspstackssolutions@gmail.com</span>
            </div>
            <div className="icons">
              <FaMapMarkerAlt
                style={{ color: "#EEEEEE", width: "16px", height: "16px" }}
              />{" "}
              <span>Medchal, Telangana</span>
            </div>
          </div>
          <div className="left3">
            <a href={instaURL} target="_blank" rel="noopener noreferrer">
              <FaInstagramSquare
                style={{ color: "#EEEEEE", width: "16px", height: "16px" }}
              />
            </a>
            <a href={twitterURL} target="_blank" rel="noopener noreferrer">
              <FaTwitter
                style={{ color: "#EEEEEE", width: "16px", height: "16px" }}
              />
            </a>
            <a href={whtasappURL} target="_blank" rel="noopener noreferrer">
              <FaWhatsappSquare
                style={{ color: "#EEEEEE", width: "16px", height: "16px" }}
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

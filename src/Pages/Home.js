import React, { useState } from "react";
import RightImage from "../Assets/RightImage.svg";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Form from "../Components/Form";
import Testimonials from "../Pages/Testimonials";
import Quotes from "../Components/Quotes";
import WhyWe from "../Components/WhyWe";
import Teams from "../Components/Teams"

const Home = () => {
  // Down Arrows
  const [arrow, setArrow] = useState(true);
  const arrowVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 50) {
      setArrow(false);
    } else if (scrolled <= 500) {
      setArrow(true);
    }
  };
  window.addEventListener("scroll", arrowVisible);

  // Dialog Box
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <div className="Home">
        <div className="home-content">
          <div className="left">
            <div className="Main-title1">Join the Revolutionary</div>
            <div className="Main-title2">NSP Stacks Solutions</div>
            <div className="Main-title3">
              It's not how much money you make, but how much money you keep, how
              hard it works for you, and how many generations you keep it for.
            </div>
            <button className="client-btn" onClick={handleClickOpen}>
              Become Client
            </button>
            <Dialog
              className="Dialog-box"
              style={{ background: "#000000", color: "#ffffff" }}
              open={open}
              onClose={handleClose}
            >
              <DialogTitle style={{ fontFamily: "Poppins", fontWeight: "600" }}>
                Interested in becoming a Client?
              </DialogTitle>
              <DialogContent>
                <DialogContentText
                  className="Dialog-des"
                  style={{ fontFamily: "Lato", margin: " 0 0 10px 0" }}
                >
                  Dont hesitate to contact us. We're available 24/7 <br /> and
                  look forward to hearing from you.
                </DialogContentText>
                <Form />
              </DialogContent>
              <DialogActions>
                <button className="cancel-btn" onClick={handleClose}>
                  Cancel
                </button>
                <button className="submit-btn" onClick={handleClose}>
                  Submit
                </button>
              </DialogActions>
            </Dialog>
          </div>
          <div className="Right">
            <img src={RightImage} alt="" />
          </div>
        </div>
        <div className="box" style={{ display: arrow ? "inline" : "none" }}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <Quotes />
      <WhyWe />
      <Testimonials />
      <Teams />
    </div>
  );
};

export default Home;

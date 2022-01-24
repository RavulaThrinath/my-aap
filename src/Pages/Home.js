import React, { useState } from "react";
import RightImage from "../Assets/Right Image.png";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Form from "../Components/Form";
import Testimonials from "../Pages/Testimonials";
import Quotes from "../Components/Quotes";
import WhyWe from "../Components/WhyWe";
import Teams from "../Components/Teams";
import { Helmet } from "react-helmet";

//
//
//
//
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

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
    <div className="landing">
      <Helmet>
        <title>NSP Stacks Solutions</title>
        <meta
          name="description"
          content="We NSP Stacks Solutions are indulged in offering investment advisory. Being a specialist in investing, we are working effeciently to deliver superior results in shorter times."
        />
        <meta
          name="keywords"
          content="Investing, Stocks, Stock Market, Trading"
        />
      </Helmet>
      <div className="Home">
        <div className="home-content">
          <div className="left">
            <div className="Main-title1">Join the Revolutionary</div>
            <div className="Main-title2">NSP Stacks Solutions</div>
            <div className="Main-title3">
              An Investment in Knowledge Always Pays the Best Interest
            </div>
            <button className="client-btn" onClick={handleClickOpen}>
              Become Client
            </button>
            <BootstrapDialog
              onClose={handleClose}
              aria-labelledby="customized-dialog-title"
              open={open}
            >
              <BootstrapDialogTitle
                id="customized-dialog-title"
                onClose={handleClose}
              >
                Interested in Becoming a client ? Enter your details and We will
                contact you.
              </BootstrapDialogTitle>
              <DialogContent>
                <DialogContentText></DialogContentText>
                <Form />
              </DialogContent>
            </BootstrapDialog>
          </div>
          <div className="Right">
            <img className="rightimg" src={RightImage} alt="" />
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

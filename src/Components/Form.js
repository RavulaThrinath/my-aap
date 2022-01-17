import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

const Form = (props) => {
  const [snackopen, setSnackOpen] = useState(false);

  const snackbarClick = () => {
    snackopen(true);
  };

  const snackbarClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setSnackOpen(false);
  };
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_6lpaeki",
        "template_i0ezitq",
        e.target,
        "user_U7ZiZc36EM1CcKPhTxJGu"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <div>
      <form onSubmit={sendEmail} className="formclass">
        <div className="group">
          <input type="text" name="name" required />
          <span className="highlight"></span>
          <span className="bar"></span>
          <label className="required">Name</label>
        </div>

        <div className="group">
          <input type="contact" name="number" required />
          <span className="highlight"></span>
          <span className="bar"></span>
          <label className="required">Number</label>
        </div>
        <div className="group">
          <input type="email" name="email" required />
          <span className="highlight"></span>
          <span className="bar"></span>
          <label className="required">Email</label>
        </div>
        <div className="group">
          <input type="text" name="message" required />
          <span className="highlight"></span>
          <span className="bar"></span>
          <label className="required">Message</label>
        </div>
        <button className="Send-button" onClick={snackbarClick}>
          <div class="svg-wrapper-1">
            <div class="svg-wrapper">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path
                  fill="currentColor"
                  d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                ></path>
              </svg>
            </div>
          </div>
          <span>Send</span>
        </button>
        <Snackbar
          style={{ zIndex: "10000000000000" }}
          open={snackopen}
          autoHideDuration={6000}
          onClose={snackbarClose}
        >
          <Alert
            style={{ zIndex: "10000000000000" }}
            onClose={snackbarClose}
            severity="success"
            sx={{ width: "100%" }}
          >
            This is a success message!
          </Alert>
        </Snackbar>
      </form>
    </div>
  );
};

export default Form;

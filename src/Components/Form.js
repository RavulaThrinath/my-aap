import React from "react";
import emailjs from "@emailjs/browser";

const Form = () => {
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
      <form  onSubmit={sendEmail} className="formclass">
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
          <input type="text" name="number" required />
          <span className="highlight"></span>
          <span className="bar"></span>
          <label className="required">Message</label>
        </div>
      </form>
    </div>
  );
};

export default Form;

import React from "react";
import Icon1 from "../Assets/avatar_icon_1.svg";
import Icon2 from "../Assets/avatar_icon_3.svg";

const Testimonials = () => {
  return (
    <div className="test-container">
      <div className="test-content">
        <h1 className="test-title">Testimonials</h1>
        <div className="tests">
          {/*1st Testimonial */}
          <div className="maintest">
            <div className="test">
              <div className="image1">
                <img src={Icon1} alt="" />
              </div>
              <div className="test-text">
                Since joining the NSP Stacks Solutions and following their
                advice I have seen some great returns. Thank you NSP Stacks
                Solutions for teaching me so much and for the gains I have
                through long term investing.
              </div>
            </div>
            <div className="test-name">
              <span className="span1">Mithun</span>
              <span className="span2">Data Scientist</span>
            </div>
          </div>
          {/*2nd Testimonial */}
          <div className="maintest">
            <div className="teste">
              <div className="image1">
                <img src={Icon2} alt="" />
              </div>
              <div className="test-text">
                Great practical advice for long-term investors that can help you
                beat the market without losing your sanity. on the whole I am
                very happy with their recommendations. A happy customer since 1
                year.
              </div>
            </div>
            <div className="test-namee">
              <span className="span1">Srikanth</span>
              <span className="span2">Software Engineer</span>
            </div>
          </div>
          {/*3rd Testimonial */}
          <div className="maintest">
            <div className="test">
              <div className="image1">
                <img src={Icon1} alt="" />
              </div>
              <div className="test-text">
                One of the best in the advisory space. I Have an overall good
                experience of their recommendations. I would strongly recommend
                NSP Stacks solutions to anyone wanting to achieve better
                financial outcomes.
              </div>
            </div>
            <div className="test-name">
              <span className="span1">Harish Pavan</span>
              <span className="span2">Software Engineer</span>
            </div>
          </div>
          {/*4th Testimonial */}
          <div className="maintest">
            <div className="teste">
              <div className="image1">
                <img src={Icon2} alt="" />
              </div>
              <div className="test-text">
                <div className="text1">
                  First year with the NSP Stacks solutions. Some stocks are up,
                  some are down. But I learned how to think about investing and
                  that was well worth the price of admission. Amazing results in
                  financial growth.
                </div>
              </div>
            </div>
            <div className="test-namee">
              <span className="span1">Sai Kiran</span>
              <span className="span2">Doctor</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

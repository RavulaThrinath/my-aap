import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Icon1 from "../Assets/avatar_icon_1.svg";
import Icon2 from "../Assets/avatar_icon_3.svg";

const Testimonials = () => {
  useEffect(() => {
    Aos.init({ once: false });
  }, []);
  return (
    <div className="test-container">
      <div className="test-content">
        <h1
          className="test-title"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
        >
          Testimonials
        </h1>
        <div className="tests">
          {/*1st Testimonial */}
          <div className="maintest" data-aos="fade-up">
            <div className="test">
              <div className="image1">
                <img src={Icon1} alt="" />
              </div>
              <div className="test-text">
                Since joining the{" "}
                <span style={{ color: "#6ba5a8" }}> NSP Stacks solutions </span>{" "}
                and following their advice I've seen some great returns. Thank
                you NSP Stacks Solutions for teaching me so much and for the
                gains I have through long term investing.
              </div>
            </div>
            <div className="test-name">
              <span className="span1">Mithun</span>
              <span className="span2">Data Scientist</span>
            </div>
          </div>
          {/*2nd Testimonial */}
          <div className="maintest" data-aos="fade-up">
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
          <div className="maintest" data-aos="fade-up">
            <div className="test">
              <div className="image1">
                <img src={Icon1} alt="" />
              </div>
              <div className="test-text">
                One of the best in the advisory space. I Have an overall good
                experience of their recommendations. I would strongly recommend
                <span style={{ color: "#6ba5a8" }}> NSP Stacks solutions </span>
                to anyone wanting to achieve better financial outcomes.
              </div>
            </div>
            <div className="test-name">
              <span className="span1">Harish Pavan</span>
              <span className="span2">Software Engineer</span>
            </div>
          </div>
          {/*4th Testimonial */}
          <div className="maintest" data-aos="fade-up">
            <div className="teste">
              <div className="image1">
                <img src={Icon2} alt="" />
              </div>
              <div className="test-text">
                <div className="text1">
                  First year with the{" "}
                  <span style={{ color: "#6ba5a8" }}>
                    {" "}
                    NSP Stacks solutions.{" "}
                  </span>
                   Some stocks are up, some are down. But I learned how to
                  think about investing and that was well worth the price of
                  admission. Amazing results in financial growth.
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

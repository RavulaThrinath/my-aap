import React, { useEffect } from "react";
import Refund from "../Assets/Get Cash.svg";
import Returns from "../Assets/Account.svg";
import Customer from "../Assets/Customer.svg";
import Aos from "aos";
import "aos/dist/aos.css";
import TheTems from "./TheTems";

const WhyWe = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div>
      <h1
        className="WCU-title"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        data-aos-duration="700"
      >
        Why Choose Us
      </h1>
      <div className="why-container">
        <div className="point" data-aos="fade-right" data-aos-duration="500">
          <img className="returns" src={Returns} alt="" />
          <h1>High Returns</h1>
          <p>
            Returns matter a lot. We offer strong and high returns as you didn't expect.
          </p>
        </div>
        <div className="point" data-aos="fade-right" data-aos-duration="800">
          <img className="returns" src={Refund} alt="" />
          <h1>Return Policy</h1>
          <p>
            If we failed to deliver your returns, We will pay you 8% interest to
            your investment.
          </p>
        </div>
        <div className="point" data-aos="fade-right" data-aos-duration="1100">
          <img className="returns" src={Customer} alt="" />
          <h1>24x7 Support</h1>
          <p>
            Direct connection matter, so 24/7 phone support will be available
            for all customers.
          </p>
        </div>
      </div>
      <TheTems />
    </div>
  );
};
export default WhyWe;

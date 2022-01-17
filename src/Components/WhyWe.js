import React from "react";
import Refund from "../Assets/Get Cash.svg";
import Returns from "../Assets/Account.svg";
import Customer from "../Assets/Customer.svg";
import ScrollReveal from 'scrollreveal';

const WhyWe = () => {
  ScrollReveal().reveal(".WCU-title", {
    delay: 300,
    origin: "left",
    distance: "50px"
  });
  return (
    <div>
      <h1 className="WCU-title">Why Choose Us</h1>
      <div className="why-container">
        <div className="point">
          <img src={Returns} alt="" />
          <h1>High Returns</h1>
          <p>
            Returns matter a lot. We offer strong and high returns as you
            did not expect.
          </p>
        </div>
        <div className="point">
          <img src={Refund} alt="" />
          <h1>Return Policy</h1>
          <p>
            If we failed to deliver your returns, We will pay you 8%
            interest to your investment.
          </p>
        </div>
        <div className="point">
          <img src={Customer} alt="" />
          <h1>24x7 Support</h1>
          <p>
            Direct connection matter, so 24/7 phone support will be available
            for all customers.
          </p>
        </div>
      </div>
    </div>
  );
};
export default WhyWe;

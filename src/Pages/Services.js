import React, { useEffect } from "react";
import WhyWe from "../Components/WhyWe";
import Aos from "aos";
import "aos/dist/aos.css";
import {Helmet} from "react-helmet";

const Services = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div>
    <Helmet>
        <title>NSP Stacks Solutions | Services</title>
        </Helmet>
      <div
        className="services-container"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        data-aos-duration="500"
      >
        <h1 className="services-text">
          <h1 className="services-title">services</h1>
          We <strong style={{color:"#00ADB5"}}>NSP Stacks Solutions</strong> are indulged in offering
          investment advisory. we are investing clients investment in a right
          path and delivering the decent profits to them. Being a specialist in
          investing, we are effeciently working to deliver superior results in
          shorter times. By delivering decent profits to clients now they are
          looking forward to invest again with us. Currently we have more than
          10 active clients.
        </h1>
      </div>
      <WhyWe />
    </div>
  );
};

export default Services;

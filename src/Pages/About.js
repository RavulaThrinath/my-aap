import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Teams from "../Components/Teams";
import { Helmet } from "react-helmet";

function About() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div>
      <Helmet>
        <title>NSP Stacks Solutions | About Us</title>
      </Helmet>
      <div
        className="about-container"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        data-aos-duration="500"
      >
        <h1 className="about-text">
          <h1 className="about-title">About US</h1>
          <p className="tessst">
            We founded this company in June, 2021. We all have faced very tough
            situation during the lockdown. Covid taught us don't rely on single
            source of income. so we decided to think how to earn money by
            multiple hustles and then decided to invest in stock market. We
            thought investing in the stock market was bit risk. Intially we
            didn't get profits. Then we took suggestions from my uncle who has
            been investing in stocks from past 20 years. He helped us to get
            nice profits, With the help of him we founded the company. We
            started to recommend stocks to my friends and colleagues which gave
            a huge profits to them. Now currently we have more than 10 active
            clients.
          </p>
        </h1>
      </div>
      <Teams />
    </div>
  );
}

export default About;

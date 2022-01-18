import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Teams from "../Components/Teams";

function About() {
 
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div>
      <div
        className="about-container"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        data-aos-duration="500"
      >
        <h1 className="about-text">
          <h1 className="about-title">About US</h1>
          <p className="tessst">
            Intially we founded the company in 2021 june. We all have faced
            tough situation during the lockdown. Covid-19 taught us don't rely
            on single source of income. so we decided to think how to earn money
            by multiple hustles and then decided to invest in the stock market. We
            thought investing in the stock market was bit risk. Then finally we decided
            to invest with lower amount. Intially we didn't get profits. Then we
            took suggestions from my uncle who has been investing in stocks from past
            20 years. He helped us to get nice profits, With the help of him we
            founded the company. We started to recommend some stocks to my
            friends which gave a huge profits to them. Now currently we have
            more than 10 active clients.
          </p>
        </h1>
      </div>
      <Teams />
    </div>
  );
}

export default About;

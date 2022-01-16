import React from "react";
import Aboutimage from "../Assets/LeftImage.svg";
import Teams from "../Components/Teams"

function About  ()  {
  return (
    <div>
      <div className="about-container">
        <div>
          <img src={Aboutimage} className="about-image" alt="" />
        </div>
        <div className="about-right">
          <div className="about-content">
          <h1 className="name">About Us</h1>
            <p>
              {`Intially we founded the company in 2021 june.
              We all have faced tough situation during lockdown.
              Covid -19 tought us don't rely on single source of income.
              so,we decided to think how to earn money by multiple hustles.
              then we decided to invest in stock market.We thought investing in stock market was risk.
              Then finally we decided to invest with lower amount.Intially we didn't get profits.
              Then we took suggestions from my uncle who is investing in stocks from past 20 years.
              He helped us to get nice profits.With the help of him we founded the company.
              We started to recommend some stocks to my friends which gave a huge profits to them.
              Now currently we have more than 10 active clients.`}
            </p>
          </div>
        </div>
      </div>
      <Teams/>
    </div>
  );
};

export default About;

import React from "react";
import Team1 from "../Assets/Team1.png";
import Team2 from "../Assets/Team2.png";
import Team3 from "../Assets/Team3.png";

const Team = () => {
  return (
    <>
      <h1 className="Team-title"> meet the team</h1>
      <div className="team-list">
        <div className="founder">
          <div className="img1">
            <img src={Team1} alt="" />
          </div>
          <div className="Founder-details">
            <h2>N. Sai Prakash Kumar Reddy</h2>
            <h3>Founder</h3>
          </div>
        </div>
        <div className="founder">
          <div className="img1">
            <img src={Team2} alt="" />
          </div>
          <div className="Founder-details">
            <h2>N. Sai Praveen Kumar Reddy</h2>
            <h3>CEO, Co-Founder</h3>
          </div>
        </div>
        <div className="founder">
          <div className="img1">
            <img src={Team3} alt="" />
          </div>
          <div className="Founder-details">
            <h2>K. Sai Pratap Reddy</h2>
            <h3>Co-Founder, Data Analyst</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;

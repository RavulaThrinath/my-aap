import React, { useEffect } from "react";
// import Team1 from "../Assets/Team1.png";
// import Team2 from "../Assets/Team2.png";
// import Founder3 from "../Assets/Team3.png";
import Founder2 from "../Assets/Praveen Image.jpg";
import Aos from "aos";
import "aos/dist/aos.css";

const Team = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <h1
        className="Team-title"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
      >
        meet the team
      </h1>
      <div className="team-list">
        <div className="founder" data-aos="fade-right" data-aos-duration="800">
          <div className="img1">
            <img src={Founder2} alt="" />
          </div>
          <div className="Founder-details">
            <h2>N. Sai Praveen Kumar Reddy</h2>
            <h3> Founder</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;

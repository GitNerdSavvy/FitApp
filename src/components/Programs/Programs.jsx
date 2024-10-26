import React from "react";
import "./programs.css";
import { programsData } from "../../data/programsData";
import RightArrow from "../../assets/rightArrow.png";
const Programs = () => {
  return (
    <div className="programs">
      <div className="programs-heading">
        <span className="text-stroke">Explore our</span>
        <span>Programs</span>
        <span className="text-stroke">To shape you</span>
      </div>

      <div className="programs-categories">
        {programsData.map((program) => (
          <div className="category">
            {program.image}
            <span>{program.heading}</span>
            <span>{program.details}</span>
            <div className="join-now"><span>Join Now</span><img src={RightArrow} alt='asd'/></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Programs;

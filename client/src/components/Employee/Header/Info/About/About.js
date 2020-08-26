import React from "react";
import "./About.scss";
import Title from "../Title/Title";

const About = (props) => {
   return (
      <div className="employee-about">
         <Title titleText="Some words about me:" />
         <span className="employee-about-text">{props.employeeAbout}</span>
      </div>
   );
};

export default About;

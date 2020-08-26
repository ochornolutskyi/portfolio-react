import React from "react";
import "./Title.scss";

const Title = (props) => {
   return <p className="employee-title">{props.titleText}</p>;
};
export default Title;

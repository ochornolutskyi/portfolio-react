import React from "react";
import "./Name.scss";

const Name = (props) => {
   return (
      <p className="employee-info-name">
         <span>{props.employeeName.toUpperCase().trim()}</span>
         <span>{props.employeeSurname.toUpperCase().trim()}</span>
      </p>
   );
};

export default Name;
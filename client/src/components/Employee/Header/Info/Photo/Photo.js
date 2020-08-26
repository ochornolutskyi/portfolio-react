import React from "react";
import "./Photo.scss";

const Photo = (props) => {
   const name =
      props.employeeName.toLowerCase().trim() + '-' +
      props.employeeSurname.toLowerCase().trim();
   const photo = require(`../../../../../${props.photo}`);
   

   return (
      <div className="employee-photo">
         <img src={photo} alt="employee" />
      </div>
   );
};

export default Photo;

import React from "react";
import "./Info.scss";
import Photo from "./Photo/Photo";
import StylesList from "./StylesList/StylesList";
import About from "./About/About";
import Name from "./Name/Name";

const Info = (props) => {
   return (
      <div className="employee-info">
         <Name employeeName={props.employeeInfo.name} employeeSurname={props.employeeInfo.surname}/>
         <Photo 
         photo={props.employeeInfo.photo}
         employeeName={props.employeeInfo.name} employeeSurname={props.employeeInfo.surname}
         />
         <StylesList employeeStyles={props.employeeInfo.styles} />
         <About employeeAbout={props.employeeInfo.about} />
      </div>
   );
};

export default Info;

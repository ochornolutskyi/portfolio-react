import React from "react";
import "./StylesList.scss";
import Title from "../Title/Title";

const StylesList = (props) => {
   const styleList = props.employeeStyles.map((style,index)=>{
      return <li key={index}>{style}</li>
   })
   return (
      <div className="employee-styles">
         <Title titleText='My favourite styles: '/>
         <ul className="employee-styles-ul">
           {styleList}
         </ul>
      </div>
   );
};

export default StylesList;

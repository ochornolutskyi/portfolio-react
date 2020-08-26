import React from "react";
import "./Preview.scss";

const Preview = (props) => {
   const modifiedLink = props.project.title.replace(/ /gi, "-").toLowerCase();
   const imagePreview =  require(`../../../../${props.project.preview}`);

   return (
      <div id={props.project.id} className={props.classes}>
         <a href={`/${modifiedLink}`}>
            <img src={imagePreview} alt="project" />
            <p>{props.project.title}</p>
         </a>
      </div>
   );
};

export default Preview;

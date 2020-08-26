import React from "react";
import "./ProjectName.scss";

const ProjectName = (props) => {
   return (
      <div className="project-info-name__container">
         <h1 className="project-info-name">
           {props.projectName}
         </h1>
      </div>
   );
};

export default ProjectName;

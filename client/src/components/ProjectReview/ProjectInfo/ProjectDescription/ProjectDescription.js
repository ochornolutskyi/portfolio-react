import React from "react";
import "./ProjectDescription.scss";
import ProjectInfoTitle from "../ProjectInfoTitle/ProjectInfoTitle";

const ProjectDescription = (props) => {
   return (
      <div className="project-info-description">
         <ProjectInfoTitle infoTitle={'project description'}/>
         <p>
            {props.projectDescription}
         </p>
      </div>
   );
};

export default ProjectDescription;

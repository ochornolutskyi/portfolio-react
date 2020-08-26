import React from "react";
import "./ProjectInfo.scss";
import ProjectName from "./ProjectName/ProjectName";
import ProjectData from "./ProjectData/ProjectData";
import ProjectDescription from "./ProjectDescription/ProjectDescription";

const ProjectInfo = (props) => {
   return (
      <div className="project-Info">
         <ProjectName projectName={props.projectInfo.title} />
         <ProjectData projectData={props.projectInfo.params} />
         <ProjectDescription
            projectDescription={props.projectInfo.description}
         />
      </div>
   );
};

export default ProjectInfo;

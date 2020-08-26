import React from "react";
import "./ProjectData.scss";
import ProjectInfoTitle from "../ProjectInfoTitle/ProjectInfoTitle";

const ProjectData = (props) => {
   const paramsList = (params) => {
      let list = [];
      for (let name in params) {
         list.push(
            <li key={name}>
               <span>{name}: </span>
               <span>{params[name]}</span>
            </li>
         );
      }
      return list;
   };

   return (
      <div className="project-info-data">
         <ProjectInfoTitle infoTitle={"CHARACTERISTICS of the OBJECT"} />
         <ul className="project-info-data__list">
            {paramsList(props.projectData)}
         </ul>
      </div>
   );
};

export default ProjectData;

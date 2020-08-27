import React, { useState, useEffect } from "react";
import "./ProjectReview.scss";
import ProjectsNav from "../ProjectsNav/ProjectsNav";
import GalleryContainer from "./GalleryContainer/GalleryContainer";
import ProjectInfo from "./ProjectInfo/ProjectInfo";
import Arrow from "../Arrow/Arrow";

const ProjectReview = (props) => {
   const navClasses = {
      navClass: "projectReview-nav",
      navUlClass: "projectReview-nav-ul",
      navUlLiClass: "projectReview-nav-ul-li",
   };

   const projectTitle = props.match.params.title;
   const projectData = props.employee.projects.filter((project) => {
      return (
         project.title.toLowerCase().replace(/\s/g, "") ===
         projectTitle.toLowerCase().replace(/-/g, "")
      );
   })[0];

   return (
      <React.Fragment>
         {!projectData ? (
            <h1>Loading</h1>
         ) : (
            <main id="projectReview" className="projectReview">
               <Arrow arrowId="BackArrow" type="back" />
               <GalleryContainer projectData={projectData} />
               <ProjectInfo projectInfo={projectData} />
               <ProjectsNav
                  projectsList={props.employee.projects}
                  navClasses={navClasses}
                  // navClickHandler={navClickHandler}
               />
            </main>
         )}
      </React.Fragment>
   );
};

export default ProjectReview;

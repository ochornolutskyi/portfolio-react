import React from "react";
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
   //for api
   const projectTitle = props.match.url.slice(1);
   const projectData = props.employee.projects.filter((project) => {
      return (
         project.title.toUpperCase().replace(/\s/g, "") ===
         projectTitle.toUpperCase().replace(/-/g, "")
      );
   })[0];

   return (
      <React.Fragment>
         <main id="projectReview" className="projectReview">
            <Arrow arrowId="BackArrow" type="back" />
            <GalleryContainer projectData={projectData} />
            <ProjectInfo projectInfo={projectData} />
            <ProjectsNav
               projectsList={props.employee.projects}
               navClasses={navClasses}
            />
         </main>
      </React.Fragment>
   );
};

export default ProjectReview;

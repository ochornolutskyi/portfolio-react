import React, { Component } from "react";
import "./ProjectsNav.scss";
import NavItem from "./NavItem/NavItem";

const ProjectsNav = (props) => {
   const NAVCATEGORIESPROJECT = [
      "HoReCa",
      "Private",
      "Subject design",
      "mockup",
      "experiments",
   ];
   const navCategoryProjectsList = NAVCATEGORIESPROJECT.map(
      (category, index) => {
         return (
            <NavItem
               key={index}
               category={category}
               projectsList={props.projectsList}
               liClass={props.navClasses.navUlLiClass}
               navClickHandler={props.navClickHandler}
            />
         );
      }
   );

   return (
      <nav
         id="menu"
         className={
            props.navClasses.navClass ? props.navClasses.navClass : null
         }
      >
         <ul
            className={
               props.navClasses.navUlClass ? props.navClasses.navUlClass : null
            }
         >
            {navCategoryProjectsList}
         </ul>
      </nav>
   );
};

export default ProjectsNav;

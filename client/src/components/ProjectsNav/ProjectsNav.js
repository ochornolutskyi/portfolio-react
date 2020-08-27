import React, { Component } from "react";
import "./ProjectsNav.scss";
import NavItem from "./NavItem/NavItem";

class ProjectsNav extends Component {
   render() {
      const navCategoriesProject = [
         "HoReCa",
         "Private",
         "Subject design",
         "mockup",
         "experiments",
      ];
      const navCategoryProjectsList = navCategoriesProject.map(
         (category, index) => {
            return (
               <NavItem
                  key={index}
                  category={category}
                  projectsList={this.props.projectsList}
                  liClass={this.props.navClasses.navUlLiClass}
                  navClickHandler={this.props.navClickHandler}
               />
            );
         }
      );

      return (
         <nav
            id="menu"
            className={
               this.props.navClasses.navClass
                  ? this.props.navClasses.navClass
                  : null
            }
         >
            <ul
               className={
                  this.props.navClasses.navUlClass
                     ? this.props.navClasses.navUlClass
                     : null
               }
            >
               {navCategoryProjectsList}
            </ul>
         </nav>
      );
   }
}

export default ProjectsNav;

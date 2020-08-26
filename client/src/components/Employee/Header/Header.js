import React, { Component } from "react";
import "./Header.scss";
import Info from "./Info/Info";
import ProjectsNav from "../../ProjectsNav/ProjectsNav";

class Header extends Component {
   constructor(props) {
      super(props);
      this.state = {
         rightValue: null,
      };
   }
   render() {
      const navClasses = {
         navClass: "header-nav",
         navUlClass: "header-nav-ul",
         navUlLiClass: "header-nav-ul-li",
      };
      return (
         <header className="header">
            <div className="employee">
               <Info employeeInfo={this.props.employeeInfo} />
            </div>
            <ProjectsNav
               projectsList={this.props.projectsList}
               navClasses={navClasses}
            />
         </header>
      );
   }
}
export default Header;

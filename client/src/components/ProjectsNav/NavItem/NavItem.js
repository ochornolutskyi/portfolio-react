import React, { Component } from "react";
import ProjectsListItem from "./ProjectsListItem/ProjectsListItem";

class NavItem extends Component {
   constructor(props) {
      super(props);
      this.state = {
         listPosition: {
            right: null,
            bottom: null,
         },
      };
   }

   render() {
      const filteredCategoryProjectsList = this.props.projectsList.filter(
         (project) => {
            if (project.category) {
               return (
                  project.category.toUpperCase().trim() ===
                  this.props.category.toUpperCase().trim()
               );
            }
            return null;
         }
      );
      //create the child items of the filtering projects list
      const hoveredCurrentList = React.createRef();
      const hoveredCurrentListLastChild = React.createRef();
      const filteredCategorydProjectsListItems = filteredCategoryProjectsList.map(
         (project, index) => {
            if (index === filteredCategoryProjectsList.length - 1) {
               return (
                  <ProjectsListItem
                     ref={hoveredCurrentListLastChild}
                     key={index}
                     projectTitle={project.title}
                     projectLinkHref={project.id}
                     linkType={this.props.liClass}
                  />
               );
            } else {
               return (
                  <ProjectsListItem
                     key={index}
                     projectTitle={project.title}
                     projectLinkHref={project.title}
                     linkType={this.props.liClass}
                  />
               );
            }
         }
      );
      //positioning a listwith category projects
      const changePosition = {
         setHeaderNavPosition: (difference) => {
            this.setState({ listPosition: { right: difference } });
         },
         setReviewNavPosition: (difference) => {
            this.setState({ listPosition: { bottom: -difference } });
         },
         positioningHeaderList(lastChildRef) {
            const lastChild = lastChildRef.current;
            if (lastChild !== null) {
               let positionRight = lastChild.getBoundingClientRect().right;
               const clientScreenWidth = document.body.offsetWidth;
               if (positionRight !== null) {
                  if (positionRight > clientScreenWidth) {
                     let difference = positionRight - clientScreenWidth;
                     this.setHeaderNavPosition(difference);
                  }
               }
            }
         },
         positioningReviewList(hoveredCurrentList) {
            const listBottom = hoveredCurrentList.current.getBoundingClientRect()
               .bottom;
            const extremeBottom = document
               .querySelector(".projectReview-nav")
               .getBoundingClientRect().bottom;
            if (listBottom > extremeBottom) {
               let difference = listBottom - extremeBottom;
               this.setReviewNavPosition(difference);
            }
         },
         removePositionList: () => {
            this.setState({
               listPosition: null,
            });
         },
      };
      const positioningList = (classValue) => {
         if (classValue === "header-nav-ul-li".trim()) {
            return changePosition.positioningHeaderList(
               hoveredCurrentListLastChild
            );
         } else if (classValue === "projectReview-nav-ul-li".trim()) {
            return changePosition.positioningReviewList(hoveredCurrentList);
         }
      };

      return (
         <li
            className={
               this.props.hasOwnProperty("liClass") ? this.props.liClass : null
            }
            onMouseEnter={() => {
               positioningList(this.props.liClass);
            }}
            onMouseLeave={changePosition.removePositionList}
         >
            {this.props.category}
            <ul
               ref={hoveredCurrentList}
               style={this.state.listPosition}
               className="menu-projects-list"
            >
               {filteredCategorydProjectsListItems.length !== 0 ? (
                  filteredCategorydProjectsListItems
               ) : (
                  <li>
                     <a href="#!" className="a__disabled">
                        Sorry, no projects
                     </a>
                  </li>
               )}
            </ul>
         </li>
      );
   }
}

export default NavItem;

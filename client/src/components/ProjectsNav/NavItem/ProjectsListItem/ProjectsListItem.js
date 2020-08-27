import React from "react";
import "./ProjectsListItem.scss";
import { Link } from "react-router-dom";

const ProjectsListItem = React.forwardRef(
   (props, hoveredCurrentListLastChild) => {
      const createLink = () => {
         if (props.linkType === "header-nav-ul-li") {
            return (
               <a
                  href={`#${props.projectLinkHref}`}
                  ref={linkRef}
                  onClick={(event) => {
                     anchorClickHandler(event);
                  }}
               >
                  {props.projectTitle}
               </a>
            );
         } else if (props.linkType === "projectReview-nav-ul-li") {
            return (
               <Link
                  to={`/project-review/${props.projectLinkHref.replace(
                     /\s/g,
                     "-"
                  )}`}
               >
                  {props.projectTitle}
               </Link>
            );
         }
      };
      //scroll to project after anchor clicked
      const linkRef = React.createRef();
      const anchorClickHandler = (event) => {
         const type = linkRef.current.getAttribute("href").slice(0, 1);
         if (type === "#") {
            event.preventDefault();

            const scrollToId = linkRef.current.getAttribute("href").slice(1);
            const scrollToElement = document.getElementById(scrollToId);
            scrollToElement.scrollIntoView({
               block: "center",
               behavior: "smooth",
            });
            //TODO: must to fix disable changing opacity when hovered
            //showing title
            const scrollToElementTitle = Array.from(
               scrollToElement.children
            ).map((item) => {
               return Array.from(item.children).filter((item) => {
                  return item.tagName === "P" ? item : null;
               })[0];
            })[0];
            scrollToElementTitle.style.opacity = 1;
            const changingTitleOpacity = (opacity) => {
               if (opacity > 0 && opacity < 1.1) {
                  opacity = opacity - 0.01;
                  scrollToElementTitle.style.opacity = opacity;
                  setTimeout(() => {
                     changingTitleOpacity(opacity);
                  }, 25);
               } else {
                  scrollToElementTitle.style.opacity = null;
               }
            };
            setTimeout(() => {
               changingTitleOpacity(scrollToElementTitle.style.opacity);
            }, 2000);
            //
         } else if (type === "/") {
            const projectTitle = linkRef.current.getAttribute("href").slice(1);
            // console.log(projectTitle)
            return props.navClickHandler(projectTitle);
         } else {
            return;
         }
      };

      return (
         <li ref={hoveredCurrentListLastChild}>
            {createLink()}
         </li>
      );
   }
);

export default ProjectsListItem;

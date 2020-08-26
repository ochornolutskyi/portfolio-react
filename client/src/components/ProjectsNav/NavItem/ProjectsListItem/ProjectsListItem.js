import React from "react";
import "./ProjectsListItem.scss";

const ProjectsListItem = React.forwardRef(
   (props, hoveredCurrentListLastChild) => {
      const hrefLink = () => {
         if (props.linkType === "header-nav-ul-li") {
            return `#${props.projectLinkHref}`;
         } else if (props.linkType === "projectReview-nav-ul-li") {
            return `/${props.projectLinkHref.replace(/\s/g, "-")}`;
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
            //showing title
            //check the mouse enter on preview

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
            return;
         } else {
            return;
         }
      };
      return (
         <li ref={hoveredCurrentListLastChild}>
            <a
               href={hrefLink()}
               ref={linkRef}
               onClick={(event) => {
                  anchorClickHandler(event);
               }}
            >
               {props.projectTitle}
            </a>
         </li>
      );
   }
);

export default ProjectsListItem;

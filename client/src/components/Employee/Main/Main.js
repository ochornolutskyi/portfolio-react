import React from "react";
import "./Main.scss";
import Preview from "./Preview/Preview";
import Container from "./Preview/Container";

const Main = (props) => {
   const createPreview = (projectsList) => {
      let projectPreviewCounter = 0;
      return projectsList.map((project, index) => {
         projectPreviewCounter++;
         let previewClassList = "";
         switch (projectPreviewCounter) {
            case 1:
               previewClassList = "horizontal-big projectPreview-1";
               break;
            case 2:
               previewClassList = "vertical-small projectPreview-2";
               break;
            case 3:
               previewClassList = "vertical-big projectPreview-3";
               break;
            case 4:
               previewClassList = "horizontal-big projectPreview-4";
               break;
            case 5:
               previewClassList = "horizontal-big projectPreview-5";
               break;
            case 6:
               previewClassList = "vertical-small projectPreview-6";
               break;
            case 7:
               previewClassList = "vertical-small projectPreview-7";
               break;
            case 8:
               previewClassList = "horizontal-small projectPreview-8";
               break;
            case 9:
               previewClassList = " vertical-big projectPreview-9";
               break;
            default:
               previewClassList = "";
         }
         if (projectPreviewCounter < 9) {
            return (
               <Preview
                  key={index}
                  project={project}
                  classes={previewClassList}
               ></Preview>
            );
         } else {
            projectPreviewCounter = 0;
            return (
               <Preview
                  key={index}
                  project={project}
                  classes={previewClassList}
               ></Preview>
            );
         }
      });
   };
   const wrapProjectsPreviewList = (projectsPreview) => {
      let projectsPreviewList = [];
      let count = 0;
      let maxCount = projectsPreview.length;
      for (let step = 0; step < maxCount; step++) {
         if (count < 6) {
            projectsPreviewList.push(projectsPreview.splice(0, 1));
            count++;
         } else if (count === 6) {
            projectsPreviewList.push(
               <Container key={step} previews={projectsPreview.splice(0, 2)} />
            );
            count++;
         } else {
            projectsPreviewList.push(projectsPreview.splice(0, 1));
            count = 0;
         }
      }
      return projectsPreviewList;
   };
   const createProjectsPreviewList = () => {
      const projectsList = props.projectsList;
      const projectsPreview = createPreview(projectsList);
      const projectsPreviewList = wrapProjectsPreviewList(projectsPreview);
      return projectsPreviewList;
   };

   return <main className="main">{createProjectsPreviewList()}</main>;
};

export default Main;

import React from "react";
import "./Arrow.scss";

const Arrow = (props) => {
   const createArrow = (type) => {
      const arrow = (
         <div className="Arrow">
            <span className="ArrowRightPart"></span>
            <span className="ArrowCenterPart"></span>
            <span className="ArrowLeftPart"></span>
         </div>
      );
      if (type.toUpperCase() === "back".toUpperCase()) {
         return <a href="/">{arrow}</a>;
      } else if (type.toUpperCase() === "toTop".toUpperCase()) {
         return (
            <div style={props.arrowStyle} className="Arrow">
               <span 
               style={{
                  right: props.animationSidesStyle.right,
                  transform: `rotateZ(-${props.rotatingSidesDeg}deg)`,
               }}
               className="ArrowRightPart"></span>
               <span 
               style={{
                  right: props.animationCenterStyle.right,
                  // transform: `rotateZ(${props.rotatingCenterDeg}deg)`,
               }}
               className="ArrowCenterPart"></span>
               <span
                style={{
                  right: props.animationSidesStyle.right,
                  transform: `rotateZ(${props.rotatingSidesDeg}deg)`,
               }}
                  className="ArrowLeftPart"
               ></span>
            </div>
         );
      } else {
         return arrow;
      }
   };

   return (
      <div
         className="ArrowContainer"
         id={props.arrowId}
         onClick={props.arrowClickHandler}
      >
         {createArrow(props.type)}
      </div>
   );
};

export default Arrow;

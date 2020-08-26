import React from "react";
import "./SliderCarousel.scss";
import Arrow from "../../../Arrow/Arrow";

const SliderCarousel = (props) => {
   const zoomOutButton = (
      <div id="zoom-out" onClick={props.zoomClickHandler}>
         <span />
         <span />
      </div>
   );
   return (
      <div
         className="slider-carousel"
         id={props.idCarousel === true ? "zoom-in" : null}
      >
         {props.zoomState ? zoomOutButton : null}
         <Arrow
            arrowId={"SliderArrowPrev"}
            type="carousel"
            arrowClickHandler={props.prevArrowClickHandler}
         />
         <Arrow
            arrowId={"SliderArrowNext"}
            type="carousel"
            arrowClickHandler={props.nextArrowClickHandler}
         />
         <div className="slider-carousel-item">
            <img
               className="project-image"
               src={props.imgSrc}
               alt="project img"
               onClick={props.zoomClickHandler}
            />
         </div>
      </div>
   );
};

export default SliderCarousel;

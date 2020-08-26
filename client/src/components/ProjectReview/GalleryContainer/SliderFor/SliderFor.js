import React from "react";
import "./SliderFor.scss";
const SliderFor = (props) => {
   //TODO: change it
   /*  const createImages = (allImages) => {
      if (allImages.length > 0) {
         return allImages.map((imgSrc, index) => {
            
            if (index === 2){
               return (
                  <li key={index} >
                     <img id="sliderForActive" src={imgSrc} alt="project img" />
                  </li>
               );
            }
            return (
               <li key={index} >
                  <img src={imgSrc} alt="project img" />
               </li>
            );
         });
      }
   }; */

   return (
      <div className="sliderFor">
         <h1 style={{textAlign: "center", fontSize: '54px', lineHeight: '109px'}}>Sorry, this block in development</h1>
         {/* <ul id='sliderForList'>{props.allImages ? createImages(props.allImages) : null}</ul> */}
      </div>
   );
};

export default SliderFor;

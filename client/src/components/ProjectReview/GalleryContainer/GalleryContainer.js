import React, { Component } from "react";
import "./GalleryContainer.scss";
import SliderCarousel from "./SliderCarousel/SliderCarousel";
import SliderFor from "./SliderFor/SliderFor";

class GalleryContainer extends Component {
   constructor(props) {
      super(props);
      this.state = {
         zoomState: false,
         allImages: null,
         currentImage: {
            index: 1,
            imgSrc: null,
         },
         carousel: {
            transform: null,
         },
      };
   }

   //TODO: must change that for dynamical taking images from folder
   componentDidMount() {
      const createImagesList = () => {
         let allImages = [];
         this.props.projectData.images.map((image) => {
            allImages.push(
               require(`../../../${image}`)
            );
         });
         return allImages;
      };
      const allImages = createImagesList();
      const firstImage = allImages[0];
      this.setState({
         allImages,
         currentImage: {
            index: 1,
            imgSrc: firstImage,
         },
      });
   }

   render() {
      //slider
      const changeCarouselImage = (type) => {
         const currentImage = { ...this.state.currentImage };
         const zoomState = this.state.zoomState;
         let index = currentImage.index;
         let imgSrc = currentImage.src;
         const changingImage = (index, imgSrc) => {
            this.setState({
               zoomState,
               currentImage: {
                  index,
                  imgSrc,
               },
            });
         };
         if (this.state.allImages && this.state.allImages.length > 1) {
            if (type === "prev") {
               if (currentImage.index > 1) {
                  index--;
                  imgSrc = this.state.allImages[index - 1];
                  changingImage(index, imgSrc);
               } else {
                  index = this.state.allImages.length - 1;
                  imgSrc = this.state.allImages[index];
                  changingImage(index, imgSrc);
               }
            }
            if (type === "next") {
               if (currentImage.index < this.state.allImages.length) {
                  index++;
                  imgSrc = this.state.allImages[index - 1];
                  changingImage(index, imgSrc);
               } else {
                  index = 1;
                  imgSrc = this.state.allImages[index - 1];
                  changingImage(index, imgSrc);
               }
            }
         }
      };
      const prevArrowClickHandler = () => {
         changeCarouselImage("prev");
      };
      const nextArrowClickHandler = () => {
         changeCarouselImage("next");
      };
      //change zooming
      const zoomClickHandler = () => {
         let zoomState = this.state.zoomState;
         zoomState = !zoomState;
         this.setState({
            zoomState,
         });
      };

      return (
         <div className="galleryContainer">
            <SliderFor
            // allImages={this.state.allImages}
            />
            <SliderCarousel
               prevArrowClickHandler={prevArrowClickHandler}
               nextArrowClickHandler={nextArrowClickHandler}
               imgSrc={this.state.currentImage.imgSrc}
               zoomState={this.state.zoomState}
               zoomClickHandler={zoomClickHandler}
               idCarousel={this.state.zoomState}
            />
         </div>
      );
   }
}
export default GalleryContainer;

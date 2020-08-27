import React, { Component } from "react";
import Footer from "../Footer/Footer";
import Header from "./Header/Header";
import Main from "./Main/Main";
import Arrow from "../Arrow/Arrow";

class RenderEmployee extends Component {
   constructor(props) {
      super(props);
      this.state = {
         scrollHeight: 0,
         arrow: {
            disableClickHandler: false,
            isRender: false,
            style: {
               opacity: 0,
            },
            animationSidesStyle: {
               right: 23,
               deg: 45,
            },
            animationCenterStyle: {
               right: 0,
               deg: 0,
            },
         },
      };
      this.checkArrowRendering = () => {
         const scrollHeight = window.scrollY;
         const clientHeight = document.documentElement.clientHeight;
         let isRender = this.state.arrow.isRender;
         let style = { ...this.state.arrow.style };
         let animationSidesStyle = { ...this.state.arrow.animationSidesStyle };
         let animationCenterStyle = {
            ...this.state.arrow.animationCenterStyle,
         };
         if (scrollHeight > clientHeight * 2) {
            isRender = true;
            style.opacity = 1;
            this.setState({
               arrow: {
                  isRender,
                  style,
                  animationSidesStyle,
                  animationCenterStyle,
               },
            });
         }
      };
      this.scrollHandler = () => {
         let isRender = this.state.arrow.isRender;
         let style = { ...this.state.arrow.style };
         let animationSidesStyle = { ...this.state.arrow.animationSidesStyle };
         let animationCenterStyle = {
            ...this.state.arrow.animationCenterStyle,
         };
         const scrollHeight = window.scrollY;
         const clientHeight = document.documentElement.clientHeight;
         this.setState({ scrollHeight });
         if (scrollHeight > clientHeight && style.opacity < 1) {
            isRender = true;
            style.opacity += 0.04;
            this.setState({
               arrow: {
                  isRender,
                  style,
                  animationSidesStyle,
                  animationCenterStyle,
               },
            });
         } else if (scrollHeight < clientHeight && style.opacity > 0) {
            style.opacity -= 0.1;
            this.setState({
               arrow: {
                  isRender,
                  style,
                  animationSidesStyle,
                  animationCenterStyle,
               },
            });
         }
         if (style.opacity <= 0) {
            isRender = false;
            this.setState({
               arrow: {
                  isRender,
                  style,
                  animationSidesStyle,
                  animationCenterStyle,
               },
            });
         }
      };
      this.arrowClickHandler = () => {
         let arrow = { ...this.state.arrow };
         if (!arrow.disableClickHandler) {
            this.arrowAnimation();
            window.scrollTo({
               top: 0,
               behavior: "smooth",
            });
         }
         //disabling click handler while animates
         arrow.disableClickHandler = true;
         this.setState({
            arrow,
         });
      };
      //arrow parts animation
      this.moveSides = (moveStep, resolve) => {
         // return new Promise((resolve, reject) => {
         let arrow = { ...this.state.arrow };
         if (moveStep > -27) {
            moveStep -= 0.5;
            arrow.animationSidesStyle.right = moveStep;
            this.setState({
               arrow,
            });
            setTimeout(() => {
               return this.moveSides(moveStep, resolve);
            }, 4);
         } else {
            resolve();
         }
         // });
      };
      this.moveCenterUp = (moveStep, resolve) => {
         let arrow = { ...this.state.arrow };
         if (moveStep < 16) {
            moveStep += 0.5;
            arrow.animationCenterStyle.right = moveStep;
            this.setState({
               arrow,
            });
            setTimeout(() => {
               return this.moveCenterUp(moveStep, resolve);
            }, 4);
         } else {
            resolve();
         }
      };
      this.moveCenterDown = (moveStep, resolve) => {
         let arrow = { ...this.state.arrow };
         if (moveStep > -55) {
            moveStep -= 0.6;
            arrow.animationCenterStyle.right = moveStep;
            this.setState({
               arrow,
            });
            setTimeout(() => {
               return this.moveCenterDown(moveStep, resolve);
            }, 4);
         } else {
            resolve();
         }
      };
      //TODO: choose a type of animation
      this.rotating = (deg, resolve) => {
         // return new Promise((resolve, reject) => {
         let arrow = { ...this.state.arrow };
         if (deg < 225 && arrow.animationSidesStyle.deg !== 135) {
            deg += 1;
            // arrow.animationCenterStyle.deg = deg - 45;
            arrow.animationSidesStyle.deg = deg;
            this.setState({
               arrow,
            });
            setTimeout(() => {
               return this.rotating(deg, resolve);
            }, 4);
         } else {
            /* else if (deg < 225) {
               deg += 2;
               arrow.animationCenterStyle.deg = deg - 45;
               this.setState({
                  arrow,
               });
               setTimeout(() => {
                  return this.rotating(deg, resolve);
               }, 4);  
            }*/
            resolve();
         }
         // });
      };
      this.arrowAnimation = () => {
         //disabling scroll hadler
         window.removeEventListener("scroll", this.scrollHandler);
         //move sides
         const moveSides = new Promise((resolve, reject) => {
            this.moveSides(this.state.arrow.animationSidesStyle.right, resolve);
         });
         //moves a center part of the arrow to up and then to down  to get out of the page
         const moveCenter = new Promise((resolve, reject) => {
            const moveCenterUp = new Promise((resolve, reject) => {
               this.moveCenterUp(
                  this.state.arrow.animationCenterStyle.right,
                  resolve
               );
            });
            moveCenterUp.then(() =>
               this.moveCenterDown(
                  this.state.arrow.animationCenterStyle.right,
                  resolve
               )
            );
         });
         //rotating
         const rotating = new Promise((resolve, reject) => {
            this.rotating(this.state.arrow.animationSidesStyle.deg, resolve);
         });
         //remove the arrow after the end of the animation
         Promise.all([moveSides, moveCenter, rotating]).then(
            this.animationArrowEnded
         );
      };
      this.animationArrowEnded = () => {
         let arrow = { ...this.state.arrow };
         arrow.isRender = false;
         arrow.animationSidesStyle.right = 23;
         arrow.animationSidesStyle.deg = 45;
         arrow.animationCenterStyle.right = 0;
         arrow.animationCenterStyle.deg = 0;
         this.setState({ arrow });
         //add scroll handler after arrow removed
         this.checkArrowRendering();
         window.addEventListener("scroll", this.scrollHandler);
      };
   }

   componentDidMount() {
      this.checkArrowRendering();
      window.addEventListener("scroll", this.scrollHandler);
   }

   render() {

      return (
         <React.Fragment>
            <Header
               employeeInfo={this.props.employee.info}
               projectsList={this.props.employee.projects}
            />
            <Main projectsList={this.props.employee.projects} />
            <Footer />
            {this.state.arrow.isRender ? (
               <Arrow
                  arrowStyle={this.state.arrow.style}
                  animationSidesStyle={this.state.arrow.animationSidesStyle}
                  rotatingSidesDeg={this.state.arrow.animationSidesStyle.deg}
                  animationCenterStyle={this.state.arrow.animationCenterStyle}
                  rotatingCenterDeg={this.state.arrow.animationCenterStyle.deg}
                  arrowId="ToTop"
                  type="toTop"
                  arrowClickHandler={this.arrowClickHandler}
               />
            ) : null}
         </React.Fragment>
      );
   }
}

export default RenderEmployee;

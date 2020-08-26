window.onload = () => {
   //scrolling by anchor to some project
   //IS NOT NEED AFTER USING REACT
   {
      /* (function scrollByAnchor() {
         let menu = document.getElementById("menu");
         if (menu && document.querySelector(".header-nav-ul")) {
            menu.addEventListener("click", (event) => {
               event.preventDefault();
               let element = event.target;
               if (element.tagName === "A") {
                  const elementId = element.getAttribute("href").slice(1);
                  const projectElement = document.getElementById(elementId);
                  projectElement.scrollIntoView({
                     block: "center",
                     behavior: "smooth",
                  });
               }
            });
         } else return;
      })(); */
   }
   //IS NOT NEED AFTER USING REACT
   //positioning the project list
   {
      /*   (function PositioningProjectList() {
         let menuItems = document.getElementsByClassName("menu-item");
         if (menuItems) {
            //enumeration of all menu items
            for (let key in menuItems) {
               let item = menuItems[key];
               if (item instanceof HTMLElement) {
                  //checking hovers on the current menu item
                  item.addEventListener(
                     "mouseenter",
                     findPositioningProjectList
                  );
               }
            }
         } else return;
         //find the position of  a list of projects
         function findPositioningProjectList() {
            let menuItem = event.target.childNodes;
            //get a block with projects list
            for (let key in menuItem) {
               let currentList = menuItem[key];
               if (currentList instanceof HTMLElement) {
                  //get the position of the right side for the last item in the list and place it relative to the width of the client screen
                  let positionRight = currentList.lastElementChild.getBoundingClientRect()
                     .right;
                  let clientScreenWidth = document.body.offsetWidth;
                  if (positionRight !== 0) {
                     if (positionRight > clientScreenWidth) {
                        let difference = positionRight - clientScreenWidth;
                        currentList.style.right = `${difference}px`;
                     }
                  }
               }
            }
         }
      })(); */
   }
   //IS NOT NEED AFTER USING REACT
   //adds an arrow which moves the client to the top of the page by using promises
   {
      // (function windowScrollHandler() {
      //    const arrow = document.getElementById("arrowToTop");
      //    const clientHeight = document.documentElement.clientHeight;
      //    let newOpacity = 0;
      //    let currentScroll = window.scrollY;
      //    // if (arrow) {
      //       // window.addEventListener("scroll", changeOpacityArrow);
      //       // arrow.addEventListener("click", arrowClickHandler);
      //       //changing opacity of arrow relatively scroll
      //       /* if (currentScroll > clientHeight) {
      //          newOpacity = 1;
      //          arrow.style.display = "block";
      //          arrow.style.opacity = newOpacity;
      //       } */
      //       /*   function changeOpacityArrow() {
      //          currentScroll = this.scrollY;
      //          if (currentScroll >= clientHeight && newOpacity !== 1) {
      //             arrow.style.display = "block";
      //             newOpacity += 0.05;
      //             if (newOpacity > 1) {
      //                newOpacity = 1;
      //             }
      //             arrow.style.opacity = `${newOpacity}`;
      //          } else if (currentScroll < clientHeight) {
      //             newOpacity -= 0.08;
      //             if (newOpacity <= 0) {
      //                arrow.style.display = "none";
      //                newOpacity = 0;
      //             }
      //             arrow.style.opacity = `${newOpacity}`;
      //          }
      //       } */
      //       //scrolling to the top if clicked on the arrow and remove it
      //      /*  function arrowClickHandler() {
      //          const arrowPartLeft = document.getElementById("arrowPartLeft"),
      //             arrowPartRight = document.getElementById("arrowPartRight"),
      //             arrowPartCenter = document.getElementById("arrowPartCenter"),
      //             arrowParts = [arrowPartLeft, arrowPartRight, arrowPartCenter];
      //          //the animate of the outing of the arrow from the page
      //          (function arrowAnimation() {
      //             //right and left arrow parts moves to the bottom
      //             const moveSidesParts = new Promise((resolve, reject) => {
      //                let moveStep = 0;
      //                (function moveUp() {
      //                   if (moveStep < 55) {
      //                      moveStep++;
      //                      arrowPartLeft.style.top = `${moveStep}px`;
      //                      arrowPartRight.style.top = `${moveStep}px`;
      //                      setTimeout(() => {
      //                         return moveUp();
      //                      }, 17);
      //                   } else {
      //                      resolve();
      //                   }
      //                })();
      //             });
      //             //moves centre part of the arrow  to up and then to down for the out of a page
      //             const moveCenterPart = new Promise((resolve, reject) => {
      //                let moveStep = 0;
      //                const moveCenterPartUp = new Promise((resolve, reject) => {
      //                   (function moveUp() {
      //                      if (moveStep < 15) {
      //                         moveStep++;
      //                         arrowPartCenter.style.bottom = `${moveStep}px`;
      //                         setTimeout(() => {
      //                            moveUp();
      //                         }, 17);
      //                      } else {
      //                         resolve();
      //                      }
      //                   })();
      //                });
      //                const moveDown = () => {
      //                   if (moveStep > -55) {
      //                      moveStep--;
      //                      arrowPartCenter.style.bottom = `${moveStep}px`;
      //                      setTimeout(() => {
      //                         moveDown();
      //                      }, 15);
      //                   } else {
      //                      resolve();
      //                   }
      //                };
      //                moveCenterPartUp.then(() => moveDown());
      //             });
      //             //rotate of all parts of the arrow and the clear a styles of parts
      //             const rotateArrowParts = new Promise((resolve, reject) => {
      //                arrowPartDeg = 0;
      //                (function rotating() {
      //                   if (arrowPartDeg < 180) {
      //                      arrowPartDeg++;
      //                      arrowPartLeft.style.transform = `rotateZ(${arrowPartDeg}deg)`;
      //                      arrowPartRight.style.transform = `rotateZ(-${arrowPartDeg}deg)`;
      //                      arrowPartCenter.style.transform = `rotateZ(${arrowPartDeg}deg)`;
      //                      setTimeout(() => {
      //                         rotating();
      //                      }, 5);
      //                   } else {
      //                      resolve();
      //                   }
      //                })();
      //             });
      //             //removes all styles of the arrow
      //             const removedStyles = () => {
      //                arrow.removeAttribute("style");
      //                arrowParts.forEach((part) =>
      //                   part.removeAttribute("style")
      //                );
      //             };
      //             Promise.all([
      //                moveSidesParts,
      //                moveCenterPart,
      //                rotateArrowParts,
      //             ]).then(() => removedStyles());
      //          })();
      //          //scrolling to the top of page
      //          window.scrollTo({
      //             top: 0,
      //             behavior: "smooth",
      //          });
      //       } */
      //    // }
      // })();
   }
};

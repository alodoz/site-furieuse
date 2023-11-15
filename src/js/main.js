// import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// const tmln = gsap.timeline();

// gsap.to("#card-animation", {
//   scrollTrigger: {
//     trigger: "card-section",
//     start: "top top",
//     end: "top=+5000",
//     scrub: 2,
//   },
// });

// tmln.set("#card-animation", {
//   x: 0,
//   y: 0,
//   scrollTrigger: {
//     trigger: "card-section",
//     start: "top top",
//     end: "top=+5000",
//     scrub: 2,
//   },
// });

// tmln.to("#card-animation", {
//   x: 120,
//   y: 200,
//   scrollTrigger: {
//     trigger: "card-section",
//     start: "top top",
//     end: "top=+5000",
//     scrub: 2,
//   },
// });

// marche ////////////////////////////

document.addEventListener("DOMContentLoaded", function () {
  const cardAnimation = document.getElementById("card-animation");

  gsap.registerPlugin(ScrollTrigger);

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".card-section",
      start: "top top",
      end: "top+=5000",
      scrub: 2,
      //   markers: true,
      pin: true,
    },
  });

  tl.to(cardAnimation, {
    duration: 1,
    scale: 2,
    x: 650,
    y: 200,
    ease: "power2.out",
  })
    .to(cardAnimation, {
      duration: 1,
      scale: 2,
      x: -180,
      y: 400,
      ease: "power2.out",
    })
    .to(cardAnimation, {
      duration: 1,
      scale: 2,
      x: -400,
      y: -600,
      ease: "power2.out",
    });
});

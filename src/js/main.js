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
      end: "top+=6000",
      scrub: 2,
      //   markers: true,
      pin: true,
    },
  });

  tl.to(cardAnimation, {
    duration: 2,
    scale: 2.5,
    x: 650,
    y: 200,
    ease: "power2.out",
  })
    .to(cardAnimation, {
      duration: 2,
      scale: 2.5,
      x: -180,
      y: 400,
      ease: "power2.out",
    })
    .to(cardAnimation, {
      duration: 2,
      scale: 2.5,
      x: -400,
      y: -600,
      ease: "power2.out",
    });
});

document.addEventListener("DOMContentLoaded", function () {
  // Simulate content loading for 2 seconds
  setTimeout(function () {
    // Get the loading container
    const loadingContainer = document.querySelector(".loading-container");

    // Add a fade-out effect
    loadingContainer.style.transition = "opacity 1s ease-out";
    loadingContainer.style.opacity = "0";

    // Hide the loading container after the fade-out effect
    setTimeout(function () {
      loadingContainer.style.display = "none";

      // Show the main content
      document.querySelector(".main-content").style.display = "block";
    }, 1000); // Adjust the duration of the fade-out effect
  }, 3000);
});

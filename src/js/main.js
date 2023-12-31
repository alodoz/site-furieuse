// import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
    // scale: 2.5,
    // x: 650,
    // y: 200,
    ease: "power2.out",
    scrub: 2,
  })
    .to(cardAnimation, {
      duration: 2,
      //   scale: 2.5,
      //   x: -180,
      //   y: 400,
      ease: "power2.out",
      scrub: 2,
    })
    .to(cardAnimation, {
      duration: 2,
      //   scale: 2.5,
      //   x: -800,
      //   y: -600,
      ease: "power2.out",
      scrub: 2,
    });
});

document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    const loadingContainer = document.querySelector(".loading-container");

    loadingContainer.style.transition = "opacity 1s ease-out";
    loadingContainer.style.opacity = "0";

    setTimeout(function () {
      loadingContainer.style.display = "none";

      document.querySelector(".main-content").style.display = "block";
    }, 1000);
  }, 1000);
});

gsap.to("#ysa-run", {
  x: 550,
  scrollTrigger: {
    trigger: ".card-section",
    start: "top+=1800",
    end: "top+=6000",
    scrub: 0.5,
  },
});

gsap.to("#baron-cheval", {
  x: 470,
  scrollTrigger: {
    trigger: ".card-section",
    start: "top+=2500",
    end: "top+=6000",
    scrub: 0.5,
  },
});

gsap.registerPlugin(ScrollTrigger);

gsap.fromTo(
  "#baron-cheval",
  {
    opacity: 0,
  },
  {
    opacity: 1,
    duration: 2,
    ease: "power2.inOut",
    scrollTrigger: {
      trigger: ".card-section",
      start: "top+=2500",
      end: "+=400",
      scrub: true,
    },
  }
);

gsap.registerPlugin(ScrollTrigger);

gsap.fromTo(
  "#ysa-run",
  {
    opacity: 0,
  },
  {
    opacity: 1,
    duration: 2,
    ease: "power2.inOut",
    scrollTrigger: {
      trigger: ".card-section",
      start: "top+=1800",
      end: "+=400",
      scrub: true,
    },
  }
);

gsap.registerPlugin(ScrollTrigger);

gsap.fromTo(
  "#chase-bar",
  {
    opacity: 0,
  },
  {
    opacity: 1,
    duration: 2,
    ease: "power2.inOut",
    scrollTrigger: {
      trigger: ".card-section",
      start: "top+=1300",
      end: "+=700",
      scrub: true,
    },
  }
);

gsap.registerPlugin(ScrollTrigger);

gsap.fromTo(
  "#img-bouton-1",
  {
    opacity: 0,
  },
  {
    opacity: 1,
    duration: 2,
    ease: "power2.inOut",
    scrollTrigger: {
      trigger: ".card-section",
      start: "top+=1300",
      end: "+=800",
      scrub: true,
    },
  }
);

gsap.registerPlugin(ScrollTrigger);

gsap.fromTo(
  "#img-bouton-2",
  {
    opacity: 0,
  },
  {
    opacity: 1,
    duration: 2,
    ease: "power2.inOut",
    scrollTrigger: {
      trigger: ".card-section",
      start: "top+=2700",
      end: "+=800",
      scrub: true,
    },
  }
);

gsap.registerPlugin(ScrollTrigger);

gsap.fromTo(
  "#img-bouton-3",
  {
    opacity: 0,
  },
  {
    opacity: 1,
    duration: 3,
    ease: "power2.inOut",
    scrollTrigger: {
      trigger: ".card-section",
      start: "top+=4800",
      end: "+=800",
      scrub: true,
    },
  }
);

const path = document.querySelector("#trace");
const length = path.getTotalLength();
path.style.strokeDasharray = length;
path.style.strokeDashoffset = length;

gsap.to("#trace", {
  strokeDashoffset: 0,
  ease: "none",
  scrollTrigger: {
    trigger: ".card-section",
    start: "top+=1500",
    end: "top+=6000",
    scrub: true,
    // markers: true,
  },
});

import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.to("#card-animation", {
  x: 700,
  y: 280,
  scrollTrigger: {
    trigger: "card-section",
    start: "top top",
    end: "top=+5000",
    scrub: true,
  },
});

import { gsap } from "gsap";

export const fadeIn = (target, delay = 0) => {
  gsap.fromTo(
    target,
    { opacity: 0, y: 50 },
    { opacity: 1, y: 0, duration: 1, delay, ease: "power2.out" }
  );
};

export const slideInLeft = (target) => {
  gsap.fromTo(
    target,
    { x: -100, opacity: 0 },
    { x: 0, opacity: 1, duration: 1.23, ease: "bounce.out" }
  );
};

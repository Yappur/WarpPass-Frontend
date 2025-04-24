import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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

export const animarCards = () => {
  const cards = gsap.utils.toArray(".card");

  cards.forEach((card, index) => {
    gsap.fromTo(
      card,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.75,
        delay: index * 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );
  });
};

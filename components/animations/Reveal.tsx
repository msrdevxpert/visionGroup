import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePathname } from "next/navigation";
import router from "next/router";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

const useRevealAnimation = () => {
  const path = usePathname();
  useEffect(() => {
    const initializeAnimations = () => {
      const revealContainers = document.querySelectorAll<HTMLElement>(".reveal");

      revealContainers.forEach((container) => {
        let clipPath: string | undefined;

        // Left to right
        if (container.classList.contains("reveal--left")) {
          clipPath = "inset(0 0 0 100%)";
        }
        // Right to left
        if (container.classList.contains("reveal--right")) {
          clipPath = "inset(0 100% 0 0)";
        }
        // Top to bottom
        if (container.classList.contains("reveal--top")) {
          clipPath = "inset(0 0 100% 0)";
        }
        // Bottom to top
        if (container.classList.contains("reveal--bottom")) {
          clipPath = "inset(100% 0 0 0)";
        }

        const image = container.querySelector("img") || container.querySelector("div");

        // Animation trigger
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: container,
            start: "top bottom",
            end: "bottom top",
            toggleActions: "play none none none",
          },
        });

        // Animation timeline
        tl.set(container, { autoAlpha: 1 });
        tl.from(container, {
          clipPath,
          duration: 1.2,
          delay: 0.2,
          ease: "Power4.easeInOut",
        });
        if (container.classList.contains("reveal--overlay")) {
          tl.from(image, { clipPath, duration: 0.4, ease: "Power4.easeOut" });
        }
        tl.from(image, {
          scale: 1.4,
          duration: 1.3,
          delay: -1,
          ease: "Power2.easeOut",
        });
      });

      ScrollTrigger.refresh();
    };

    // Initialize animations on mount and route change
    initializeAnimations();

    router.events.on("routeChangeComplete", initializeAnimations);

    return () => {
      // Clean up animations and ScrollTrigger instances
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      router.events.off("routeChangeComplete", initializeAnimations);
    };
  }, [path]);
};

export default useRevealAnimation;

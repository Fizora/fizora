import { useEffect } from "react";
import Lenis from "lenis";

export const useLenis = () => {
  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
    } as any);

    // Store RAF ID for cleanup
    let rafId: number;

    // Animation loop
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };

    rafId = requestAnimationFrame(raf);

    // Handle scroll without animation
    const handleWheel = (e: WheelEvent) => {
      lenis.scrollTo(window.scrollY + e.deltaY, { duration: 0.8 });
    };

    return () => {
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
      lenis.destroy();
    };
  }, []);
};

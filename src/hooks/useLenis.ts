import { useEffect } from "react";
import Lenis from "lenis";

let lenisInstance: Lenis | null = null;
let rafId: number | null = null;

export const useLenis = () => {
  useEffect(() => {
    // Prevent multiple Lenis instances
    if (lenisInstance) {
      return;
    }

    try {
      // Initialize Lenis with optimized configuration for performance
      lenisInstance = new Lenis({
        duration: 0.8, // Reduced from 1.2 for better performance
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        wheelMultiplier: 0.8, // Reduced for better control
        syncTouch: true,
        smoothTouch: false, // Disable smooth touch to reduce overhead
      } as any);

      // Animation loop with lower priority
      const raf = (time: number) => {
        if (lenisInstance) {
          lenisInstance.raf(time);
          rafId = requestAnimationFrame(raf);
        }
      };

      rafId = requestAnimationFrame(raf);

      return () => {
        if (rafId) {
          cancelAnimationFrame(rafId);
          rafId = null;
        }
        if (lenisInstance) {
          lenisInstance.destroy();
          lenisInstance = null;
        }
      };
    } catch (error) {
      console.error("Failed to initialize Lenis:", error);
      lenisInstance = null;
    }
  }, []);
};

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
      // Detect mobile for optimized settings
      const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

      // Initialize Lenis with optimized configuration for performance
      lenisInstance = new Lenis({
        duration: isMobile ? 0.6 : 0.8, // Shorter for mobile
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: !isMobile, // Disable on mobile to save resources
        wheelMultiplier: isMobile ? 0.6 : 0.8, // Lower on mobile
        syncTouch: !isMobile, // Only sync on desktop
        smoothTouch: false, // Always disable smooth touch
        lerp: isMobile ? 0.1 : 0.1, // Interpolation factor
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

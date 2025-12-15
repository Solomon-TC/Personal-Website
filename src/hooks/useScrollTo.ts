import { useCallback } from 'react';

export function useScrollTo() {
  const scrollTo = useCallback((target: string | number, options?: { offset?: number; duration?: number }) => {
    const lenis = (window as any).lenis;
    
    if (!lenis) {
      console.warn('Lenis not initialized');
      return;
    }

    if (typeof target === 'string') {
      const element = document.querySelector(target);
      if (element) {
        lenis.scrollTo(element, {
          offset: options?.offset || 0,
          duration: options?.duration || 1.2,
          easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        });
      }
    } else {
      lenis.scrollTo(target, {
        duration: options?.duration || 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });
    }
  }, []);

  const scrollToTop = useCallback(() => {
    scrollTo(0);
  }, [scrollTo]);

  return { scrollTo, scrollToTop };
}

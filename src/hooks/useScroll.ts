/**
 * Component: useScroll
 * Purpose: Custom React hook for scroll position tracking
 * Author: Oğuzhan Berke Özdil
 * Last edit: 27 January 2025
 */

import { useState, useEffect } from 'react';

export function useScroll(threshold: number = 50) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setScrolled(scrollTop > threshold);
    };

    // Set initial state
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  return scrolled;
}

/**
 * Scroll to top component for route changes
 * 
 * @author Oğuzhan Berke Özdil
 * @purpose Automatically scrolls to top when navigating between pages
 */

import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top when pathname changes
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;

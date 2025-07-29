/**
 * Component: BackToTop
 * Purpose: Reusable UI components
 * Author: Oğuzhan Berke Özdil
 * Last edit: 27 January 2025
 */

import React, { useState, useEffect } from 'react';
import { ChevronUpIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';

const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={clsx(
        'fixed bottom-8 right-8 z-50 w-12 h-12 bg-primary-600 hover:bg-primary-700 text-white rounded-full shadow-strong hover:shadow-maximum transition-all duration-300 flex items-center justify-center group',
        'focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2',
        isVisible 
          ? 'opacity-100 translate-y-0 pointer-events-auto' 
          : 'opacity-0 translate-y-4 pointer-events-none'
      )}
      aria-label="Back to top"
    >
      <ChevronUpIcon className="w-6 h-6 group-hover:scale-110 transition-transform duration-200" />
    </button>
  );
};

export default BackToTop;

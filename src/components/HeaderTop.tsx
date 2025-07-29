/**
 * Component: HeaderTop
 * Purpose: Top header bar with contact info and links
 * Author: Oğuzhan Berke Özdil
 * Last edit: 27 January 2025
 */

import React from 'react';
import { EnvelopeIcon, MapPinIcon, ClockIcon } from '@heroicons/react/24/outline';
import { useScroll } from '../hooks/useScroll';

const HeaderTop: React.FC = () => {
  const scrolled = useScroll(100);

  return (
    <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'transform -translate-y-full' : 'transform translate-y-0'
    } bg-neutral-dark-900 text-neutral-light-50`}>
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center text-xs sm:text-sm py-2 sm:py-3">
          <div className="flex flex-col sm:flex-row items-center space-y-1 sm:space-y-0 sm:space-x-6">
            <span className="flex items-center hover:text-accent-500 transition-colors duration-200">
              <EnvelopeIcon className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
              <span className="hidden sm:inline">healthtech@agh.edu.pl</span>
              <span className="sm:hidden">healthtech@agh.edu.pl</span>
            </span>
            <span className="flex items-center hover:text-accent-500 transition-colors duration-200">
              <MapPinIcon className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
              Krakow, Poland <span className="sm:hidden"> / Mon - Fri: 9:00 - 17:00</span>
            </span>
          </div>
          <div className="hidden sm:flex items-center space-x-6 mt-2 sm:mt-0">
            <span className="flex items-center hover:text-accent-500 transition-colors duration-200">
              <ClockIcon className="w-4 h-4 mr-2" />
              Mon - Fri: 9:00 - 17:00
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;

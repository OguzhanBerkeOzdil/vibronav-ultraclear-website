/**
 * Page loader component with animated heart rate line
 * 
 * @author Oğuzhan Berke Özdil
 * @purpose Creates a medical-themed loading animation for page transitions
 */

import React, { useEffect } from 'react';
import { buildAssetUrl } from '../../config/site';

interface PageLoaderProps {
  isLoading: boolean;
  message?: string;
  backgroundColor?: string;
}

const PageLoader: React.FC<PageLoaderProps> = ({ 
  isLoading, 
  message = "Loading Research Platform",
  backgroundColor = "bg-white"
}) => {
  useEffect(() => {
    if (isLoading) {
      // Disable scrolling when loading
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      // Re-enable scrolling when loading is done
      document.body.style.overflow = 'unset';
      document.documentElement.style.overflow = 'unset';
    }

    // Cleanup function to ensure scrolling is restored
    return () => {
      document.body.style.overflow = 'unset';
      document.documentElement.style.overflow = 'unset';
    };
  }, [isLoading]);

  if (!isLoading) return null;

  return (
    <div className={`fixed inset-0 z-[9999] flex items-center justify-center ${backgroundColor} overflow-hidden`} style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh' }}>
      <div className="flex flex-col items-center space-y-6 sm:space-y-8 px-4">
        {/* Logo - Always visible on all devices with pulse effect */}
        <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 flex items-center justify-center">
          <img 
            src={buildAssetUrl("assets/images/logo.png")} 
            alt="HealthTech Innovation Lab" 
            className="w-full h-full object-contain animate-logo-pulse"
            style={{ minWidth: '80px', minHeight: '80px', display: 'block' }}
          />
        </div>

        {/* Heart Rate Line Animation */}
        <div className="relative w-72 sm:w-80 max-w-[85vw] h-12 sm:h-16 flex items-center justify-center">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 320 60"
            className="w-full h-full"
            preserveAspectRatio="xMidYMid meet"
          >
            {/* Background line */}
            <line
              x1="0"
              y1="30"
              x2="320"
              y2="30"
              stroke="#e5e7eb"
              strokeWidth="2"
            />
            
            {/* Animated heart rate line */}
            <path
              d="M0,30 L60,30 L70,10 L80,50 L90,30 L100,30 L110,5 L120,55 L130,30 L190,30 L200,15 L210,45 L220,30 L280,30 L290,20 L300,40 L320,30"
              fill="none"
              stroke="#2563eb"
              strokeWidth="3"
              strokeLinecap="round"
              className="animate-heartbeat-line"
            />
          </svg>
          
          {/* Pulsing dot */}
          <div className="absolute right-1 sm:right-0 w-2 h-2 sm:w-3 sm:h-3 bg-blue-600 rounded-full animate-pulse-dot"></div>
        </div>

        {/* Loading text */}
        <div className="text-center px-4">
          <p className="text-base sm:text-lg font-medium text-gray-800">{message}</p>
        </div>
      </div>
    </div>
  );
};

export default PageLoader;

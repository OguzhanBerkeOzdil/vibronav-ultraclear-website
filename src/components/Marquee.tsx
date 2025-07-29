/**
 * Component: Marquee
 * Purpose: Scrolling text marquee with announcements
 * Author: Oğuzhan Berke Özdil
 * Last edit: 27 January 2025
 */

import React from 'react';

const Marquee: React.FC = () => {
  const words = [
    "VIBRONAV",
    "PROJECT", 
    "ULTRACLEAR",
    "RESEARCH",
    "INNOVATION",
    "LABORATORY",
    "HEALTH"
  ];

  // Duplicate the words array to create seamless loop
  const duplicatedWords = [...words, ...words];

  return (
    <section className="py-12 bg-gradient-to-r from-primary-600 to-secondary-600 overflow-hidden">
      <div className="relative">
        <div className="whitespace-nowrap overflow-hidden w-full">
          <div className="inline-flex animate-marquee items-center">
            {duplicatedWords.map((word, index) => (
              <div key={index} className="inline-flex items-center flex-shrink-0">
                <span className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-wider">
                  {word}
                </span>
                <span className="text-4xl md:text-5xl lg:text-6xl font-bold text-white/30 mx-8">
                  •
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Marquee;

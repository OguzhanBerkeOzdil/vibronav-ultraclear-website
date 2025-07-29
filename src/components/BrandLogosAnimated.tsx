/**
 * Component: BrandLogosAnimated
 * Purpose: Animated marquee of partner organization logos
 * Author: Oğuzhan Berke Özdil
 * Last edit: 27 January 2025
 */

// src/components/BrandLogosAnimated.tsx
import React, { useState } from 'react';
import { buildAssetUrl } from '../config/site';

interface Brand {
  id: string;
  name: string;
  logoUrl: string;
  url: string;
  alt: string;
}

const BrandLogosAnimated: React.FC = () => {
  const [isPaused, setIsPaused] = useState(false);

  const brands: Brand[] = [
    {
      id: 'unimgd',
      name: 'University of Magdeburg',
      logoUrl: buildAssetUrl('assets/images/home_page/UNIMGD.jpg'),
      url: 'https://www.med.ovgu.de/',
      alt: 'University of Magdeburg Medical Faculty'
    },
    {
      id: 'inka',
      name: 'INKA',
      logoUrl: buildAssetUrl('assets/images/home_page/INKA.png'),
      url: 'https://inka-md.de/',
      alt: 'INKA Application Driven Research'
    },
    {
      id: 'unistut',
      name: 'University of Stuttgart',
      logoUrl: buildAssetUrl('assets/images/home_page/unistut.jpg'),
      url: 'https://www.uni-stuttgart.de/',
      alt: 'University of Stuttgart'
    },
    {
      id: 'medsun',
      name: 'MedSun Labs',
      logoUrl: buildAssetUrl('assets/images/home_page/medsun.jpg'),
      url: 'https://medsun.pl/en/',
      alt: 'MedSun Labs'
    },
    {
      id: 'gbn',
      name: 'GBN Systems',
      logoUrl: buildAssetUrl('assets/images/home_page/GBN.jpg'),
      url: 'https://www.gbn.de/',
      alt: 'GBN Systems - Performing Mechatronics Made in Bavaria'
    },
    {
      id: 'agh',
      name: 'AGH University of Krakow',
      logoUrl: buildAssetUrl('assets/images/home_page/AGH.jpg'),
      url: 'https://www.agh.edu.pl/',
      alt: 'AGH University of Science and Technology'
    },
    {
      id: 'surag',
      name: 'SURAG Medical',
      logoUrl: buildAssetUrl('assets/images/home_page/SURAG.jpg'),
      url: 'https://sites.google.com/surag-medical.com/packagedetailsrapp/home',
      alt: 'SURAG Surgical Audio Guidance'
    }
  ];

  return (
    <section className="py-12 bg-neutral-light-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-neutral-dark-900 mb-4">
            Our <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">Partners</span>
          </h2>
          <p className="text-neutral-dark-600 max-w-2xl mx-auto">
            Collaborating with leading institutions and organizations worldwide
          </p>
        </div>
        
        <div className="relative overflow-hidden">
          {/* Gradient overlays for smooth fade effect */}
          <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-neutral-light-50 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-neutral-light-50 to-transparent z-10 pointer-events-none"></div>
          
          <div 
            className="flex space-x-16 py-4 animate-marquee"
            style={{
              animationPlayState: isPaused ? 'paused' : 'running',
              width: 'max-content'
            }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* First set of brands */}
            {brands.map((brand) => (
              <a
                key={brand.id}
                href={brand.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 group transition-all duration-300 hover:scale-105"
                aria-label={`Visit ${brand.name} website`}
              >
                <div className="w-40 h-24 flex items-center justify-center bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 p-4 border border-neutral-light-200 hover:border-primary-200">
                  <img
                    src={brand.logoUrl}
                    alt={brand.alt}
                    className="max-w-full max-h-full object-contain group-hover:grayscale transition-all duration-300"
                  />
                </div>
              </a>
            ))}
            
            {/* Duplicate set for seamless loop */}
            {brands.map((brand) => (
              <a
                key={`${brand.id}-duplicate`}
                href={brand.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 group transition-all duration-300 hover:scale-105"
                aria-label={`Visit ${brand.name} website`}
              >
                <div className="w-40 h-24 flex items-center justify-center bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 p-4 border border-neutral-light-200 hover:border-primary-200">
                  <img
                    src={brand.logoUrl}
                    alt={brand.alt}
                    className="max-w-full max-h-full object-contain group-hover:grayscale transition-all duration-300"
                  />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandLogosAnimated;

/**
 * Component: PageTitle
 * Purpose: Reusable page title component with breadcrumbs
 * Author: Oğuzhan Berke Özdil
 * Last edit: 27 January 2025
 */

// src/components/PageTitle.tsx
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRightIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import { buildAssetUrl } from '../config/site';

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface PageTitleProps {
  title: string;
  breadcrumb?: BreadcrumbItem[];
  heroImage?: string;
  overlayPattern?: boolean;
  fixedBg?: boolean;
}

const PageTitle: React.FC<PageTitleProps> = ({
  title,
  breadcrumb,
  heroImage,
  overlayPattern = true,
  fixedBg = true
}) => {
  // Use the page_title_background.png as the default background for all pages
  const defaultBackgroundImage = buildAssetUrl('assets/images/page_title_background.png');
  
  const finalHeroImage = heroImage || defaultBackgroundImage;
  useEffect(() => {
    // Simple parallax effect
    const handleScroll = () => {
      if (window.matchMedia('(prefers-reduced-motion: no-preference)').matches) {
        const scrolled = window.pageYOffset;
        const offset = scrolled * 0.5;
        document.documentElement.style.setProperty('--scroll-offset', `${offset}px`);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative isolate flex items-center min-h-[40vh] lg:min-h-[50vh] overflow-hidden -mt-px">
      {/* Improved gradient overlay with better balance */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-600/95 via-primary-500/70 to-primary-400/30 z-20" />
      
      {/* Hero image layer (if provided) */}
      {finalHeroImage && (
        <div className="absolute inset-0 w-full h-full">
          <img
            src={finalHeroImage}
            alt=""
            className={clsx(
              "w-full h-full object-cover object-center",
              fixedBg ? "bg-fixed" : ""
            )}
            style={{
              transform: fixedBg ? 'none' : 'translateY(var(--scroll-offset, 0px))',
              backgroundAttachment: fixedBg ? 'fixed' : 'scroll'
            }}
          />
        </div>
      )}
      
      {/* Enhanced fallback gradient with more visual interest */}
      {!finalHeroImage && (
        <>
          <div className="absolute inset-0 bg-gradient-to-br from-primary-600 via-primary-700 to-accent-600" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
        </>
      )}
      
      {/* Enhanced particle overlay with better visual impact */}
      {overlayPattern && (
        <div className="absolute inset-0 flex items-center justify-center z-30">
          <svg
            className="w-full h-full opacity-30 mix-blend-overlay"
            viewBox="0 0 600 400"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern id="particle-pattern" x="0" y="0" width="60" height="40" patternUnits="userSpaceOnUse">
                <circle cx="30" cy="20" r="2" fill="currentColor" className="text-white/40">
                  <animate attributeName="opacity" values="0.4;0.9;0.4" dur="3s" repeatCount="indefinite" />
                </circle>
                <circle cx="15" cy="10" r="1.5" fill="currentColor" className="text-white/30">
                  <animate attributeName="opacity" values="0.3;0.7;0.3" dur="4s" repeatCount="indefinite" />
                </circle>
                <circle cx="45" cy="30" r="1.5" fill="currentColor" className="text-white/35">
                  <animate attributeName="opacity" values="0.35;0.8;0.35" dur="5s" repeatCount="indefinite" />
                </circle>
                <circle cx="10" cy="35" r="1" fill="currentColor" className="text-white/25">
                  <animate attributeName="opacity" values="0.25;0.6;0.25" dur="6s" repeatCount="indefinite" />
                </circle>
                <circle cx="50" cy="10" r="1" fill="currentColor" className="text-white/30">
                  <animate attributeName="opacity" values="0.3;0.7;0.3" dur="4.5s" repeatCount="indefinite" />
                </circle>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#particle-pattern)" />
          </svg>
        </div>
      )}

      {/* Content with improved typography and spacing */}
      <div className="relative z-40 max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="max-w-4xl">
          {/* Breadcrumb */}
          {breadcrumb && breadcrumb.length > 0 && (
            <nav className="mb-8" aria-label="Breadcrumb">
              <ol className="flex items-center gap-1 text-sm text-white/90">
                {breadcrumb.map((item, index) => (
                  <li key={index} className="flex items-center">
                    {index > 0 && (
                      <ChevronRightIcon className="w-4 h-4 mx-3 text-white/60" aria-hidden="true" />
                    )}
                    <span className="inline-flex items-center gap-1 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-colors duration-200">
                      {item.href.startsWith('/') ? (
                        <Link
                          to={item.href}
                          className={clsx(
                            'transition-colors duration-200',
                            index === breadcrumb.length - 1
                              ? 'text-white/80 cursor-default'
                              : 'text-white hover:text-white'
                          )}
                          aria-current={index === breadcrumb.length - 1 ? 'page' : undefined}
                        >
                          {item.label}
                        </Link>
                      ) : (
                        <a
                          href={item.href}
                          className={clsx(
                            'transition-colors duration-200',
                            index === breadcrumb.length - 1
                              ? 'text-white/80 cursor-default'
                              : 'text-white hover:text-white'
                          )}
                          aria-current={index === breadcrumb.length - 1 ? 'page' : undefined}
                        >
                          {item.label}
                        </a>
                      )}
                    </span>
                  </li>
                ))}
              </ol>
            </nav>
          )}

          {/* Enhanced Page Title with better typography */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-tight">
              {title}
            </h1>
            <div className="h-1 w-24 bg-gradient-to-r from-white via-white/80 to-transparent rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageTitle;

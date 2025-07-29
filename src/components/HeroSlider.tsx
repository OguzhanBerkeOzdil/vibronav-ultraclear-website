/**
 * Component: HeroSlider
 * Purpose: Homepage hero section with image carousel and accessibility features
 * Author: Oğuzhan Berke Özdil
 * Last edit: 28 July 2025
 */

// Uses Swiper.js (MIT License © Vladimir Kharlampidi). See /licenses/swiper.txt
// Uses Heroicons v2 (MIT License © Tailwind Labs). See /licenses/heroicons.txt
import React, { useRef, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import type { SwiperRef } from 'swiper/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import { buildAssetUrl } from '../config/site';
import { projectsData } from '../data/projects';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

// Custom hook for reduced motion detection
const useReducedMotion = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    
    const handleChange = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches);
    };
    
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);
  
  return prefersReducedMotion;
};

const HeroSlider: React.FC = () => {
  const swiperRef = useRef<SwiperRef>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [showNavigation, setShowNavigation] = useState(false);
  const [hideTimeout, setHideTimeout] = useState<ReturnType<typeof setTimeout> | null>(null);
  const prefersReducedMotion = useReducedMotion();

  const slides = [
    {
      id: 1,
      title: projectsData.vibroNav.name,
      subtitle: projectsData.vibroNav.tagline,
      description: projectsData.vibroNav.fullDescription,
      backgroundImage: projectsData.vibroNav.heroImage,
      ctaText: "Explore VibroNav",
      ctaLink: "/projects/vibronav",
      ctaSecondary: "Learn More",
      ctaSecondaryLink: "/contact"
    },
    {
      id: 2,
      title: projectsData.ultraClear.name,
      subtitle: projectsData.ultraClear.tagline,
      description: projectsData.ultraClear.fullDescription,
      backgroundImage: projectsData.ultraClear.heroImage,
      ctaText: "Discover UltraClear",
      ctaLink: "/projects/ultraclear",
      ctaSecondary: "Learn More",
      ctaSecondaryLink: "/contact"
    },
    {
      id: 3,
      title: "Empowering Future Engineers",
      subtitle: "MSc & Engineering Opportunities",
      description: "Collaborate with AGH University researchers on hands‑on projects like VibroNav and UltraClear—gain real‑world experience and help pioneer next‑generation acoustic technologies.",
      backgroundImage: buildAssetUrl("assets/images/home_page/opportunities_slider.png"),
      ctaText: "Check it now",
      ctaLink: "/opportunities",
      ctaSecondary: "Meet Our Team",
      ctaSecondaryLink: "/team"
    }
  ];

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = () => {
      setShowNavigation(true);
      
      if (hideTimeout) {
        clearTimeout(hideTimeout);
      }
      
      const timeout = setTimeout(() => {
        setShowNavigation(false);
      }, 2000);
      
      setHideTimeout(timeout);
    };

    const handleMouseLeave = () => {
      if (hideTimeout) {
        clearTimeout(hideTimeout);
      }
      setShowNavigation(false);
    };

    container.addEventListener('pointermove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      container.removeEventListener('pointermove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
      if (hideTimeout) {
        clearTimeout(hideTimeout);
      }
    };
  }, [hideTimeout]);

  return (
    <section 
      className="relative h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-screen overflow-hidden -mt-px" 
      ref={containerRef}
      role="banner"
      aria-label="Hero section with featured content"
    >
      <Swiper
        ref={swiperRef}
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        spaceBetween={0}
        slidesPerView={1}
        effect="fade"
        fadeEffect={{
          crossFade: true
        }}
        navigation={{
          nextEl: '.hero-button-next',
          prevEl: '.hero-button-prev',
        }}
        pagination={{
          el: '.hero-pagination',
          clickable: true,
          bulletClass: 'hero-pagination-bullet',
          bulletActiveClass: 'hero-pagination-bullet-active',
        }}
        autoplay={prefersReducedMotion ? false : {
          delay: 4000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        loop={true}
        keyboard={{
          enabled: true,
          onlyInViewport: true,
        }}
        a11y={{
          prevSlideMessage: 'Previous slide',
          nextSlideMessage: 'Next slide',
          paginationBulletMessage: 'Go to slide {{index}}',
        }}
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={slide.id}>
            <div 
              className="relative h-full bg-cover bg-center bg-no-repeat sm:bg-cover md:bg-cover lg:bg-cover"
              style={{ backgroundImage: `url(${slide.backgroundImage})` }}
              role="img"
              aria-label={`${slide.title} - ${slide.subtitle}`}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-neutral-dark-900/80 via-neutral-dark-900/60 to-transparent"></div>
              
              {/* Content */}
              <div className="relative z-10 h-full flex items-center">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                  <div className="max-w-4xl">
                    <div className={clsx(
                      'animate-fade-in',
                      index === 0 ? 'animate-delay-200' : '',
                      index === 1 ? 'animate-delay-100' : '',
                    )}>
                      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-3 sm:mb-4 md:mb-6 text-balance leading-tight">
                        {slide.title}
                      </h1>
                      <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-accent-400 mb-3 sm:mb-4 md:mb-6 font-medium">
                        {slide.subtitle}
                      </h2>
                      <p className="text-sm sm:text-base md:text-lg text-neutral-light-100 mb-4 sm:mb-6 md:mb-8 max-w-2xl leading-relaxed">
                        {slide.description}
                      </p>
                      
                      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                        <Link
                          to={slide.ctaLink}
                          className="btn-primary group w-full sm:w-auto text-center"
                        >
                          {slide.ctaText}
                          <ChevronRightIcon className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                        </Link>
                        <Link
                          to={slide.ctaSecondaryLink}
                          className="btn-outline bg-white/10 border-white text-white hover:bg-white hover:text-neutral-dark-900 w-full sm:w-auto text-center"
                        >
                          {slide.ctaSecondary}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      
      {/* Custom Navigation Arrows */}
      <button 
        className={clsx(
          'hero-button-prev absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent',
          showNavigation ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
        )}
        aria-label="Previous slide"
      >
        <ChevronLeftIcon className="w-6 h-6" />
      </button>
      
      <button 
        className={clsx(
          'hero-button-next absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent',
          showNavigation ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
        )}
        aria-label="Next slide"
      >
        <ChevronRightIcon className="w-6 h-6" />
      </button>
      
      {/* Custom Pagination */}
      <div className="hero-pagination absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-3"></div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 right-8 text-white animate-bounce">
        <div className="flex flex-col items-center">
          <span className="text-sm mb-2 opacity-75">Scroll</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default HeroSlider;

/**
 * Component: App
 * Purpose: Main application component with routing and SEO setup
 * Author: Oğuzhan Berke Özdil
 * Last edit: 28 July 2025
 */

import React, { Suspense, useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import { buildUrl, SITE_CONFIG } from './config/site';
import './styles/globals.css';

// UI Components
import PageLoader from './components/ui/PageLoader';
import ScrollToTop from './components/ui/ScrollToTop';

// Lazy load page components
const Home = React.lazy(() => import('./pages/Home'));
const Contact = React.lazy(() => import('./pages/Contact'));
const Publications = React.lazy(() => import('./pages/Publications'));
const Opportunities = React.lazy(() => import('./pages/Opportunities'));
const VibroNav = React.lazy(() => import('./pages/VibroNav'));
const UltraClear = React.lazy(() => import('./pages/UltraClear'));
const Team = React.lazy(() => import('./pages/Team'));
const BlogIndex = React.lazy(() => import('./components/blog/BlogIndex'));
const BlogPost = React.lazy(() => import('./components/blog/BlogPost'));

// Policy pages
const PrivacyPolicyPage = React.lazy(() => import('./pages/policies/PrivacyPolicyPage'));
const TermsPage = React.lazy(() => import('./pages/policies/TermsPage'));
const AccessibilityPage = React.lazy(() => import('./pages/policies/AccessibilityPage'));

// Lazy load layout components
const HeaderTop = React.lazy(() => import('./components/HeaderTop'));
const HeaderNavbar = React.lazy(() => import('./components/HeaderNavbar'));
const Footer = React.lazy(() => import('./components/Footer'));
const BackToTop = React.lazy(() => import('./components/ui/BackToTop'));

// Loading fallback component
const LoadingFallback: React.FC = () => (
  <div className="flex items-center justify-center py-8">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600"></div>
  </div>
);

// SEO Meta Component
const SEOMeta: React.FC = () => (
  <Helmet>
    <title>VibroNav & UltraClear - Medical Navigation & Imaging Technology | AGH University</title>
    <meta 
      name="description" 
      content="VibroNav vibroacoustic navigation and UltraClear hybrid medical imaging technologies. Leading research in needle guidance systems, medical navigation, healthcare technology at AGH University."
    />
    <meta name="keywords" content="VibroNav, Vibronav, vibroacoustic navigation, UltraClear, Ultraclear, hybrid medical imaging, medical navigation, needle guidance system, healthcare technology, healthcare innovation, surgical guidance, medical devices, AGH University" />
    <meta name="author" content={SITE_CONFIG.author} />
    <meta name="robots" content="index, follow" />
    <link rel="canonical" href={buildUrl()} />
    
    {/* Open Graph / Facebook */}
    <meta property="og:type" content="website" />
    <meta property="og:url" content={buildUrl()} />
    <meta property="og:title" content="VibroNav & UltraClear - Medical Navigation & Imaging Technology | AGH University" />
    <meta property="og:description" content="VibroNav vibroacoustic navigation and UltraClear hybrid medical imaging technologies. Leading research in needle guidance systems, medical navigation, healthcare technology at AGH University." />
    <meta property="og:image" content={buildUrl('/assets/images/home_page/hero-research.jpg')} />
    <meta property="og:site_name" content="VibroNav & UltraClear Research" />
    
    {/* Twitter */}
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content={buildUrl()} />
    <meta property="twitter:title" content="VibroNav & UltraClear - Medical Navigation & Imaging Technology" />
    <meta property="twitter:description" content="VibroNav vibroacoustic navigation and UltraClear hybrid medical imaging technologies for advanced healthcare solutions." />
    <meta property="twitter:image" content={buildUrl('/assets/images/home_page/hero-research.jpg')} />
    
    {/* Additional Meta */}
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="theme-color" content="#0033A1" />
    <meta name="msapplication-TileColor" content="#0033A1" />
    
    {/* Structured Data */}
    <script type="application/ld+json">
      {JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": SITE_CONFIG.author,
        "url": buildUrl(),
        "logo": buildUrl('/assets/images/logo.png'),
        "description": SITE_CONFIG.description,
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "PL",
          "addressLocality": "Kraków",
          "addressRegion": "Lesser Poland Voivodeship",
          "streetAddress": "AGH University of Science and Technology"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "academic",
          "url": buildUrl('/contact')
        },
        "sameAs": [
          "https://www.agh.edu.pl/",
          "https://github.com/healthtech-innovation-agh"
        ]
      })}
    </script>
  </Helmet>
);

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(() => {
    // Only show loader on initial site visit (not cached page navigations)
    // Updated by Oğuzhan Berke Özdil – 2025
    return !sessionStorage.getItem('site_loaded');
  });

  useEffect(() => {
    if (isLoading) {
      // Simulate initial app loading only on first visit
      const timer = setTimeout(() => {
        setIsLoading(false);
        sessionStorage.setItem('site_loaded', 'true');
      }, 1500); // Reduced to 1.5 seconds for better UX

      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  return (
    <HelmetProvider>
      <div className="min-h-screen bg-white">
        <SEOMeta />
        
        {/* Page Loader */}
        <PageLoader isLoading={isLoading} />
        
        {/* Skip to content link for accessibility */}
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 bg-primary-600 text-white p-2 z-50 rounded-br"
        >
          Skip to main content
        </a>
        
        <Suspense fallback={<LoadingFallback />}>
          <HeaderTop />
        </Suspense>
        
        <Suspense fallback={<LoadingFallback />}>
          <HeaderNavbar />
        </Suspense>
        
        <main id="main-content" className="pt-[120px] sm:pt-[140px]">
          <ScrollToTop />
          <Suspense fallback={<LoadingFallback />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/publications" element={<Publications />} />
              <Route path="/opportunities" element={<Opportunities />} />
              <Route path="/team" element={<Team />} />
              <Route path="/blog" element={<BlogIndex />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              <Route path="/projects/vibronav" element={<VibroNav />} />
              <Route path="/projects/ultraclear" element={<UltraClear />} />
              
              {/* Policy pages */}
              <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
              <Route path="/terms-of-use" element={<TermsPage />} />
              <Route path="/accessibility" element={<AccessibilityPage />} />
            </Routes>
          </Suspense>
        </main>
        
        <Suspense fallback={<LoadingFallback />}>
          <Footer />
        </Suspense>
        
        <Suspense fallback={<LoadingFallback />}>
          <BackToTop />
        </Suspense>
      </div>
    </HelmetProvider>
  );
};

export default App;

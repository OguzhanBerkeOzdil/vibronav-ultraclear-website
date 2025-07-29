/**
 * Component: Home
 * Purpose: Home page component with hero, features, and projects
 * Author: Oğuzhan Berke Özdil
 * Last edit: 28 July 2025
 */

import React, { Suspense } from 'react';
import { Helmet } from 'react-helmet-async';
import { generateSEOData } from '../lib/seo';

// Lazy load components for code splitting
const HeroSlider = React.lazy(() => import('../components/HeroSlider'));
const FeatureCards = React.lazy(() => import('../components/FeatureCards'));
const AboutUs = React.lazy(() => import('../components/AboutUs'));
const Marquee = React.lazy(() => import('../components/Marquee'));
const ProjectCards = React.lazy(() => import('../components/ProjectCards'));
const BrandLogosAnimated = React.lazy(() => import('../components/BrandLogosAnimated'));
const NewsSection = React.lazy(() => import('../components/NewsSection'));

// Loading fallback component
const LoadingFallback: React.FC = () => (
  <div className="flex items-center justify-center py-8">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600"></div>
  </div>
);

const Home: React.FC = () => {
  const seoData = generateSEOData({
    title: 'VibroNav & UltraClear - Revolutionary Medical Navigation & Imaging Technology | AGH University',
    description: 'Discover VibroNav vibroacoustic navigation system and UltraClear hybrid medical imaging technology. Leading research in needle guidance systems, medical navigation, healthcare innovation, and surgical guidance at AGH University. Advanced medical devices for minimally invasive procedures and precision medicine.',
    keywords: ['VibroNav', 'Vibronav', 'vibroacoustic navigation', 'UltraClear', 'Ultraclear', 'hybrid medical imaging', 'medical navigation', 'needle guidance system', 'healthcare technology', 'healthcare innovation', 'surgical guidance', 'medical devices', 'minimally invasive procedures', 'precision medicine', 'AGH University', 'biomedical engineering', 'audio-tactile feedback', 'medical imaging', 'surgical technology', 'healthcare technology AGH', 'medical research', 'DFG NCN research', 'sentinel lymph node', 'ultrasound technology', 'gamma detection', 'medical device development', 'surgical navigation', 'clinical feedback', 'real-time DSP', 'machine learning medical'],
    url: '/',
    type: 'website',
  });

  return (
    <>
      <Helmet>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <meta name="keywords" content={seoData.keywords} />
        <link rel="canonical" href={seoData.canonical} />
        
        {/* Open Graph */}
        <meta property="og:title" content={seoData.openGraph.title} />
        <meta property="og:description" content={seoData.openGraph.description} />
        <meta property="og:url" content={seoData.openGraph.url} />
        <meta property="og:type" content={seoData.openGraph.type} />
        <meta property="og:image" content={seoData.openGraph.image} />
        
        {/* Twitter */}
        <meta name="twitter:card" content={seoData.twitter.card} />
        <meta name="twitter:title" content={seoData.twitter.title} />
        <meta name="twitter:description" content={seoData.twitter.description} />
        <meta name="twitter:image" content={seoData.twitter.image} />
        
        {/* Enhanced Structured Data for Homepage */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ResearchOrganization",
            "name": "HealthTech Innovation Lab",
            "alternateName": ["AGH University HealthTech Lab", "VibroNav Research", "UltraClear Research", "Medical Navigation Research"],
            "url": seoData.canonical,
            "logo": seoData.openGraph.image,
            "description": "Leading research organization developing VibroNav vibroacoustic navigation and UltraClear hybrid medical imaging technologies for advanced healthcare solutions",
            "keywords": ["VibroNav", "Vibronav", "UltraClear", "Ultraclear", "medical navigation", "needle guidance system", "healthcare technology", "hybrid medical imaging", "vibroacoustic navigation", "surgical guidance"],
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "Poland",
              "addressLocality": "Kraków",
              "streetAddress": "AGH University of Science and Technology"
            },
            "founder": {
              "@type": "Organization",
              "name": "AGH University of Science and Technology",
              "url": "https://www.agh.edu.pl/"
            },
            "mainEntity": [
              {
                "@type": "Product",
                "name": "VibroNav",
                "alternateName": ["Vibronav", "VibroNav System", "Audio-Tactile Navigation"],
                "description": "Revolutionary vibroacoustic navigation system for needle guidance in medical procedures",
                "category": "Medical Device",
                "keywords": ["VibroNav", "vibroacoustic navigation", "needle guidance system", "medical navigation", "audio-tactile feedback"],
                "url": `${seoData.canonical.replace(/\/$/, '')}/projects/vibronav`
              },
              {
                "@type": "Product", 
                "name": "UltraClear",
                "alternateName": ["Ultraclear", "UltraClear System", "Hybrid Medical Imaging"],
                "description": "Advanced hybrid medical imaging technology combining ultrasound and gamma detection",
                "category": "Medical Device",
                "keywords": ["UltraClear", "hybrid medical imaging", "ultrasound technology", "gamma detection", "medical imaging"],
                "url": `${seoData.canonical.replace(/\/$/, '')}/projects/ultraclear`
              }
            ],
            "researchProject": [
              {
                "@type": "ResearchProject",
                "name": "VibroNav Development",
                "alternateName": ["Vibronav Project", "Audio-Tactile Navigation Research"],
                "description": "Revolutionary audio-tactile navigation system for needle-based minimally invasive medical procedures",
                "url": `${seoData.canonical.replace(/\/$/, '')}/projects/vibronav`,
                "keywords": ["VibroNav", "vibroacoustic navigation", "medical navigation", "needle guidance"],
                "fundingSource": ["Deutsche Forschungsgemeinschaft (DFG)", "National Science Centre Poland (NCN)"]
              },
              {
                "@type": "ResearchProject",
                "name": "UltraClear Development",
                "alternateName": ["Ultraclear Project", "Hybrid Imaging Research"],
                "description": "Advanced signal processing technology for enhanced medical imaging",
                "url": `${seoData.canonical.replace(/\/$/, '')}/projects/ultraclear`,
                "keywords": ["UltraClear", "medical imaging", "signal processing", "ultrasound technology"]
              }
            ],
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": seoData.canonical,
              "name": "VibroNav & UltraClear Medical Technology Research Homepage",
              "description": "Homepage for VibroNav vibroacoustic navigation and UltraClear hybrid medical imaging research"
            },
            "sameAs": [
              "https://github.com/oguzhanberkeozdil",
              "https://www.linkedin.com/in/oguzhanberkeozdil/"
            ],
            "potentialAction": [
              {
                "@type": "SearchAction",
                "target": {
                  "@type": "EntryPoint",
                  "urlTemplate": `${seoData.canonical}?q={search_term_string}`
                },
                "query-input": "required name=search_term_string"
              }
            ]
          })}
        </script>
      </Helmet>
      
      <Suspense fallback={<LoadingFallback />}>
        <HeroSlider />
      </Suspense>
      
      <Suspense fallback={<LoadingFallback />}>
        <FeatureCards />
      </Suspense>
      
      <Suspense fallback={<LoadingFallback />}>
        <Marquee />
      </Suspense>
      
      <Suspense fallback={<LoadingFallback />}>
        <AboutUs />
      </Suspense>
      
      <Suspense fallback={<LoadingFallback />}>
        <ProjectCards />
      </Suspense>
      
      <Suspense fallback={<LoadingFallback />}>
        <BrandLogosAnimated />
      </Suspense>
      
      <Suspense fallback={<LoadingFallback />}>
        <NewsSection />
      </Suspense>
    </>
  );
};

export default Home;

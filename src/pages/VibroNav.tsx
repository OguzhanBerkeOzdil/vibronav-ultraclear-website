/**
 * VibroNav page refactor – real content, vertical timeline
 * Author: Oğuzhan Berke Özdil
 * Last edit: 28 July 2025
 */

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { generateSEOData } from '../lib/seo';
import PageTitle from '../components/PageTitle';
import ProjectIntro from '../components/vibronav/ProjectIntro';
import KeyFeatures from '../components/vibronav/KeyFeatures';
import VerticalTimeline from '../components/vibronav/VerticalTimeline';
import GalleryMasonry from '../components/vibronav/GalleryMasonry';

const VibroNav: React.FC = () => {
  const seoData = generateSEOData({
    title: 'VibroNav - Revolutionary Audio-Tactile Navigation for Medical Procedures | AGH University',
    description: 'VibroNav: Groundbreaking DFG/NCN-funded audio-tactile navigation system for needle-based minimally invasive procedures. Developed by AGH University with advanced DSP and machine learning for enhanced surgical precision and patient safety.',
    keywords: ['VibroNav', 'Vibronav project', 'vibroacoustic navigation', 'audio-tactile guidance', 'needle guidance system', 'minimally invasive procedures', 'medical navigation', 'surgical guidance', 'DFG funding', 'NCN OPUS-LAP', 'AGH University', 'biomedical engineering', 'real-time DSP', 'machine learning medical', 'clinical feedback', 'medical devices', 'healthcare technology', 'precision medicine', 'needle intervention', 'surgical technology'],
    url: '/projects/vibronav',
    type: 'article',
  });

  const breadcrumb = [
    { label: 'Home', href: '/' },
    { label: 'Projects', href: '/#projects' },
    { label: 'VibroNav', href: '/projects/vibronav' },
  ];

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
        
        {/* Structured Data for Research Project */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ResearchProject",
            "name": "VibroNav",
            "alternateName": ["Vibronav", "VibroNav Project", "Audio-Tactile Navigation System"],
            "description": "Revolutionary audio-tactile navigation system for needle-based minimally invasive medical procedures, funded by DFG and NCN",
            "url": seoData.canonical,
            "image": seoData.openGraph.image,
            "fundingSource": [
              {
                "@type": "Organization",
                "name": "Deutsche Forschungsgemeinschaft (DFG)",
                "url": "https://www.dfg.de/"
              },
              {
                "@type": "Organization", 
                "name": "National Science Centre Poland (NCN)",
                "url": "https://www.ncn.gov.pl/"
              }
            ],
            "creator": {
              "@type": "Organization",
              "name": "AGH University of Science and Technology",
              "url": "https://www.agh.edu.pl/"
            },
            "keywords": ["VibroNav", "vibroacoustic navigation", "medical navigation", "needle guidance", "minimally invasive procedures", "audio-tactile feedback", "biomedical engineering"],
            "applicationCategory": "Medical Device",
            "operatingSystem": "Real-time DSP Systems"
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-neutral-light-50">
        <PageTitle
          title="VibroNav Project"
          breadcrumb={breadcrumb}
        />
        
        {/* Project Introduction */}
        <ProjectIntro />
        
        {/* Key Features */}
        <KeyFeatures />
        
        {/* Vertical Timeline */}
        <VerticalTimeline />
        
        {/* Gallery */}
        <GalleryMasonry />
      </div>
    </>
  );
};

export default VibroNav;

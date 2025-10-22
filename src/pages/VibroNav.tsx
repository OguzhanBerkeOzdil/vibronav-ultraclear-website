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
import VideoSection from '../components/shared/VideoSection';
import { buildAssetUrl } from '../config/site';

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
            "@type": "Article",
            "headline": "VibroNav - Revolutionary Audio-Tactile Navigation for Medical Procedures",
            "name": "VibroNav",
            "alternateName": ["Vibronav", "VibroNav Project", "Audio-Tactile Navigation System"],
            "description": "Revolutionary audio-tactile navigation system for needle-based minimally invasive medical procedures, funded by DFG and NCN",
            "url": seoData.canonical,
            "image": seoData.openGraph.image,
            "author": {
              "@type": "Organization",
              "name": "AGH University of Science and Technology",
              "url": "https://www.agh.edu.pl/"
            },
            "publisher": {
              "@type": "Organization",
              "name": "AGH University of Science and Technology",
              "url": "https://www.agh.edu.pl/",
              "logo": {
                "@type": "ImageObject",
                "url": "https://oguzhanberkeozdil.github.io/vibronav-ultraclear-website/assets/images/logo.png"
              }
            },
            "datePublished": "2024-01-01",
            "dateModified": "2025-07-31",
            "articleSection": "Research Projects",
            "keywords": ["VibroNav", "vibroacoustic navigation", "medical navigation", "needle guidance", "minimally invasive procedures", "audio-tactile feedback", "biomedical engineering"],
            "about": [
              {
                "@type": "ResearchProject",
                "name": "VibroNav",
                "fundingSource": [
                  {
                    "@type": "Organization",
                    "name": "Deutsche Forschungsgemeinschaft (DFG)",
                    "url": "https://www.dfg.de/"
                  },
                  {
                    "@type": "Organization", 
                    "name": "National Science Centre Poland (NCN) - OPUS-LAP",
                    "url": "https://www.ncn.gov.pl/"
                  }
                ],
                "applicationCategory": "Medical Device",
                "operatingSystem": "Real-time DSP Systems"
              }
            ]
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
        
        {/* Intro Video - Start Here */}
        <VideoSection 
          title="Start here with VibroNav"
          videos={[
            {
              id: 'vibronav-intro',
              title: 'Start here with VibroNav',
              description: 'Introduction to the VibroNav system and its key features for medical navigation.',
              videoUrl: buildAssetUrl('/assets/videos/vibronav/VIBRONAV_Video.mp4'),
              isLocal: true,
            },
          ]}
        />
        
        {/* Key Features */}
        <KeyFeatures />
        
        {/* Vertical Timeline */}
        <VerticalTimeline />
        
        {/* Gallery */}
        <GalleryMasonry />
        
        {/* Test Drive Video */}
        <VideoSection 
          title="VibroNav Test Drive"
          videos={[
            {
              id: 'vibronav-main',
              title: 'VibroNav Test Drive',
              description: 'Comprehensive demonstration of the VibroNav system for enhanced surgical precision in minimally invasive procedures.',
              videoUrl: buildAssetUrl('/assets/videos/vibronav/video_1.mp4'),
              isLocal: true,
            },
          ]}
        />
      </div>
    </>
  );
};

export default VibroNav;

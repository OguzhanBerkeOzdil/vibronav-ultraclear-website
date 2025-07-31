/**
 * Component: UltraClear
 * Purpose: UltraClear project page with SEO and structured data
 * Author: Oğuzhan Berke Özdil
 * Last edit: 28 July 2025
 */

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { generateSEOData } from '../lib/seo';
import PageTitle from '../components/PageTitle';
import HeroOverview from '../components/ultraclear/HeroOverview';
import ClinicalNeedSection from '../components/ultraclear/ClinicalNeedSection';
import CoreFeaturesGrid from '../components/ultraclear/CoreFeaturesGrid';
import VerticalTimeline from '../components/ultraclear/VerticalTimeline';
import ResearchObjectivesList from '../components/ultraclear/ResearchObjectivesList';
import GalleryGrid from '../components/ultraclear/GalleryGrid';
import IntegratedApproachBanner from '../components/ultraclear/IntegratedApproachBanner';
import VideoSection from '../components/shared/VideoSection';
import { buildAssetUrl } from '../config/site';

const UltraClear: React.FC = () => {
  const seoData = generateSEOData({
    title: 'UltraClear - Revolutionary Hybrid Medical Imaging Technology | AGH University',
    description: 'UltraClear: Groundbreaking hybrid imaging device combining ultrasound and gamma detection for enhanced sentinel lymph node visualization. Advanced medical technology developed at AGH University for improved surgical precision and patient outcomes.',
    keywords: ['UltraClear', 'Ultraclear', 'hybrid medical imaging', 'ultrasound technology', 'gamma detection', 'medical devices', 'surgical imaging', 'sentinel lymph node', 'biomedical engineering', 'AGH University', 'medical innovation', 'healthcare technology', 'diagnostic imaging', 'surgical guidance', 'medical research', 'imaging technology', 'precision medicine'],
    url: '/projects/ultraclear',
    type: 'article',
  });

  const breadcrumb = [
    { label: 'Home', href: '/' },
    { label: 'Projects', href: '/#projects' },
    { label: 'UltraClear', href: '/projects/ultraclear' },
  ];

  const jsonLdSchema = {
    "@context": "https://schema.org",
    "@type": "ResearchProject",
    "name": "UltraClear",
    "alternateName": ["Ultraclear", "UltraClear Project", "Hybrid Medical Imaging System"],
    "description": "Revolutionary hybrid imaging device combining ultrasound and gamma detection for enhanced sentinel lymph node visualization during surgical procedures. Developed at AGH University for improved surgical precision.",
    "url": seoData.canonical,
    "image": seoData.openGraph.image,
    "keywords": ["UltraClear", "hybrid medical imaging", "ultrasound technology", "gamma detection", "medical devices", "surgical imaging", "sentinel lymph node", "biomedical engineering"],
    "about": {
      "@type": "MedicalProcedure",
      "name": "Sentinel Lymph Node Biopsy",
      "description": "Surgical procedure enhanced by hybrid imaging technology"
    },
    "creator": {
      "@type": "Organization",
      "name": "AGH University of Science and Technology",
      "url": "https://www.agh.edu.pl/"
    },
    "sponsor": {
      "@type": "Organization",
      "name": "HealthTech Innovation Lab"
    },
    "applicationCategory": "Medical Device",
    "operatingSystem": "Hybrid Imaging Systems",
    "startDate": "2023",
    "status": "Active Development"
  };

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
        
        <script type="application/ld+json">
          {JSON.stringify(jsonLdSchema)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-neutral-light-50">
        <PageTitle
          title="UltraClear Project"
          breadcrumb={breadcrumb}
        />
        
        <HeroOverview />
        <ClinicalNeedSection />
        <CoreFeaturesGrid />
        <VerticalTimeline />
        <ResearchObjectivesList />
        <GalleryGrid />
        
        {/* Video Section */}
        <VideoSection 
          title="UltraClear Project Video"
          videos={[
            {
              id: 'ultraclear-main',
              title: 'UltraClear Hybrid Imaging Technology',
              description: 'Demonstration of UltraClear hybrid imaging device combining ultrasound and gamma detection for enhanced medical imaging.',
              videoUrl: buildAssetUrl('/assets/videos/ultraclear/video_1.mp4'),
              isLocal: true,
            },
          ]}
        />
        
        <IntegratedApproachBanner />
      </div>
    </>
  );
};

export default UltraClear;

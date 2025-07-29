/**
 * Component: Opportunities
 * Purpose: Opportunities page for MSc programs and teaching
 * Author: Oğuzhan Berke Özdil
 * Last edit: 28 July 2025
 */

// Rewritten Opportunities page with Teaching + MSc sections – January 22, 2025
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { generateSEOData } from '../lib/seo';
import PageTitle from '../components/PageTitle';
import TeachingSection from '../components/opportunities/TeachingSection';
import MscOpportunitiesSection from '../components/opportunities/MscOpportunitiesSection';
import FAQAccordion from '../components/opportunities/FAQAccordion';

const Opportunities: React.FC = () => {
  const seoData = generateSEOData({
    title: 'MSc Engineering Opportunities & Teaching - HealthTech Innovation Lab',
    description: 'Discover master\'s degree opportunities and teaching programs in medical technology and biomedical engineering at AGH University.',
    keywords: ['MSc opportunities', 'engineering education', 'biomedical engineering', 'teaching programs', 'AGH University', 'graduate studies'],
    url: '/opportunities',
    type: 'website',
  });

  const breadcrumb = [
    { label: 'Home', href: '/' },
    { label: 'MSc / Eng Opportunities & Teaching', href: '/opportunities' }
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
      </Helmet>

      <div className="min-h-screen">
      <PageTitle 
        title="MSc / Eng Opportunities & Teaching"
        breadcrumb={breadcrumb}
      />
      
      {/* Teaching Section */}
      <TeachingSection />
      
      {/* MSc/Eng Opportunities Section */}
      <MscOpportunitiesSection />
      
      {/* FAQ Section */}
      <FAQAccordion />
      </div>
    </>
  );
};

export default Opportunities;

/**
 * Component: Contact
 * Purpose: Contact page with form and location information
 * Author: Oğuzhan Berke Özdil
 * Last edit: 28 July 2025
 */

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { generateSEOData } from '../lib/seo';
import { buildAssetUrl } from '../config/site';
import PageTitle from '../components/PageTitle';
import ContactGrid from '../components/contact/ContactGrid';
import GoogleMapEmbed from '../components/contact/GoogleMapEmbed';
import ContactForm from '../components/contact/ContactForm';

const Contact: React.FC = () => {
  const seoData = generateSEOData({
    title: 'Contact Us - HealthTech Innovation Lab',
    description: 'Get in touch with our research team at AGH University. Contact information, office locations, and inquiry form for VibroNav and UltraClear projects.',
    keywords: ['contact', 'AGH University', 'research collaboration', 'VibroNav', 'UltraClear', 'medical technology'],
    url: '/contact',
    type: 'website',
  });

  const breadcrumb = [
    { label: 'Home', href: '/' },
    { label: 'Contact', href: '/contact' }
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
      
      <div className="min-h-screen bg-neutral-light-50">
      {/* 1. PageTitle with fixed background */}
      <PageTitle 
        title="Contact" 
        breadcrumb={breadcrumb}
        fixedBg={true}
      />
      
      {/* 2. Four Contact Info Cards */}
      <ContactGrid />
      
    
      
      {/* 3. Two-column section: Contact Form + Illustration */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Left: Contact Form */}
            <div>
              <ContactForm />
            </div>
            
            {/* Right: Illustration */}
            <div className="bg-white rounded-xl shadow-lg p-0 flex items-center justify-center overflow-hidden order-first lg:order-last">
              <div className="w-full h-full">
                <img 
                  src={buildAssetUrl("assets/contact/contact.png")} 
                  alt="Contact illustration" 
                  className="w-full h-full object-cover object-right"
                  style={{ minHeight: '300px' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

        {/* 4. Full-width Google Map */}
      <GoogleMapEmbed />
      </div>
    </>
  );
};

export default Contact;

/**
 * Utility: SEO Helpers
 * Purpose: Functions for generating SEO metadata and structured data
 * Author: Oğuzhan Berke Özdil
 * Last edit: 28 July 2025
 */

import { buildUrl, SITE_CONFIG } from '../config/site';

export interface SEOData {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'profile';
  publishedTime?: string;
  modifiedTime?: string;
}

export function generateSEOData(data: SEOData) {
  return {
    title: data.title,
    description: data.description,
    canonical: data.url ? buildUrl(data.url) : buildUrl(),
    openGraph: {
      title: data.title,
      description: data.description,
      url: data.url ? buildUrl(data.url) : buildUrl(),
      type: data.type || 'website',
      image: data.image ? buildUrl(data.image) : buildUrl('/assets/images/logo.png'),
      ...(data.publishedTime && { publishedTime: data.publishedTime }),
      ...(data.modifiedTime && { modifiedTime: data.modifiedTime }),
    },
    twitter: {
      card: 'summary_large_image',
      title: data.title,
      description: data.description,
      image: data.image ? buildUrl(data.image) : buildUrl('/assets/images/logo.png'),
    },
    keywords: data.keywords?.join(', ') || SITE_CONFIG.keywords,
  };
}

export function generateStructuredData(type: 'Organization' | 'ResearchProject', data: Record<string, unknown>) {
  const baseStructure = {
    "@context": "https://schema.org",
    "@type": type,
  };
  
  switch (type) {
    case 'Organization':
      return {
        ...baseStructure,
        name: SITE_CONFIG.name,
        description: SITE_CONFIG.description,
        url: buildUrl(),
        logo: buildUrl('/assets/images/logo.png'),
        ...data,
      };
      
    case 'ResearchProject':
      return {
        ...baseStructure,
        name: data.name,
        description: data.description,
        fundingSource: data.fundingSource,
        startDate: data.startDate,
        ...data,
      };
      
    default:
      return baseStructure;
  }
}

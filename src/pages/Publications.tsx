/**
 * Component: Publications
 * Purpose: Publications page with filterable research papers
 * Author: Oğuzhan Berke Özdil
 * Last edit: 28 July 2025
 */

// src/pages/Publications.tsx
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { generateSEOData } from '../lib/seo';
import PageTitle from '../components/PageTitle';
import PublicationsToolbar from '../components/publications/PublicationsToolbar';
import PublicationList from '../components/publications/PublicationList';
import { Publication, GroupByOption } from '../types/publications';

const Publications: React.FC = () => {
  const seoData = generateSEOData({
    title: 'Research Publications - HealthTech Innovation Lab',
    description: 'Browse our comprehensive collection of research publications covering medical technology, signal processing, and biomedical engineering innovations.',
    keywords: ['research publications', 'medical technology', 'biomedical engineering', 'signal processing', 'academic papers', 'VibroNav', 'UltraClear'],
    url: '/publications',
    type: 'website',
  });

  const [publications, setPublications] = useState<Publication[]>([]);
  const [filteredPublications, setFilteredPublications] = useState<Publication[]>([]);
  const [groupBy, setGroupBy] = useState<GroupByOption>('year');
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  // Filter states
  const [searchKeyword, setSearchKeyword] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [yearFrom, setYearFrom] = useState('');
  const [yearTo, setYearTo] = useState('');

  const breadcrumb = [
    { label: 'Home', href: '/' },
    { label: 'Publications', href: '/publications' }
  ];

  useEffect(() => {
    const loadPublications = async () => {
      try {
        setLoading(true);
        const response = await import('../content/publications.json');
        // Type assertion for publications data
        const publications = response.default as Publication[];
        setPublications(publications);
        setFilteredPublications(publications);
      } catch (err) {
        console.error('Failed to load publications:', err);
        setError('Failed to load publications. Please ensure the publications.json file exists.');
        setPublications([]);
        setFilteredPublications([]);
      } finally {
        setLoading(false);
      }
    };

    loadPublications();
  }, []);

  // Filter publications whenever filter criteria change
  useEffect(() => {
    let filtered = [...publications];

    // Search in title, abstract, keywords, and authors
    if (searchKeyword.trim()) {
      const keyword = searchKeyword.toLowerCase();
      filtered = filtered.filter(pub => 
        pub.title.toLowerCase().includes(keyword) ||
        pub.abstract?.toLowerCase().includes(keyword) ||
        pub.keywords.some(k => k.toLowerCase().includes(keyword)) ||
        pub.authors.some(a => a.toLowerCase().includes(keyword))
      );
    }

    // Filter by publication type
    if (selectedType) {
      filtered = filtered.filter(pub => pub.type === selectedType);
    }

    // Filter by year range
    if (yearFrom) {
      filtered = filtered.filter(pub => parseInt(pub.year) >= parseInt(yearFrom));
    }
    if (yearTo) {
      filtered = filtered.filter(pub => parseInt(pub.year) <= parseInt(yearTo));
    }

    setFilteredPublications(filtered);
  }, [publications, searchKeyword, selectedType, yearFrom, yearTo]);

  const handleClearFilters = () => {
    setSearchKeyword('');
    setSelectedType('');
    setYearFrom('');
    setYearTo('');
  };

  const handleApplyFilters = () => {
    // Filters are applied automatically via useEffect
    setFiltersOpen(false);
  };

  const handleToggleSidebar = () => {
    setFiltersOpen(!filtersOpen);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-neutral-light-50">
        <PageTitle 
          title="Publications" 
          breadcrumb={breadcrumb}
        />
        <div className="max-w-6xl mx-auto px-4 lg:px-8 py-16">
          <div className="flex items-center justify-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
            <span className="ml-3 text-neutral-dark-600">Loading publications...</span>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-neutral-light-50">
        <PageTitle 
          title="Publications" 
          breadcrumb={breadcrumb}
        />
        <div className="max-w-6xl mx-auto px-4 lg:px-8 py-16">
          <div className="text-center py-12">
            <div className="text-red-600 text-lg mb-4">{error}</div>
            <div className="text-neutral-dark-500">
              <p className="mb-2">To add publications:</p>
              <ol className="text-left inline-block space-y-1">
                <li>1. Add your BibTeX file to <code className="bg-gray-100 px-2 py-1 rounded">src/content/publications.bib</code></li>
                <li>2. Run <code className="bg-gray-100 px-2 py-1 rounded">node scripts/parse-bib.mjs</code></li>
                <li>3. Rebuild the application</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    );
  }

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
      <PageTitle 
        title="Publications" 
        breadcrumb={breadcrumb}
      />
      
      <div className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Toolbar */}
          <div className="mb-12">
            <PublicationsToolbar 
              groupBy={groupBy}
              onGroupByChange={setGroupBy}
              onToggleSidebar={handleToggleSidebar}
              filtersOpen={filtersOpen}
            />
          </div>
          
          {/* Filters Sidebar */}
          {filtersOpen && (
            <div className="mb-8 bg-white rounded-lg shadow-sm p-6 border-l-4 border-primary-500">
              <h3 className="text-lg font-semibold text-neutral-dark-900 mb-4">
                Advanced Filters 
                <span className="ml-2 text-sm font-normal text-neutral-dark-500">
                  ({filteredPublications.length} of {publications.length} publications)
                </span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-neutral-dark-700 mb-2">
                    Publication Type
                  </label>
                  <select 
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.target.value)}
                    className="w-full rounded-md border-neutral-light-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                  >
                    <option value="">All Types</option>
                    <option value="article">Journal Articles</option>
                    <option value="inproceedings">Conference Papers</option>
                    <option value="book">Books</option>
                    <option value="unknown">Other</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-neutral-dark-700 mb-2">
                    Year Range
                  </label>
                  <div className="flex space-x-2">
                    <input 
                      type="number" 
                      placeholder="From" 
                      value={yearFrom}
                      onChange={(e) => setYearFrom(e.target.value)}
                      className="w-full rounded-md border-neutral-light-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                      min="2020"
                      max="2024"
                    />
                    <input 
                      type="number" 
                      placeholder="To" 
                      value={yearTo}
                      onChange={(e) => setYearTo(e.target.value)}
                      className="w-full rounded-md border-neutral-light-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                      min="2020"
                      max="2024"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-neutral-dark-700 mb-2">
                    Search Keywords
                  </label>
                  <input 
                    type="text" 
                    placeholder="e.g., vibroacoustic, needle, AI"
                    value={searchKeyword}
                    onChange={(e) => setSearchKeyword(e.target.value)}
                    className="w-full rounded-md border-neutral-light-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                  />
                </div>
              </div>
              
              <div className="mt-6 flex justify-between">
                <button 
                  type="button"
                  onClick={handleClearFilters}
                  className="text-sm text-neutral-dark-500 hover:text-neutral-dark-700"
                >
                  Clear all filters
                </button>
                <button 
                  type="button"
                  onClick={handleApplyFilters}
                  className="px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                >
                  Close filters
                </button>
              </div>
            </div>
          )}
          
          {/* Publications List */}
          <div className="bg-white rounded-lg shadow-sm p-8">
            <PublicationList 
              publications={filteredPublications}
              groupBy={groupBy}
            />
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Publications;

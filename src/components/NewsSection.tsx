/**
 * Component: NewsSection
 * Purpose: Homepage news section displaying latest blog posts
 * Author: Oğuzhan Berke Özdil
 * Last edit: 26 July 2025
 */

// Uses Heroicons v2 (MIT License © Tailwind Labs). See /licenses/heroicons.txt
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRightIcon, 
  CalendarDaysIcon, 
  UserIcon,
  ClockIcon
} from '@heroicons/react/24/outline';
import clsx from 'clsx';

// Import blog data and utilities
import { getFeaturedPosts, formatDate } from '../data/blog';

const NewsSection: React.FC = () => {
  const featuredNews = getFeaturedPosts(3);

  return (
    <section 
      className="py-16 lg:py-24 bg-gradient-to-br from-neutral-light-50 to-white relative overflow-hidden"
      aria-labelledby="news-heading"
    >
      {/* Background decorations */}
      <div className="absolute top-1/4 -right-20 w-40 h-40 bg-gradient-to-r from-secondary-100 to-accent-100 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-1/4 -left-20 w-32 h-32 bg-gradient-to-r from-primary-100 to-secondary-100 rounded-full opacity-20 blur-3xl"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 
            id="news-heading"
            className="heading-lg text-neutral-dark-900 mb-6"
          >
            Latest 
            <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent"> Research News</span>
          </h2>
          <p className="text-body text-neutral-dark-600 max-w-3xl mx-auto">
            Stay updated with our latest breakthroughs, research findings, and developments 
            in acoustic engineering and signal processing.
          </p>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredNews.map((article, index) => (
            <article
              key={article.slug}
              className={clsx(
                'group bg-white rounded-2xl shadow-soft hover:shadow-strong transition-all duration-300 overflow-hidden border border-neutral-light-200 hover:border-primary-200',
                'hover:-translate-y-2 focus-within:-translate-y-2',
                'animate-fade-in',
                index === 0 && 'animate-delay-100',
                index === 1 && 'animate-delay-200',
                index === 2 && 'animate-delay-300'
              )}
            >
              {/* Article Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={article.cover}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading={index === 0 ? "eager" : "lazy"}
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-dark-900/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Reading time badge */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-neutral-dark-600 px-3 py-1 rounded-full text-sm font-medium flex items-center">
                  <ClockIcon className="w-4 h-4 mr-1" />
                  3 min read
                </div>
              </div>
              
              {/* Article Content */}
              <div className="p-6 lg:p-8">
                {/* Meta information */}
                <div className="flex items-center gap-4 mb-4 text-sm text-neutral-dark-500">
                  <div className="flex items-center">
                    <CalendarDaysIcon className="w-4 h-4 mr-1" />
                    {formatDate(article.date)}
                  </div>
                  <div className="flex items-center">
                    <UserIcon className="w-4 h-4 mr-1" />
                    {article.author}
                  </div>
                </div>
                
                {/* Title */}
                <h3 className="heading-sm text-neutral-dark-900 mb-4 group-hover:text-primary-700 transition-colors duration-300 line-clamp-2">
                  {article.title}
                </h3>
                
                {/* Excerpt */}
                <p className="text-body text-neutral-dark-600 mb-6 line-clamp-3">
                  {article.excerpt}
                </p>
                
                {/* Read more link */}
                <a
                  href={`/blog/${article.slug}`}
                  className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700 transition-colors duration-200 group/link"
                  aria-label={`Read full article: ${article.title}`}
                >
                  Read Full Article
                  <ArrowRightIcon className="ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-200" />
                </a>
              </div>
              
              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-primary-50/0 group-hover:to-primary-50/5 transition-all duration-300 pointer-events-none rounded-2xl"></div>
            </article>
          ))}
        </div>

        {/* View All News CTA */}
        <div className="text-center mt-16">
          <Link
            to="/blog"
            className="btn-primary group"
          >
            View All News & Updates
            <ArrowRightIcon className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;

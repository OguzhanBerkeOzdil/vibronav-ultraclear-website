/**
 * Component: PolicyPageLayout
 * Purpose: Shared layout component for Terms, Privacy Policy, and Accessibility pages
 * Author: Oğuzhan Berke Özdil
 * Last edit: 28 January 2025
 */

import React from 'react';
import PageTitle from './PageTitle';
import { ShieldCheckIcon, EyeIcon, HeartIcon } from '@heroicons/react/24/outline';

interface PolicyPageProps {
  title: string;
  href: string;
  effectiveDate?: string;
  lastReviewed?: string;
  icon?: 'shield' | 'eye' | 'accessibility';
  children: React.ReactNode;
}

const iconMap = {
  shield: ShieldCheckIcon,
  eye: EyeIcon,
  accessibility: HeartIcon,
};

const PolicyPageLayout: React.FC<PolicyPageProps> = ({
  title,
  href,
  effectiveDate,
  lastReviewed,
  icon = 'shield',
  children
}) => {
  const IconComponent = iconMap[icon];
  
  const breadcrumb = [
    { label: 'Home', href: '/' },
    { label: title, href }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-light-50 to-white">
      <PageTitle
        title={title}
        breadcrumb={breadcrumb}
      />
      
      <div className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          {/* Header with icon */}
          <div className="bg-white rounded-2xl shadow-soft border border-neutral-light-200 overflow-hidden">
            <div className="bg-gradient-to-r from-primary-50 to-secondary-50 px-8 py-6 border-b border-neutral-light-200">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-white rounded-xl shadow-sm">
                  <IconComponent className="w-8 h-8 text-primary-600" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-neutral-dark-900">
                    {title}
                  </h1>
                  <p className="text-neutral-dark-600 mt-1">
                    Our commitment to transparency and compliance
                  </p>
                </div>
              </div>
            </div>
            
            {/* Content */}
            <article className="prose prose-neutral prose-lg max-w-none px-8 py-8">
              {children}
            </article>
            
            {/* Footer with dates */}
            <div className="bg-neutral-light-50 px-8 py-6 border-t border-neutral-light-200">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0">
                {effectiveDate && (
                  <p className="text-sm text-neutral-dark-600">
                    <span className="font-medium">Effective:</span> {effectiveDate}
                  </p>
                )}
                {lastReviewed && (
                  <p className="text-sm text-neutral-dark-600">
                    <span className="font-medium">Last reviewed:</span> {lastReviewed}
                  </p>
                )}
                <div className="flex items-center space-x-2 text-sm text-neutral-dark-500">
                  <span>Questions?</span>
                  <a 
                    href="mailto:healthtech@agh.edu.pl"
                    className="text-primary-600 hover:text-primary-700 font-medium transition-colors"
                  >
                    Contact us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PolicyPageLayout;

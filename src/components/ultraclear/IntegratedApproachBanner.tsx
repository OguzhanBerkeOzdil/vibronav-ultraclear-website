/**
 * Component: IntegratedApproachBanner
 * Purpose: UltraClear project components
 * Author: Oğuzhan Berke Özdil
 * Last edit: 27 January 2025
 */

/**
 * UltraClear Integrated Approach Banner Component
 * © 2025 Oğuzhan Berke Özdil
 * Last edit: July 27, 2025
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

const IntegratedApproachBanner: React.FC = () => {
  const approaches = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      title: 'Multidisciplinary Research',
      description: 'Combining expertise in medical imaging, nuclear medicine, and surgical oncology'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      ),
      title: 'Hardware‑Software Integration',
      description: 'Seamless fusion of advanced sensors with intuitive user interfaces'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      title: 'Clinical Translation',
      description: 'Direct pathway from research innovation to real‑world patient care improvement'
    }
  ];

  return (
    <section className="bg-gradient-to-br from-secondary-600 via-secondary-700 to-primary-700 py-16 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-32 -translate-y-32"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-48 translate-y-48"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 lg:px-8 relative">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Integrated Approach to Innovation
          </h2>
          <p className="text-xl text-secondary-100 max-w-3xl mx-auto">
            UltraClear represents a comprehensive methodology that bridges the gap between 
            technological advancement and clinical application.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {approaches.map((approach, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
                <div className="text-white">
                  {approach.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">
                {approach.title}
              </h3>
              <p className="text-secondary-100 leading-relaxed">
                {approach.description}
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row items-center bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <div className="mb-6 sm:mb-0 sm:mr-8">
              <h3 className="text-2xl font-bold text-white mb-2">
                Ready to Transform Surgical Imaging?
              </h3>
              <p className="text-secondary-100">
                Discover how UltraClear can enhance your clinical workflow
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center bg-white text-secondary-700 font-semibold px-8 py-4 rounded-xl hover:bg-secondary-50 transition-colors duration-200 group"
              aria-label="Contact us to learn more about UltraClear"
            >
              <span>Get in Touch</span>
              <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-12 border-t border-white/20">
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">2</div>
            <div className="text-secondary-100 text-sm uppercase tracking-wide">Imaging Modalities</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">1</div>
            <div className="text-secondary-100 text-sm uppercase tracking-wide">Portable Device</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">Real‑time</div>
            <div className="text-secondary-100 text-sm uppercase tracking-wide">Image Fusion</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">Global</div>
            <div className="text-secondary-100 text-sm uppercase tracking-wide">Clinical Impact</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegratedApproachBanner;

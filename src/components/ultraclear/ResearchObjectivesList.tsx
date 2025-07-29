/**
 * Component: ResearchObjectivesList
 * Purpose: UltraClear project components
 * Author: Oğuzhan Berke Özdil
 * Last edit: 27 January 2025
 */

/**
 * UltraClear Research Objectives List Component
 * © 2025 Oğuzhan Berke Özdil
 * Last edit: July 27, 2025
 */

import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/outline';

const ResearchObjectivesList: React.FC = () => {
  const objectives = [
    'Develop a portable handheld device that seamlessly integrates ultrasound anatomy visualization with gamma radiation detection capabilities',
    'Research and select the optimal gamma detection concept that balances sensitivity, portability, and cost‑effectiveness for clinical deployment',
    'Create an intuitive user interface and workflow integration that improves surgical precision during sentinel lymph node procedures',
    'Design real‑time image fusion algorithms that provide accurate co‑registration of anatomical and functional imaging data streams',
    'Validate the clinical usability and safety of the hybrid system through comprehensive pre‑clinical testing and evaluation protocols',
    'Establish a clear commercialization pathway that ensures accessibility and improves patient outcomes in healthcare facilities worldwide'
  ];

  return (
    <section className="bg-white py-16">
      <div className="max-w-4xl mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-neutral-dark-900 mb-6">
            Research Objectives
          </h2>
          <p className="text-lg text-neutral-dark-600 max-w-3xl mx-auto">
            UltraClear aims to revolutionize intra‑operative imaging by combining the strengths of ultrasound 
            and gamma detection in a single, portable, and clinically viable device.
          </p>
        </div>

        <div className="space-y-6">
          {objectives.map((objective, index) => (
            <div 
              key={index}
              className="flex items-start space-x-4 bg-neutral-light-50 p-6 rounded-xl shadow-soft hover:shadow-medium transition-shadow duration-300"
            >
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-secondary-100 rounded-full flex items-center justify-center">
                  <CheckCircleIcon className="w-6 h-6 text-secondary-600" />
                </div>
              </div>
              <div className="flex-1">
                <p className="text-neutral-dark-700 leading-relaxed font-medium">
                  {objective}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center bg-gradient-to-r from-secondary-50 to-primary-50 px-8 py-4 rounded-xl border border-secondary-200">
            <svg className="w-6 h-6 text-secondary-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
            <span className="text-secondary-700 font-medium">
              Advancing hybrid imaging for better patient outcomes
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResearchObjectivesList;

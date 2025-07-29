/**
 * Component: MscOpportunitiesSection
 * Purpose: Opportunities page components
 * Author: Oğuzhan Berke Özdil
 * Last edit: 27 January 2025
 */

// src/components/opportunities/MscOpportunitiesSection.tsx
import React from 'react';
import { buildAssetUrl } from '../../config/site';

const MscOpportunitiesSection: React.FC = () => {
  return (
    <section className="py-16 lg:py-24 bg-neutral-light-50">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-neutral-dark-900 mb-6">
            MSc/Eng Opportunities
          </h2>
          <h3 className="text-xl lg:text-2xl text-primary-600 font-medium mb-8">
            Hands-on thesis paths in robotics, ultrasound and acoustic AI.
          </h3>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Content */}
          <div>
            <p className="text-lg text-neutral-dark-600 leading-relaxed">
              We always have exciting Bachelor / Master and PhD topics related to our research using Robotics, Ultrasound and X-ray imaging, signal processing, audio sensing, needle guidance, machine and deep learning … please contact Katharzyna Heryan or Prof. Michael Friebe for details. We are also open as a host institution for foreign students that are interested to spend some time at our labs or to pursue their thesis work.
            </p>
          </div>

          {/* Right Column - Image Grid */}
          <div className="grid grid-cols-2 gap-6">
            <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
              <img
                src={buildAssetUrl("assets/images/msc_eng_opportunities_&_teaching_page/opp-1.jpg")}
                alt="Research Laboratory Setup"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
              <img
                src={buildAssetUrl("assets/images/msc_eng_opportunities_&_teaching_page/opp-2.jpg")}
                alt="Ultrasound Research Equipment"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
              <img
                src={buildAssetUrl("assets/images/msc_eng_opportunities_&_teaching_page/opp-3.jpg")}
                alt="Signal Processing Workstation"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
              <img
                src={buildAssetUrl("assets/images/msc_eng_opportunities_&_teaching_page/opp-4.jpg")}
                alt="Robotics and AI Development"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MscOpportunitiesSection;

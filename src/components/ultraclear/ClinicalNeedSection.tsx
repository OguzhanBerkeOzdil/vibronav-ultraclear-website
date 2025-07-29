/**
 * Component: ClinicalNeedSection
 * Purpose: UltraClear project components
 * Author: Oğuzhan Berke Özdil
 * Last edit: 27 January 2025
 */

/**
 * UltraClear Clinical Need Section Component
 * © 2025 Oğuzhan Berke Özdil
 * Last edit: July 27, 2025
 */

import React from 'react';
import { ExclamationTriangleIcon, ClockIcon, CurrencyDollarIcon, AdjustmentsHorizontalIcon, EyeSlashIcon, ChartBarIcon } from '@heroicons/react/24/outline';

const ClinicalNeedSection: React.FC = () => {
  const painPoints = [
    {
      icon: EyeSlashIcon,
      title: 'Limited Anatomical Context',
      description: 'Current gamma probes provide functional information but lack precise anatomical visualization of surrounding tissues.'
    },
    {
      icon: ClockIcon,
      title: 'Workflow Disruption',
      description: 'Switching between ultrasound and gamma detection devices disrupts surgical flow and increases procedure time.'
    },
    {
      icon: CurrencyDollarIcon,
      title: 'Cost & Size Barriers',
      description: 'Integration with CT/MRI systems is expensive, bulky, and not suitable for intra‑operative use.'
    },
    {
      icon: AdjustmentsHorizontalIcon,
      title: 'Complex Setup Requirements',
      description: 'Current hybrid systems require extensive setup time and specialized technical support during procedures.'
    },
    {
      icon: ChartBarIcon,
      title: 'Limited Real‑time Fusion',
      description: 'Existing solutions struggle to provide seamless real‑time co‑registration of functional and anatomical data.'
    },
    {
      icon: ExclamationTriangleIcon,
      title: 'Precision & Safety Concerns',
      description: 'Lack of integrated guidance can lead to imprecise targeting and increased risk of complications.'
    }
  ];

  return (
    <section className="bg-neutral-light-50 py-16">
      <div className="max-w-6xl mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-neutral-dark-900 mb-6">
            Why a Hybrid Handheld SPECT/US System?
          </h2>
          <p className="text-lg text-neutral-dark-600 max-w-3xl mx-auto">
            Current imaging solutions face significant limitations in providing integrated anatomical and functional guidance during minimally invasive procedures.
          </p>
        </div>

        {/* Challenge Banner */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-8 rounded-xl mb-12 shadow-medium">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">The Clinical Challenge</h3>
            <p className="text-lg leading-relaxed opacity-95">
              Current gamma probes lack anatomical context, while integrating with CT/MRI systems is costly, time‑consuming, 
              and unsuitable for real‑time intra‑operative use. Surgeons need a portable solution that combines functional 
              gamma detection with anatomical ultrasound visualization in a single, ergonomic device.
            </p>
          </div>
        </div>

        {/* Pain Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {painPoints.map((point, index) => {
            const IconComponent = point.icon;
            return (
              <div 
                key={index}
                className="bg-white p-6 rounded-xl shadow-soft hover:shadow-medium transition-shadow duration-300"
              >
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <IconComponent className="w-6 h-6 text-red-600" />
                </div>
                <h4 className="text-lg font-semibold text-neutral-dark-900 mb-3">
                  {point.title}
                </h4>
                <p className="text-neutral-dark-600 leading-relaxed">
                  {point.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ClinicalNeedSection;

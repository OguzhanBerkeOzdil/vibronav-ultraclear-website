/**
 * Component: HeroOverview
 * Purpose: UltraClear project components
 * Author: Oğuzhan Berke Özdil
 * Last edit: 27 January 2025
 */

/**
 * UltraClear Hero Overview Component
 * © 2025 Oğuzhan Berke Özdil
 * Last edit: July 27, 2025
 */

import React from 'react';
import { buildAssetUrl } from '../../config/site';

const HeroOverview: React.FC = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-neutral-dark-900 mb-4">
                UltraClear Hybrid SPECT/Ultrasound Imaging
              </h2>
              <h3 className="text-xl text-secondary-600 font-medium mb-6">
                Real‑time fusion of anatomical ultrasound and functional gamma imaging in a handheld device
              </h3>
              <p className="text-lg text-neutral-dark-600 leading-relaxed">
                UltraClear develops a revolutionary handheld device that combines ultrasound anatomy visualization with gamma radiation detection. This dual-modality system enables real‑time anatomical and functional imaging for procedures like sentinel lymph node biopsy, providing surgeons with unprecedented intra‑operative guidance and improving patient outcomes through more precise, less invasive interventions.
              </p>
            </div>
            
            {/* Project Facts Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-neutral-light-50 p-4 rounded-lg">
                <h4 className="font-semibold text-neutral-dark-800 mb-2">Project Duration</h4>
                <p className="text-neutral-dark-600">2024–2026</p>
              </div>
              <div className="bg-neutral-light-50 p-4 rounded-lg">
                <h4 className="font-semibold text-neutral-dark-800 mb-2">Funding</h4>
                <p className="text-neutral-dark-600">NCBR INNOGLOBO (INNOGLOBO/3/77/ULTRACLEAR/2024)</p>
              </div>
              <div className="bg-neutral-light-50 p-4 rounded-lg">
                <h4 className="font-semibold text-neutral-dark-800 mb-2">Consortium Cost</h4>
                <p className="text-neutral-dark-600">€968,389.12</p>
              </div>
              <div className="bg-neutral-light-50 p-4 rounded-lg">
                <h4 className="font-semibold text-neutral-dark-800 mb-2">Partners</h4>
                <p className="text-neutral-dark-600">AGH, Univ. Stuttgart, MedSun Labs, GBN Systems GmbH</p>
              </div>
            </div>
          </div>
          
          {/* Right Column - Hero Image */}
          <div className="relative">
            <div className="aspect-[4/3] bg-gradient-to-br from-secondary-100 to-primary-100 rounded-xl overflow-hidden shadow-medium">
              <img
                src={buildAssetUrl("assets/images/projects/ultraclear/ultraclear_project_image.png")}
                alt="UltraClear handheld SPECT/Ultrasound hybrid imaging device concept"
                className="w-full h-full object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            
            {/* Floating Stats Pill */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-strong">
              <div className="flex items-center space-x-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-secondary-600">SPECT/US</div>
                  <div className="text-sm text-neutral-dark-600">Portable Hybrid</div>
                </div>
                <div className="w-px h-12 bg-neutral-light-200" />
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-600">Real-time</div>
                  <div className="text-sm text-neutral-dark-600">Fusion</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroOverview;

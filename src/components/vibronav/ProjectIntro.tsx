/**
 * VibroNav Project Intro - real content, updated info cards
 * Author: Oğuzhan Berke Özdil
 * Last edit: July 26, 2025
 */

import React from 'react';
import { buildAssetUrl } from '../../config/site';

const ProjectIntro: React.FC = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-neutral-dark-900 mb-4">
                Revolutionary Vibroacoustic Navigation
              </h2>
              <p className="text-lg text-neutral-dark-600 leading-relaxed">
                VibroNav is a bi‑national OPUS‑LAP project (DFG/NCN, 2023–2025) creating an audio/vibro‑tactile guidance platform for minimally invasive, needle‑based interventions. By listening to high‑frequency vibrations on surgical instruments and processing them with advanced DSP and machine learning, VibroNav delivers real‑time feedback that helps clinicians place needles more accurately and safely.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-neutral-light-50 p-4 rounded-lg">
                <h3 className="font-semibold text-neutral-dark-800 mb-2">Project Duration</h3>
                <p className="text-neutral-dark-600">2023 – 2025</p>
              </div>
              <div className="bg-neutral-light-50 p-4 rounded-lg">
                <h3 className="font-semibold text-neutral-dark-800 mb-2">Funding Bodies</h3>
                <p className="text-neutral-dark-600">DFG & NCN (OPUS‑LAP)</p>
              </div>
              <div className="bg-neutral-light-50 p-4 rounded-lg">
                <h3 className="font-semibold text-neutral-dark-800 mb-2">Lead & Partners</h3>
                <p className="text-neutral-dark-600">AGH University Krakow + JLU Giessen, FOM, OVGU/INKA, SURAG GmbH</p>
              </div>
              <div className="bg-neutral-light-50 p-4 rounded-lg">
                <h3 className="font-semibold text-neutral-dark-800 mb-2">Objective</h3>
                <p className="text-neutral-dark-600">Real‑time audio/vibro‑tactile needle guidance for minimally invasive procedures</p>
              </div>
            </div>
          </div>
          
          {/* Right Column - Image/Schematic */}
          <div className="relative">
            <div className="aspect-[4/3] bg-gradient-to-br from-primary-100 to-secondary-100 rounded-xl overflow-hidden shadow-medium">
              <img
                src={buildAssetUrl("assets/images/projects/vibronav/vibronav_project_image.png")}
                alt="VibroNav System Overview"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            
            {/* Floating Stats */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-strong">
              <div className="flex items-center space-x-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-600">6-DOF</div>
                  <div className="text-sm text-neutral-dark-600">Freedom</div>
                </div>
                <div className="w-px h-12 bg-neutral-light-200" />
                <div className="text-center">
                  <div className="text-2xl font-bold text-secondary-600">1ms</div>
                  <div className="text-sm text-neutral-dark-600">Latency</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectIntro;

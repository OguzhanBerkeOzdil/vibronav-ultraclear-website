/**
 * Component: AboutUs
 * Purpose: About us section for the home page
 * Author: Oğuzhan Berke Özdil
 * Last edit: 28 July 2025
 */

// Uses Heroicons v2 (MIT License © Tailwind Labs). See /licenses/heroicons.txt
import React from 'react';
import { 
  AcademicCapIcon, 
  BeakerIcon, 
  GlobeAltIcon,
  CheckCircleIcon 
} from '@heroicons/react/24/outline';
import { buildAssetUrl } from '../config/site';
import clsx from 'clsx';

const AboutUs: React.FC = () => {
  const stats = [
    { value: '4+', label: 'Years of Research', icon: BeakerIcon },
    { value: '15+', label: 'Publications', icon: AcademicCapIcon },
    { value: '6+', label: 'Industry & Clinical Partners', icon: GlobeAltIcon },
    { value: '8+', label: 'MSc/PhD Graduates', icon: CheckCircleIcon }
  ];

  const achievements = [
    'OPUS‑LAP VibroNav project (DFG & NCN, 2023–2025) developing audio‑tactile guidance for minimally invasive, needle‑based interventions.',
    'UltraClear project (NCBR INNOGLOBO) creating a handheld device combining ultrasound and gamma detection for sentinel lymph node procedures.',
    'Expertise in vibroacoustic sensing, real‑time DSP/ML algorithms, and clinical workflow integration for enhanced surgical precision.',
    'Active bi‑national collaborations with German clinical partners and international industry networks for research translation.'
  ];

  return (
    <section 
      className="py-16 lg:py-24 bg-white relative overflow-hidden"
      aria-labelledby="about-heading"
    >
      {/* Background decorations */}
      <div className="absolute top-1/4 -left-20 w-40 h-40 bg-gradient-to-r from-primary-100 to-secondary-100 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-1/4 -right-20 w-32 h-32 bg-gradient-to-r from-accent-100 to-primary-100 rounded-full opacity-20 blur-3xl"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 
                id="about-heading"
                className="heading-lg text-neutral-dark-900 mb-6"
              >
                Leading Innovation in
                <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent"> Biomedical Acoustics & Signal Processing</span>
              </h2>
              <p className="text-body text-neutral-dark-600 mb-6">
                Our HealthTech Innovation Group at AGH University of Krakow advances vibroacoustic sensing and ultrasound signal processing to solve real clinical problems. We design hardware, algorithms, and user workflows that turn raw acoustic data into actionable guidance for physicians and engineers.
              </p>
              <p className="text-body text-neutral-dark-600">
                Working across mechanics, digital signal processing, and machine learning, we translate fundamental research into deployable prototypes. Current flagship efforts include the DFG/NCN‑funded VibroNav project for audio‑tactile needle guidance and the NCBR INNOGLOBO UltraClear initiative developing hybrid imaging technology for enhanced surgical precision.
              </p>
            </div>
            
            {/* Achievements list */}
            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <div 
                  key={index}
                  className={clsx(
                    'flex items-start space-x-3 animate-fade-in',
                    index === 0 && 'animate-delay-100',
                    index === 1 && 'animate-delay-200',
                    index === 2 && 'animate-delay-300',
                    index === 3 && 'animate-delay-400'
                  )}
                >
                  <CheckCircleIcon className="w-6 h-6 text-primary-600 mt-0.5 flex-shrink-0" />
                  <p className="text-base text-neutral-dark-600">{achievement}</p>
                </div>
              ))}
            </div>
            
            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div 
                    key={index}
                    className={clsx(
                      'text-center p-6 bg-gradient-to-br from-neutral-light-50 to-white rounded-xl border border-neutral-light-200 hover:border-primary-200 transition-all duration-300 group animate-fade-in',
                      index === 0 && 'animate-delay-200',
                      index === 1 && 'animate-delay-300',
                      index === 2 && 'animate-delay-400',
                      index === 3 && 'animate-delay-500'
                    )}
                  >
                    <div className="flex justify-center mb-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="w-5 h-5 text-white" />
                      </div>
                    </div>
                    <div className="text-2xl lg:text-3xl font-bold text-primary-600 mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-neutral-dark-600">
                      {stat.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          
          {/* Image */}
          <div className="relative">
            <div className="relative group">
              <img
                src={buildAssetUrl("assets/images/home_page/about_section.png")}
                alt="HealthTech Innovation Group at AGH University Research Laboratory"
                className="rounded-2xl shadow-strong w-full object-cover aspect-[6/5] group-hover:shadow-xl transition-all duration-300"
              />
              
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-dark-900/20 via-transparent to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Floating badge */}
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-primary-600 to-secondary-600 text-white p-6 rounded-xl shadow-strong hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1">
                <div className="text-xl lg:text-2xl font-bold">Excellence</div>
                <div className="text-sm opacity-90">in Research</div>
              </div>
            </div>
            
            {/* Background decoration */}
            <div className="absolute -top-8 -left-8 w-24 h-24 bg-gradient-to-br from-primary-200 to-secondary-200 rounded-full opacity-30 blur-2xl"></div>
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-br from-accent-200 to-primary-200 rounded-full opacity-30 blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

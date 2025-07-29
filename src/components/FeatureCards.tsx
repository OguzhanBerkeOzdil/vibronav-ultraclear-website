/**
 * Component: FeatureCards
 * Purpose: Feature highlight cards using canonical project data
 * Author: Oğuzhan Berke Özdil
 * Last edit: 28 July 2025
 */

// Uses Heroicons v2 (MIT License © Tailwind Labs). See /licenses/heroicons.txt
import React from 'react';
import { 
  CogIcon, 
  SpeakerWaveIcon, 
  AcademicCapIcon,
  ChartBarIcon,
  BeakerIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline';
import clsx from 'clsx';
import { projectsData } from '../data/projects';

interface FeatureCard {
  id: number;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  highlight?: string;
  link: string;
  gradient: string;
}

const FeatureCards: React.FC = () => {
  const features: FeatureCard[] = [
    {
      id: 1,
      icon: CogIcon,
      title: projectsData.vibroNav.name,
      description: projectsData.vibroNav.shortDescription,
      highlight: "Advanced Navigation",
      link: "/projects/vibronav",
      gradient: "from-primary-500 to-primary-700"
    },
    {
      id: 2,
      icon: SpeakerWaveIcon,
      title: projectsData.ultraClear.name,
      description: projectsData.ultraClear.shortDescription,
      highlight: "Signal Processing",
      link: "/projects/ultraclear",
      gradient: "from-secondary-500 to-secondary-700"
    },
    {
      id: 3,
      icon: BeakerIcon,
      title: "Research Excellence",
      description: "Our group has published multiple peer‐reviewed articles on vibroacoustic sensing and temperature prediction in tissue‐needle interactions, highlighting AGH’s leadership in biomedical signal analysis.",
      highlight: "Published",
      link: "#research",
      gradient: "from-accent-500 to-accent-700"
    },
    {
      id: 4,
      icon: AcademicCapIcon,
      title: "MSc & Engineering Programs",
      description: "AGH’s HealthTech Innovation Hub offers hands‐on MSc and Engineering thesis projects—like VibroNav and UltraClear—where students collaborate directly with faculty and industry partners.",
      highlight: "Opportunities",
      link: "#opportunities",
      gradient: "from-primary-600 to-secondary-600"
    },
    {
      id: 5,
      icon: ChartBarIcon,
      title: "Advanced Data Analytics",
      description: "We build custom ML‐driven toolchains for large acoustic datasets, enabling real‐time anomaly detection and interactive visualizations that drive next‑generation signal processing.",
      highlight: "AI Powered",
      link: "#analytics",
      gradient: "from-accent-600 to-primary-600"
    },
    {
      id: 6,
      icon: GlobeAltIcon,
      title: "Global Impact",
      description: "In partnership with institutions across Europe - AGH Kraków, Otto‑von‑Guericke Magdeburg, and MEDSUN Labs—we translate lab innovations into real‑world healthcare solutions.",
      highlight: "Worldwide",
      link: "#partnerships",
      gradient: "from-secondary-600 to-accent-600"
    }
  ];

  return (
    <section 
      className="py-16 lg:py-24 bg-gradient-to-br from-neutral-light-50 to-white relative overflow-hidden"
      aria-labelledby="features-heading"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-neutral-100/40 bg-grid-16 opacity-60"></div>
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-primary-100/20 to-transparent rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-gradient-to-tr from-secondary-100/20 to-transparent rounded-full filter blur-3xl"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 
            id="features-heading"
            className="heading-lg text-neutral-dark-900 mb-6"
          >
            Innovation at the
            <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent"> Core</span>
          </h2>
          <p className="text-body text-neutral-dark-600 max-w-3xl mx-auto">
            Explore our groundbreaking technologies and research initiatives that are 
            shaping the future of acoustic engineering and signal processing.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            
            return (
              <article
                key={feature.id}
                className={clsx(
                  'group relative bg-white rounded-2xl p-8 shadow-soft hover:shadow-strong transition-all duration-300 border border-neutral-light-200 hover:border-primary-200',
                  'hover:-translate-y-2 focus-within:-translate-y-2',
                  'animate-fade-in',
                  index % 3 === 0 && 'animate-delay-100',
                  index % 3 === 1 && 'animate-delay-200',
                  index % 3 === 2 && 'animate-delay-300'
                )}
              >
                {/* Background gradient on hover */}
                <div className={clsx(
                  'absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl',
                  feature.gradient
                )}></div>
                
                {/* Highlight badge */}
                {feature.highlight && (
                  <div className="absolute -top-3 -right-3">
                    <span className={clsx(
                      'inline-flex items-center px-3 py-1 rounded-full text-xs font-medium text-white shadow-sm',
                      `bg-gradient-to-r ${feature.gradient}`
                    )}>
                      {feature.highlight}
                    </span>
                  </div>
                )}
                
                {/* Icon */}
                <div className={clsx(
                  'relative w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-all duration-300',
                  `bg-gradient-to-br ${feature.gradient}`,
                  'group-hover:scale-110 group-hover:rotate-3'
                )}>
                  <IconComponent className="w-7 h-7 text-white" />
                </div>
                
                {/* Content */}
                <div className="relative">
                  <h3 className="heading-sm text-neutral-dark-900 mb-4 group-hover:text-primary-700 transition-colors duration-200">
                    {feature.title}
                  </h3>
                  <p className="text-body text-neutral-dark-600 mb-6 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
                
                {/* Hover effect overlay */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/0 to-primary-50/0 group-hover:to-primary-50/10 transition-all duration-300 pointer-events-none"></div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeatureCards;

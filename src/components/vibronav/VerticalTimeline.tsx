/**
 * VibroNav Vertical Timeline Component - real project work packages
 * Author: Oğuzhan Berke Özdil
 * Last edit: July 26, 2025
 */

import React from 'react';
import { CheckCircleIcon, PlayIcon, ClockIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';

interface TimelineItem {
  id: string;
  title: string;
  description: string;
  dateRange: string;
  status: 'completed' | 'active' | 'planned';
}

const timelineItems: TimelineItem[] = [
  {
    id: 'WP1',
    title: 'Clinical Needs & Requirements',
    description: 'Gathered clinical requirements, defined system specs, ethics prep, initial UX sketches.',
    dateRange: 'Jan–Mar 2023',
    status: 'completed'
  },
  {
    id: 'WP2',
    title: 'Sensor & Hardware Prototyping',
    description: 'Designed and bench‑tested acoustic sensor modules and acquisition electronics.',
    dateRange: 'Apr–Dec 2023',
    status: 'completed'
  },
  {
    id: 'WP3',
    title: 'Signal Processing & ML Algorithms',
    description: 'Developed real‑time DSP pipeline and machine‑learning models for event detection.',
    dateRange: 'Sep 2023 – Aug 2024',
    status: 'completed'
  },
  {
    id: 'WP4',
    title: 'Feedback Interfaces & UI/UX',
    description: 'Implemented audio/tactile feedback channels, iterative UI validation with clinicians.',
    dateRange: 'Jan–Sep 2024',
    status: 'active'
  },
  {
    id: 'WP5',
    title: 'Pre‑clinical Validation & Integration',
    description: 'Integrated system in lab/phantom setups, prepared pre‑clinical trials documentation.',
    dateRange: 'Oct 2024 – Jun 2025',
    status: 'active'
  },
  {
    id: 'WP6',
    title: 'Dissemination & Translation Planning',
    description: 'Publications, IP review, commercialization pathway assessment, final reporting.',
    dateRange: 'Jul – Dec 2025',
    status: 'planned'
  }
];

const getStatusConfig = (status: TimelineItem['status']) => {
  switch (status) {
    case 'completed':
      return {
        icon: CheckCircleIcon,
        bgColor: 'bg-green-100',
        iconColor: 'text-green-600',
        borderColor: 'border-green-200',
        textColor: 'text-green-700'
      };
    case 'active':
      return {
        icon: PlayIcon,
        bgColor: 'bg-blue-100',
        iconColor: 'text-blue-600',
        borderColor: 'border-blue-200',
        textColor: 'text-blue-700'
      };
    case 'planned':
      return {
        icon: ClockIcon,
        bgColor: 'bg-gray-100',
        iconColor: 'text-gray-600',
        borderColor: 'border-gray-200',
        textColor: 'text-gray-700'
      };
  }
};

const VerticalTimeline: React.FC = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-4xl mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-neutral-dark-900 mb-4">
            Work Packages Timeline
          </h2>
          <p className="text-lg text-neutral-dark-600 max-w-3xl mx-auto">
            VibroNav project development phases from clinical requirements to market translation.
          </p>
        </div>

        <div className="relative">
          {/* Vertical line - hidden on mobile, visible on md+ */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-neutral-light-300"></div>
          
          {/* Mobile vertical line - visible only on mobile */}
          <div className="md:hidden absolute left-8 top-0 w-0.5 h-full bg-neutral-light-300"></div>

          <div className="space-y-8">
            {timelineItems.map((item, index) => {
              const statusConfig = getStatusConfig(item.status);
              const IconComponent = statusConfig.icon;
              const isEven = index % 2 === 0;

              return (
                <div key={item.id} className="relative">
                  {/* Mobile layout - single column */}
                  <div className="md:hidden flex items-start space-x-4">
                    {/* Status icon */}
                    <div className={clsx(
                      'flex-shrink-0 w-16 h-16 rounded-full border-4 flex items-center justify-center',
                      statusConfig.bgColor,
                      statusConfig.borderColor
                    )}>
                      <IconComponent className={clsx('w-6 h-6', statusConfig.iconColor)} />
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="bg-white border border-neutral-light-200 rounded-lg p-6 shadow-sm">
                        <div className="flex items-center gap-3 mb-3">
                          <span className={clsx(
                            'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium',
                            statusConfig.bgColor,
                            statusConfig.textColor
                          )}>
                            {item.id}
                          </span>
                          <span className="text-sm text-neutral-dark-500 font-medium">
                            {item.dateRange}
                          </span>
                        </div>
                        <h3 className="text-lg font-semibold text-neutral-dark-900 mb-2">
                          {item.title}
                        </h3>
                        <p className="text-neutral-dark-600 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Desktop layout - alternating sides */}
                  <div className="hidden md:block">
                    <div className={clsx(
                      'flex items-center',
                      isEven ? 'flex-row' : 'flex-row-reverse'
                    )}>
                      {/* Content */}
                      <div className="w-5/12">
                        <div className={clsx(
                          'bg-white border border-neutral-light-200 rounded-lg p-6 shadow-sm',
                          isEven ? 'mr-8' : 'ml-8'
                        )}>
                          <div className="flex items-center gap-3 mb-3">
                            <span className={clsx(
                              'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium',
                              statusConfig.bgColor,
                              statusConfig.textColor
                            )}>
                              {item.id}
                            </span>
                            <span className="text-sm text-neutral-dark-500 font-medium">
                              {item.dateRange}
                            </span>
                          </div>
                          <h3 className="text-lg font-semibold text-neutral-dark-900 mb-2">
                            {item.title}
                          </h3>
                          <p className="text-neutral-dark-600 leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </div>

                      {/* Status icon in center */}
                      <div className="relative z-10">
                        <div className={clsx(
                          'w-16 h-16 rounded-full border-4 flex items-center justify-center bg-white',
                          statusConfig.borderColor
                        )}>
                          <div className={clsx(
                            'w-12 h-12 rounded-full flex items-center justify-center',
                            statusConfig.bgColor
                          )}>
                            <IconComponent className={clsx('w-6 h-6', statusConfig.iconColor)} />
                          </div>
                        </div>
                      </div>

                      {/* Empty space on other side */}
                      <div className="w-5/12"></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VerticalTimeline;

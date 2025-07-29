/**
 * Component: ProjectCards
 * Purpose: Showcase cards for VibroNav and UltraClear projects using canonical data
 * Author: Oğuzhan Berke Özdil
 * Last edit: 28 July 2025
 */

// Uses Heroicons v2 (MIT License © Tailwind Labs). See /licenses/heroicons.txt
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRightIcon, 
  CheckCircleIcon,
  SpeakerWaveIcon,
  SignalIcon
} from '@heroicons/react/24/outline';
import clsx from 'clsx';
import { projectsData } from '../data/projects';

interface Project {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  image: string;
  badges: string[];
  readMoreLink: string;
  icon: React.ComponentType<{ className?: string }>;
  status: 'active' | 'completed' | 'planning';
  gradient: string;
}

const ProjectCards: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: projectsData.vibroNav.name,
      subtitle: projectsData.vibroNav.tagline,
      description: projectsData.vibroNav.fullDescription,
      features: projectsData.vibroNav.keyFeatures.slice(0, 4),
      image: projectsData.vibroNav.heroImage,
      badges: [projectsData.vibroNav.fundingSource, "In Progress"],
      readMoreLink: "/projects/vibronav",
      icon: SignalIcon,
      status: projectsData.vibroNav.status,
      gradient: "from-primary-500 to-primary-700"
    },
    {
      id: 2,
      title: projectsData.ultraClear.name,
      subtitle: projectsData.ultraClear.tagline,
      description: projectsData.ultraClear.fullDescription,
      features: projectsData.ultraClear.keyFeatures.slice(0, 4),
      image: projectsData.ultraClear.heroImage,
      badges: [projectsData.ultraClear.fundingSource, "Advanced Technology"],
      readMoreLink: "/projects/ultraclear",
      icon: SpeakerWaveIcon,
      status: projectsData.ultraClear.status,
      gradient: "from-secondary-500 to-secondary-700"
    }
  ];

  const getStatusInfo = (status: Project['status']) => {
    switch (status) {
      case 'active':
        return { label: 'In Progress', color: 'bg-green-500', dotColor: 'bg-green-400' };
      case 'completed':
        return { label: 'Completed', color: 'bg-blue-500', dotColor: 'bg-blue-400' };
      case 'planning':
        return { label: 'Planning', color: 'bg-yellow-500', dotColor: 'bg-yellow-400' };
      default:
        return { label: 'Unknown', color: 'bg-gray-500', dotColor: 'bg-gray-400' };
    }
  };

  return (
    <section 
      className="py-16 lg:py-24 bg-gradient-to-br from-white via-neutral-light-50 to-white relative overflow-hidden"
      aria-labelledby="projects-heading"
    >
      {/* Background decorations */}
      <div className="absolute top-10 right-10 w-24 h-24 bg-gradient-to-br from-primary-200 to-secondary-200 rounded-full opacity-20 blur-2xl"></div>
      <div className="absolute bottom-10 left-10 w-32 h-32 bg-gradient-to-br from-accent-200 to-primary-200 rounded-full opacity-20 blur-2xl"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 
            id="projects-heading"
            className="heading-lg text-neutral-dark-900 mb-6"
          >
            Featured 
            <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent"> Projects</span>
          </h2>
          <p className="text-body text-neutral-dark-600 max-w-3xl mx-auto">
            Discover our groundbreaking research projects that are transforming 
            the landscape of acoustic engineering and signal processing
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            const statusInfo = getStatusInfo(project.status);
            
            return (
              <article
                key={project.id}
                className={clsx(
                  'group bg-white rounded-3xl shadow-strong hover:shadow-xl transition-all duration-500 overflow-hidden border border-neutral-light-200 hover:border-primary-200',
                  'hover:-translate-y-3 focus-within:-translate-y-3',
                  'animate-fade-in',
                  index === 0 ? 'animate-delay-200' : 'animate-delay-400'
                )}
              >
                {/* Image Section */}
                <div className="relative h-64 lg:h-72 overflow-hidden">
                  <img
                    src={project.image}
                    alt={`${project.title} project visualization`}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  {/* Badges */}
                  <div className="absolute top-4 left-4 flex flex-col gap-2">
                    {project.badges.map((badge, badgeIndex) => (
                      <div 
                        key={badgeIndex}
                        className={clsx(
                          'flex items-center px-3 py-1 rounded-full text-white text-sm font-medium shadow-lg',
                          badgeIndex === 0 ? `bg-gradient-to-r ${project.gradient}` : statusInfo.color
                        )}
                      >
                        {badgeIndex === 1 && (
                          <div className={clsx('w-2 h-2 rounded-full mr-2 animate-pulse', statusInfo.dotColor)}></div>
                        )}
                        {badge}
                      </div>
                    ))}
                  </div>

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-dark-900/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                
                {/* Content Section */}
                <div className="p-8 lg:p-10">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex-1">
                      <div className="flex items-center mb-3">
                        <div className={clsx(
                          'w-10 h-10 rounded-lg flex items-center justify-center mr-4 transition-all duration-300',
                          `bg-gradient-to-br ${project.gradient}`,
                          'group-hover:scale-110 group-hover:rotate-3'
                        )}>
                          <IconComponent className="w-5 h-5 text-white" />
                        </div>
                        <h3 className="heading-sm text-neutral-dark-900 group-hover:text-primary-700 transition-colors duration-300">
                          {project.title}
                        </h3>
                      </div>
                      <h4 className="text-lg text-primary-600 font-medium mb-4">
                        {project.subtitle}
                      </h4>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-body text-neutral-dark-600 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Features */}
                  <div className="mb-8 min-h-[160px]">
                    <h5 className="text-sm font-semibold text-neutral-dark-900 mb-4 uppercase tracking-wide">
                      Key Features
                    </h5>
                    <ul className="space-y-3">
                      {project.features.map((feature, featureIndex) => (
                        <li 
                          key={featureIndex} 
                          className={clsx(
                            'flex items-start text-sm text-neutral-dark-600 animate-fade-in',
                            featureIndex === 0 && 'animate-delay-100',
                            featureIndex === 1 && 'animate-delay-200',
                            featureIndex === 2 && 'animate-delay-300',
                            featureIndex === 3 && 'animate-delay-400'
                          )}
                        >
                          <CheckCircleIcon className="w-5 h-5 text-primary-500 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* CTA */}
                  <Link
                    to={project.readMoreLink}
                    className="btn-primary group/cta w-full justify-center flex items-center"
                    aria-label={`Learn more about ${project.title} project`}
                  >
                    Explore Project
                    <ArrowRightIcon className="ml-2 w-5 h-5 group-hover/cta:translate-x-1 transition-transform duration-200" />
                  </Link>
                </div>
                
                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-primary-50/0 group-hover:to-primary-50/5 transition-all duration-500 pointer-events-none rounded-3xl"></div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectCards;

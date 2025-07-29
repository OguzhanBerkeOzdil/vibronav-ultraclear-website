/**
 * Shared Project Gallery Component
 * Used by both VibroNav and UltraClear projects
 * Author: Oğuzhan Berke Özdil
 * Last edit: July 28, 2025
 */

import React from 'react';

interface GalleryImage {
  src: string;
  alt: string;
  caption: string;
  category: string;
}

interface ProjectGalleryProps {
  title?: string;
  description?: string;
  images: GalleryImage[];
}

const ProjectGallery: React.FC<ProjectGalleryProps> = ({ 
  title = "Project Gallery", 
  description = "Visual documentation of the project development and achievements.",
  images 
}) => {
  return (
    <section className="bg-neutral-light-50 py-16">
      <div className="max-w-6xl mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-neutral-dark-900 mb-4">
            {title}
          </h2>
          <p className="text-lg text-neutral-dark-600 max-w-3xl mx-auto">
            {description}
          </p>
        </div>
        
        {/* Responsive grid layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-medium hover:shadow-strong transition-shadow duration-300 group"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Category Badge */}
                <div className="absolute top-3 left-3">
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-white/90 text-neutral-dark-700 backdrop-blur-sm">
                    {image.category}
                  </span>
                </div>
              </div>
              
              <div className="p-4">
                <p className="text-sm text-neutral-dark-600 leading-relaxed">
                  {image.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectGallery;

/**
 * Component: GalleryGrid
 * Purpose: UltraClear project components
 * Author: Oğuzhan Berke Özdil
 * Last edit: 28 July 2025
 */

import React from 'react';
import ProjectGallery from '../ui/ProjectGallery';
import { buildAssetUrl } from '../../config/site';

const galleryImages = [
  {
    src: buildAssetUrl('assets/images/projects/ultraclear/gallery/photo-1.jpeg'),
    alt: 'A photo of project members',
    caption: 'A photo of project members',
    category: 'Meeting'
  },
  {
    src: buildAssetUrl('assets/images/projects/ultraclear/gallery/photo-2.jpeg'),
    alt: 'Checking device performance',
    caption: 'Checking Device performance',
    category: 'Laboratory'
  },
  {
    src: buildAssetUrl('assets/images/projects/ultraclear/gallery/photo-3.jpeg'),
    alt: 'Testing robot arm and device integration',
    caption: 'Testing robot arm and device integration',
    category: 'Laboratory'
  },
  {
    src: buildAssetUrl('assets/images/projects/ultraclear/gallery/photo-4.jpeg'),
    alt: 'Conference presentation',
    caption: 'Conference presentation',
    category: 'Presentation'
  },
  {
    src: buildAssetUrl('assets/images/projects/ultraclear/gallery/photo-5.jpeg'),
    alt: 'A team photo',
    caption: 'A team photo',
    category: 'Laboratory'
  },
  {
    src: buildAssetUrl('assets/images/projects/ultraclear/gallery/photo-6.jpeg'),
    alt: 'Device testing and medical validation',
    caption: 'Device testing and medical validation',
    category: 'Device'
  },
  {
    src: buildAssetUrl('assets/images/projects/ultraclear/gallery/photo-7.jpeg'),
    alt: 'Checking device performance',
    caption: 'Checking device performance',
    category: 'Device'
  },
  {
    src: buildAssetUrl('assets/images/projects/ultraclear/gallery/photo-8.jpeg'),
    alt: 'Research in laboratory',
    caption: 'Research in laboratory',
    category: 'Research'
  },
  {
    src: buildAssetUrl('assets/images/projects/ultraclear/gallery/photo-9.jpeg'),
    alt: 'New device prototype for ultra-clear',
    caption: 'New device prototype for ultra-clear',
    category: 'Laboratory'
  }
];

const GalleryGrid: React.FC = () => {
  return (
    <ProjectGallery 
      title="Project Gallery"
      description="Explore the development journey of UltraClear through device prototypes, research milestones, and clinical integration demonstrations."
      images={galleryImages}
    />
  );
};

export default GalleryGrid;

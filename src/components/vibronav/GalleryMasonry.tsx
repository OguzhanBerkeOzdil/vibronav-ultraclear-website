/**
 * VibroNav Gallery - responsive grid with proper alt texts
 * Author: Oğuzhan Berke Özdil
 * Last edit: July 28, 2025
 */

import React from 'react';
import ProjectGallery from '../ui/ProjectGallery';
import { buildAssetUrl } from '../../config/site';

const galleryImages = [
  {
    src: buildAssetUrl('assets/images/projects/vibronav/gallery/photo-1.jpeg'),
    alt: 'Experimental setup and device testing',
    caption: 'Experimental setup and devsice testing',
    category: 'Laboratory'
  },
  {
    src: buildAssetUrl('assets/images/projects/vibronav/gallery/photo-2.jpeg'),
    alt: 'Presentation of the project at the conference',
    caption: 'Presentation of the project at the conference',
    category: 'Conference'
  },
  {
    src: buildAssetUrl('assets/images/projects/vibronav/gallery/photo-3.jpeg'),
    alt: 'Testing robot arm and device integration',
    caption: 'Testing robot arm and device integration',
    category: 'Laboratory'
  },
  {
    src: buildAssetUrl('assets/images/projects/vibronav/gallery/photo-4.jpeg'),
    alt: 'Prototype test with sponges',
    caption: 'Prototype test with sponges',
    category: 'Laboratory'
  },
  {
    src: buildAssetUrl('assets/images/projects/vibronav/gallery/photo-5.jpeg'),
    alt: 'A team photo',
    caption: 'A team photo',
    category: 'Laboratory'
  },
  {
    src: buildAssetUrl('assets/images/projects/vibronav/gallery/photo-6.jpeg'),
    alt: 'Device testing and medical validation',
    caption: 'Device testing and medical validation',
    category: 'Device'
  },
  {
    src: buildAssetUrl('assets/images/projects/vibronav/gallery/photo-7.jpeg'),
    alt: 'Checking device performance',
    caption: 'Checking device performance',
    category: 'Device'
  },
  {
    src: buildAssetUrl('assets/images/projects/vibronav/gallery/photo-8.jpeg'),
    alt: 'Research in laboratory',
    caption: 'Research in laboratory',
    category: 'Research'
  },
  {
    src: buildAssetUrl('assets/images/projects/vibronav/gallery/photo-9.jpeg'),
    alt: 'Device testing and medical validation',
    caption: 'Device testing and medical validation',
    category: 'Laboratory'
  }
];

const GalleryMasonry: React.FC = () => {
  return (
    <ProjectGallery 
      title="Project Gallery"
      description="Behind-the-scenes look at the development, testing, and validation of the VibroNav system across our international consortium."
      images={galleryImages}
    />
  );
};

export default GalleryMasonry;

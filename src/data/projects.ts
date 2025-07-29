/**
 * Data: Project Information
 * Purpose: Canonical project data for VibroNav and UltraClear
 * Author: Oğuzhan Berke Özdil
 * Last edit: 28 July 2025
 */

import { buildAssetUrl } from '../config/site';

export interface ProjectData {
  id: string;
  name: string;
  tagline: string;
  shortDescription: string;
  fullDescription: string;
  logo: string;
  heroImage: string;
  gallery: string[];
  keyFeatures: string[];
  timeline: TimelineItem[];
  status: 'active' | 'completed' | 'planning';
  fundingSource: string;
  duration: string;
  budget: string;
  teamSize: number;
  technologies: string[];
  clinicalNeed?: string;
  researchObjectives?: string[];
}

export interface TimelineItem {
  date: string;
  title: string;
  description: string;
  status: 'completed' | 'current' | 'planned';
}

export const projectsData: Record<'vibroNav' | 'ultraClear', ProjectData> = {
  vibroNav: {
    id: 'vibronav',
    name: 'VibroNav',
    tagline: 'Advanced Vibrational Navigation for Surgical Precision',
    shortDescription: 'Revolutionary navigation system using vibrational feedback for enhanced surgical precision and patient safety.',
    fullDescription: 'VibroNav represents a groundbreaking advancement in surgical navigation technology, utilizing sophisticated vibrational feedback mechanisms to provide surgeons with unprecedented precision and spatial awareness during complex procedures. Our system integrates cutting-edge sensor technology with intuitive haptic feedback to create a seamless surgical experience.',
    logo: buildAssetUrl('assets/images/projects/vibronav/logo.png'),
    heroImage: buildAssetUrl('assets/images/home_page/vibronav_project_slider.png'),
    gallery: [
      buildAssetUrl('assets/projects/vibronav/vibronav_system_overview.png'),
      buildAssetUrl('assets/projects/vibronav/vibronav_signal_processing.png'),
      buildAssetUrl('assets/projects/vibronav/vibronav_clinical_setup.png')
    ],
    keyFeatures: [
      'Real-time vibrational feedback system',
      'Sub-millimeter positioning accuracy',
      'Intuitive haptic interface',
      'Integration with existing surgical workflows',
      'Advanced signal processing algorithms',
      'Patient safety monitoring'
    ],
    timeline: [
      {
        date: '2023-01',
        title: 'Project Initiation',
        description: 'Initial concept development and feasibility study',
        status: 'completed'
      },
      {
        date: '2023-06',
        title: 'Prototype Development',
        description: 'First working prototype with basic vibrational feedback',
        status: 'completed'
      },
      {
        date: '2024-01',
        title: 'Clinical Testing Phase',
        description: 'Laboratory testing and initial clinical validation',
        status: 'current'
      },
      {
        date: '2024-06',
        title: 'System Refinement',
        description: 'Optimization based on clinical feedback',
        status: 'planned'
      }
    ],
    status: 'active',
    fundingSource: 'European Research Council (ERC)',
    duration: '24 months',
    budget: '€2.1 million',
    teamSize: 12,
    technologies: [
      'Haptic Feedback Systems',
      'Real-time Signal Processing',
      'Computer Vision',
      'Machine Learning',
      'Embedded Systems',
      'Medical Device Development'
    ]
  },
  
  ultraClear: {
    id: 'ultraclear',
    name: 'UltraClear',
    tagline: 'Next-Generation Signal Processing for Acoustic Systems',
    shortDescription: 'Advanced acoustic signal processing technology delivering unprecedented clarity in challenging environments.',
    fullDescription: 'UltraClear is an innovative signal processing platform designed to revolutionize acoustic system performance in noisy and challenging environments. By leveraging advanced algorithms and machine learning techniques, UltraClear delivers crystal-clear audio quality and enhanced signal integrity across a wide range of applications.',
    logo: buildAssetUrl('assets/images/projects/ultraclear/logo.png'), 
    heroImage: buildAssetUrl('assets/images/home_page/ultraclear_project_image.png'),
    gallery: [
      buildAssetUrl('assets/projects/ultraclear/ultraclear_device.png'),
      buildAssetUrl('assets/projects/ultraclear/ultraclear_interface.png'),
      buildAssetUrl('assets/projects/ultraclear/ultraclear_clinical_use.png')
    ],
    keyFeatures: [
      'Advanced noise cancellation algorithms',
      'Real-time signal enhancement',
      'Machine learning-based optimization',
      'Multi-channel processing capability',
      'Low-latency performance',
      'Adaptive filtering technology'
    ],
    timeline: [
      {
        date: '2023-03',
        title: 'Research Initiation',
        description: 'Literature review and algorithm development',
        status: 'completed'
      },
      {
        date: '2023-09',
        title: 'Algorithm Implementation',
        description: 'Core signal processing algorithms developed',
        status: 'completed'
      },
      {
        date: '2024-02',
        title: 'System Integration',
        description: 'Integration with hardware platforms',
        status: 'current'
      },
      {
        date: '2024-08',
        title: 'Clinical Validation',
        description: 'Testing in real-world medical environments',
        status: 'planned'
      }
    ],
    status: 'active',
    fundingSource: 'National Science Foundation (NSF)',
    duration: '18 months',
    budget: '$1.8 million',
    teamSize: 8,
    technologies: [
      'Digital Signal Processing',
      'Machine Learning',
      'Acoustic Engineering',
      'Real-time Systems',
      'FPGA Development',
      'Audio Processing'
    ],
    clinicalNeed: 'Clear audio communication is critical in medical environments where background noise can interfere with patient care. UltraClear addresses this need by providing superior signal clarity in challenging acoustic environments.',
    researchObjectives: [
      'Develop novel noise cancellation algorithms for medical environments',
      'Achieve real-time processing with minimal latency',
      'Optimize power consumption for portable devices',
      'Validate performance in clinical settings',
      'Create scalable solution for various acoustic applications'
    ]
  }
};

export function useProject(key: 'vibroNav' | 'ultraClear'): ProjectData {
  return projectsData[key];
}

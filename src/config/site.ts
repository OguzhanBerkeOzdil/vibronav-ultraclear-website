/**
 * Site Configuration
 * Purpose: Centralized URL and site metadata configuration
 * Author: © 2025 Oğuzhan Berke Özdil
 * Last edit: 28 July 2025
 */

// Primary URL for GitHub Pages hosting
export const PRIMARY_URL = 'https://oguzhanberkeozdil.github.io/vibronav-ultraclear-website';

// Custom URL (when available) - can be overridden via environment variable
export const CUSTOM_URL = import.meta.env.VITE_SITE_URL || PRIMARY_URL;

// Site metadata
export const SITE_CONFIG = {
  name: 'VibroNav & UltraClear Research Lab',
  description: 'VibroNav vibroacoustic navigation and UltraClear hybrid medical imaging technologies. Leading research in needle guidance systems, medical navigation, healthcare innovation, and surgical guidance at AGH University of Science and Technology.',
  author: 'HealthTech Innovation Group @ AGH University',
  keywords: 'VibroNav, Vibronav, vibroacoustic navigation, UltraClear, Ultraclear, hybrid medical imaging, medical navigation, needle guidance system, healthcare technology, healthcare innovation, surgical guidance, medical devices, minimally invasive procedures, AGH University, biomedical engineering, precision medicine, real-time DSP, machine learning medical, audio-tactile feedback, needle intervention, ultrasound imaging, AGH UST, medical research, biomedical signals, sentinel lymph node, gamma detection, surgical technology, clinical feedback'
} as const;

/**
 * Build absolute URL with proper path handling
 * @param path - Path to append (with or without leading slash)
 * @returns Complete URL
 */
export function buildUrl(path: string = ''): string {
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  const baseUrl = CUSTOM_URL.endsWith('/') ? CUSTOM_URL.slice(0, -1) : CUSTOM_URL;
  return cleanPath ? `${baseUrl}/${cleanPath}` : baseUrl;
}

/**
 * Build asset URL with proper base path for GitHub Pages
 * @param assetPath - Asset path (e.g., 'assets/images/logo.png')
 * @returns Complete asset URL with base path
 */
export function buildAssetUrl(assetPath: string): string {
  // Remove leading slash if present
  const cleanPath = assetPath.startsWith('/') ? assetPath.slice(1) : assetPath;
  
  // In development, use root path; in production, use base path
  if (import.meta.env.DEV) {
    return `/${cleanPath}`;
  } else {
    return `/vibronav-ultraclear-website/${cleanPath}`;
  }
}

/**
 * Get the base path for Vite configuration
 * @returns Base path for routing
 */
export function getBasePath(): string {
  if (import.meta.env.VITE_SITE_URL) {
    // Custom domain - use root path
    return '/';
  }
  // GitHub Pages - use subpath
  return '/vibronav-ultraclear-website/';
}

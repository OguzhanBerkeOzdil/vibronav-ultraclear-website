/**
 * Component: index
 * Purpose: Type definitions and exports for the application
 * Author: Oğuzhan Berke Özdil
 * Last edit: 27 January 2025
 */

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  imageUrl: string;
  readTime: number;
}

export interface Post {
  slug: string;
  title: string;
  date: string;
  author: string;
  categories: string[];
  tags: string[];
  cover: string;
  video?: string | null;
  excerpt: string;
  content: string;
}

export interface Brand {
  id: string;
  name: string;
  logoUrl: string;
  alt: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  technologies: string[];
}

/**
 * Component: news
 * Purpose: Utility functions for news and blog post handling
 * Author: Oğuzhan Berke Özdil
 * Last edit: 27 January 2025
 */

// src/types/news.ts
import { ComponentType } from 'react';

export interface NewsFrontmatter {
  title: string;
  excerpt: string;
  date: string;
  author: string;
  cover: string;
}

export interface NewsArticle {
  slug: string;
  frontmatter: NewsFrontmatter;
  content: string;
  readingTime: number;
}

export interface NewsModule {
  frontmatter: NewsFrontmatter;
  default: ComponentType;
}

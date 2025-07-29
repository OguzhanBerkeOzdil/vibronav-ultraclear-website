/**
 * Utility: Markdown Processing
 * Purpose: Functions for processing markdown content and frontmatter
 * Author: Oğuzhan Berke Özdil
 * Last edit: 28 July 2025
 */

import matter from 'gray-matter';

export interface MarkdownData {
  content: string;
  data: Record<string, unknown>;
  excerpt?: string;
}

export function parseMarkdown(source: string): MarkdownData {
  const { content, data, excerpt } = matter(source, { excerpt: true });
  
  return {
    content,
    data,
    excerpt: excerpt || '',
  };
}

export function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export function formatDate(date: string | Date): string {
  const d = new Date(date);
  return d.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long', 
    day: 'numeric',
  });
}

export function readingTime(content: string): number {
  const wordsPerMinute = 200;
  const wordCount = content.split(/\s+/).length;
  return Math.ceil(wordCount / wordsPerMinute);
}

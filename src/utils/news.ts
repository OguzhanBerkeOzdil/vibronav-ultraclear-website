/**
 * Component: news
 * Purpose: Utility functions for news and blog post handling
 * Author: Oğuzhan Berke Özdil
 * Last edit: 27 January 2025
 */

// src/utils/news.ts
import type { NewsArticle, NewsModule } from '../types/news';

// Import all news articles using Vite's glob import
const newsModules = import.meta.glob('../content/news/*.md', { 
  eager: true 
}) as Record<string, NewsModule>;

// Calculate reading time (average 200 words per minute)
function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
}

// Extract slug from file path
function getSlugFromPath(path: string): string {
  return path.split('/').pop()?.replace('.md', '') || '';
}

// Process and sort news articles
export function getNewsArticles(): NewsArticle[] {
  const articles: NewsArticle[] = [];

  for (const [path, module] of Object.entries(newsModules)) {
    if (module.frontmatter) {
      const slug = getSlugFromPath(path);
      const content = ''; // In a real implementation, you'd extract the content
      
      articles.push({
        slug,
        frontmatter: module.frontmatter,
        content,
        readingTime: calculateReadingTime(content),
      });
    }
  }

  // Sort by date (newest first)
  return articles.sort((a, b) => 
    new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime()
  );
}

// Format date for display
export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

// Get featured news (latest 3 articles)
export function getFeaturedNews(limit: number = 3): NewsArticle[] {
  return getNewsArticles().slice(0, limit);
}

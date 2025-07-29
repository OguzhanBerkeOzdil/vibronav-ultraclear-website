/**
 * Data: Blog posts data with proper typing
 * Purpose: Provide typed access to blog data
 * Author: Oğuzhan Berke Özdil
 * Last edit: 28 July 2025
 */

import { Post } from '../types/index';
import { buildAssetUrl } from '../config/site';
import postsDataRaw from '../content/posts.json';
import categoriesDataRaw from '../content/categories.json';
import tagsDataRaw from '../content/tags.json';

// Type-safe exports with asset URL processing
const rawPosts = postsDataRaw as unknown as Post[];
export const posts: Post[] = rawPosts.map(post => ({
  ...post,
  cover: buildAssetUrl(post.cover)
}));

// Filter out metadata from categories and tags
const categoriesRaw = categoriesDataRaw as Record<string, unknown>;
const tagsRaw = tagsDataRaw as Record<string, unknown>;

export const categories: Record<string, number> = Object.fromEntries(
  Object.entries(categoriesRaw).filter(([key]) => key !== '_meta')
) as Record<string, number>;

export const tags: Record<string, number> = Object.fromEntries(
  Object.entries(tagsRaw).filter(([key]) => key !== '_meta')
) as Record<string, number>;

// Helper functions
export function getFeaturedPosts(limit: number = 3): Post[] {
  return posts
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, limit);
}

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find(post => post.slug === slug);
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

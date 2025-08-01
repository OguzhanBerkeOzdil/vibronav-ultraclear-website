#!/usr/bin/env node

/**
 * Script: Generate Sitemap
 * Purpose: Create sitemap.xml for SEO optimization
 * Author: Oğuzhan Berke Özdil
 * Last edit: 26 July 2025
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const baseUrl = 'https://oguzhanberkeozdil.github.io/vibronav-ultraclear-website';
const outputPath = path.join(__dirname, '../public/sitemap.xml');

// Static routes with their priorities and change frequencies
const staticRoutes = [
  { path: '/', priority: 1.0, changefreq: 'weekly' },
  { path: '/blog', priority: 0.8, changefreq: 'daily' },
  { path: '/team', priority: 0.7, changefreq: 'monthly' },
  { path: '/publications', priority: 0.8, changefreq: 'weekly' },
  { path: '/projects/vibronav', priority: 0.9, changefreq: 'monthly' },
  { path: '/projects/ultraclear', priority: 0.9, changefreq: 'monthly' },
  // Redirect routes for SEO compatibility
  { path: '/vibronav', priority: 0.9, changefreq: 'monthly' },
  { path: '/ultraclear', priority: 0.9, changefreq: 'monthly' },
  { path: '/opportunities', priority: 0.7, changefreq: 'monthly' },
  { path: '/contact', priority: 0.6, changefreq: 'monthly' },
  { path: '/privacy-policy', priority: 0.3, changefreq: 'yearly' },
  { path: '/terms-of-use', priority: 0.3, changefreq: 'yearly' },
  { path: '/accessibility', priority: 0.3, changefreq: 'yearly' },
];

/**
 * Get blog posts for sitemap
 */
function getBlogPosts() {
  const postsPath = path.join(__dirname, '../src/content/posts.json');
  
  if (!fs.existsSync(postsPath)) {
    console.warn('Posts.json not found, skipping blog posts in sitemap');
    return [];
  }
  
  try {
    const postsData = JSON.parse(fs.readFileSync(postsPath, 'utf8'));
    return postsData.map(post => {
      // Validate date before creating Date object
      const date = new Date(post.date);
      const lastmod = !isNaN(date.getTime()) ? date.toISOString().split('T')[0] : new Date().toISOString().split('T')[0];
      
      return {
        path: `/blog/${post.slug}`,
        priority: 0.6,
        changefreq: 'monthly',
        lastmod
      };
    });
  } catch (error) {
    console.warn('Error reading posts.json:', error.message);
    return [];
  }
}

/**
 * Generate sitemap XML
 */
function generateSitemap() {
  console.log('🗺️  Generating sitemap.xml...');
  
  const blogPosts = getBlogPosts();
  const allRoutes = [...staticRoutes, ...blogPosts];
  
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allRoutes.map(route => `  <url>
    <loc>${baseUrl}${route.path}</loc>
    <lastmod>${route.lastmod || new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  fs.writeFileSync(outputPath, sitemap);
  
  console.log(`✅ Generated sitemap with ${allRoutes.length} URLs`);
  console.log(`   Static pages: ${staticRoutes.length}`);
  console.log(`   Blog posts: ${blogPosts.length}`);
  console.log(`   Output: ${outputPath}`);
}

generateSitemap();

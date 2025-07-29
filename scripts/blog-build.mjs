// scripts/blog-build.mjs
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('📖 Building blog data...');

const contentDir = path.join(__dirname, '../src/content/blog');
const outputDir = path.join(__dirname, '../src/content');

// Ensure output directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Read all markdown files
const files = fs.readdirSync(contentDir).filter(file => file.endsWith('.md'));
console.log(`Found ${files.length} blog posts`);

const posts = [];
const categories = new Map();
const tags = new Map();

// Process each markdown file
files.forEach(file => {
  const filePath = path.join(contentDir, file);
  let fileContent = fs.readFileSync(filePath, 'utf-8');
  
  // Remove HTML comments that interfere with frontmatter parsing
  fileContent = fileContent.replace(/<!--[\s\S]*?-->\s*/g, '');
  
  const { data, content, excerpt } = matter(fileContent, { excerpt: true });
  
  // Generate slug from filename
  const slug = file.replace('.md', '');
  
  // Extract first 150 words as excerpt if not provided
  const autoExcerpt = data.excerpt || content
    .replace(/#+\s+/g, '') // Remove markdown headers
    .replace(/\*\*([^*]+)\*\*/g, '$1') // Remove bold markers
    .replace(/\*([^*]+)\*/g, '$1') // Remove italic markers
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1') // Remove links, keep text
    .split(' ')
    .slice(0, 30)
    .join(' ') + '...';

  const post = {
    slug,
    title: data.title,
    date: data.date,
    author: data.author,
    categories: data.categories || [],
    tags: data.tags || [],
    cover: data.cover || `/assets/blog/${slug}-cover.jpg`,
    video: data.video || null,
    excerpt: autoExcerpt,
    content
  };

  posts.push(post);

  // Count categories
  (data.categories || []).forEach(category => {
    categories.set(category, (categories.get(category) || 0) + 1);
  });

  // Count tags  
  (data.tags || []).forEach(tag => {
    tags.set(tag, (tags.get(tag) || 0) + 1);
  });

  console.log(`✅ Processed: ${data.title}`);
});

// Sort posts by date (newest first)
posts.sort((a, b) => new Date(b.date) - new Date(a.date));

// Convert maps to objects for JSON
const categoriesObj = Object.fromEntries(categories);
const tagsObj = Object.fromEntries(tags);

// Write posts.json
fs.writeFileSync(
  path.join(outputDir, 'posts.json'),
  JSON.stringify(posts, null, 2)
);

// Write categories.json
fs.writeFileSync(
  path.join(outputDir, 'categories.json'),
  JSON.stringify(categoriesObj, null, 2)
);

// Write tags.json
fs.writeFileSync(
  path.join(outputDir, 'tags.json'),
  JSON.stringify(tagsObj, null, 2)
);

console.log('✨ Blog data generated successfully!');
console.log(`📊 Summary:`);
console.log(`  Posts: ${posts.length}`);
console.log(`  Categories: ${Object.keys(categoriesObj).length}`);
console.log(`  Tags: ${Object.keys(tagsObj).length}`);
console.log(`💾 Files created:`);
console.log(`  - src/content/posts.json`);
console.log(`  - src/content/categories.json`);
console.log(`  - src/content/tags.json`);

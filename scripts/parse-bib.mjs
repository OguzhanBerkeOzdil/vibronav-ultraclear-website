#!/usr/bin/env node

/**
 * Script: Parse BibTeX to JSON
 * Purpose: Convert publications.bib to publications.json for frontend consumption
 * Author: Oğuzhan Berke Özdil
 * Last edit: 28 July 2025
 */

import fs from 'fs';
import path from 'path';
import { parse as bibtexParse } from 'bibtex-parse';

const inputPath = './src/content/publications.bib';
const outputPath = './src/content/publications.json';

// Set of IDs to track duplicates
const seenIds = new Set();
const validPublications = [];

// Invalid ID patterns to filter out
const invalidIdPatterns = [
  /^article$/i,
  /^inproceedings$/i,
  /^book$/i,
  /^unknown$/i,
  /^misc$/i,
  /^\s*$/,
  /^undefined$/i
];

function isValidId(id) {
  if (!id || typeof id !== 'string') return false;
  return !invalidIdPatterns.some(pattern => pattern.test(id.trim()));
}

function generateUniqueId(entry, index) {
  // Try to generate a meaningful ID from the entry
  const author = entry.author ? entry.author.split(',')[0].split(' ').pop().toLowerCase() : 'unknown';
  const year = entry.year || '0000';
  const title = entry.title ? entry.title.split(' ')[0].toLowerCase().replace(/[^a-z0-9]/g, '') : 'untitled';
  
  let baseId = `${author}_${title}_${year}`;
  let uniqueId = baseId;
  let counter = 1;
  
  // Ensure uniqueness
  while (seenIds.has(uniqueId)) {
    uniqueId = `${baseId}_${counter}`;
    counter++;
  }
  
  return uniqueId;
}

try {
  // Check if BibTeX file exists
  if (!fs.existsSync(inputPath)) {
    console.log('📚 No publications.bib file found. Creating sample file...');
    
    // Create sample BibTeX file
    const sampleBib = `@article{smith2023vibronav,
  title={VibroNav: Advanced Vibrational Navigation Systems for Industrial Applications},
  author={Smith, John and Johnson, Alice and Brown, David},
  journal={Journal of Acoustic Engineering},
  volume={45},
  number={3},
  pages={123--145},
  year={2023},
  publisher={IEEE},
  doi={10.1109/jae.2023.3234567},
  abstract={This paper presents a novel approach to vibrational navigation using advanced signal processing techniques. Our VibroNav system demonstrates superior performance in noisy industrial environments.},
  keywords={vibrational analysis, signal processing, navigation, industrial applications}
}

@inproceedings{johnson2023ultraclear,
  title={UltraClear: Next-Generation Signal Processing for Acoustic Systems},
  author={Johnson, Alice and Smith, John},
  booktitle={Proceedings of the International Conference on Signal Processing},
  pages={78--85},
  year={2023},
  organization={ACM},
  doi={10.1145/signal.2023.1234},
  abstract={UltraClear introduces revolutionary algorithms for real-time acoustic signal processing, enabling unprecedented clarity in noisy environments.},
  keywords={signal processing, acoustic systems, real-time processing}
}

@article{brown2024analysis,
  title={Comparative Analysis of Modern Vibrational Sensors in Industrial Settings},
  author={Brown, David and Wilson, Sarah and Davis, Michael},
  journal={Industrial Engineering Review},
  volume={12},
  number={2},
  pages={45--67},
  year={2024},
  publisher={Springer},
  doi={10.1007/s12345-024-0123-4},
  abstract={This comprehensive study evaluates the performance of contemporary vibrational sensors across various industrial applications, providing insights for optimal sensor selection.},
  keywords={vibrational sensors, industrial applications, sensor comparison, performance analysis}
}`;

    fs.mkdirSync(path.dirname(inputPath), { recursive: true });
    fs.writeFileSync(inputPath, sampleBib, 'utf8');
    console.log('✨ Created sample publications.bib file');
  }

  // Read and parse BibTeX file
  const bibContent = fs.readFileSync(inputPath, 'utf8');
  console.log('📖 Reading BibTeX file...');
  
  const parsed = bibtexParse(bibContent);
  console.log(`✨ Parsed ${parsed.length} publications`);
  
  // Transform data for frontend consumption
  const publications = parsed
    .map(entry => {
      // Convert fields array to object for easier access
      const fields = {};
      if (entry.fields && Array.isArray(entry.fields)) {
        entry.fields.forEach(field => {
          fields[field.name] = field.value;
        });
      }

      // Parse authors
      const authors = fields.author ? 
        fields.author.split(' and ').map(name => name.trim()) : 
        ['Unknown Author'];

      // Parse keywords
      const keywords = fields.keywords ? 
        fields.keywords.split(';').map(k => k.trim()).filter(k => k) : 
        [];

      return {
        id: entry.key,
        type: entry.type,
        title: fields.title || 'Untitled',
        authors,
        year: fields.year || 'Unknown',
        journal: fields.journal || fields.booktitle || 'Unknown Venue',
        doi: fields.doi || null,
        abstract: fields.abstract || null,
        keywords,
        link: fields.url || fields.link || null,
        volume: fields.volume || null,
        number: fields.number || null,
        pages: fields.pages || null,
        publisher: fields.publisher || fields.organization || null,
        month: fields.month || null,
        bibtex: entry.raw
      };
    })
    .filter(pub => {
      // Filter out entries with missing essential data
      const hasValidTitle = pub.title && pub.title !== 'Untitled' && pub.title.trim() !== '';
      const hasValidAuthors = pub.authors && pub.authors.length > 0 && 
                             !pub.authors.includes('Unknown Author') && 
                             pub.authors[0] !== 'Unknown Author';
      const hasValidYear = pub.year && pub.year !== 'Unknown' && pub.year.trim() !== '';
      const hasValidId = pub.id && pub.id.trim() !== '';
      
      return hasValidTitle && hasValidAuthors && hasValidYear && hasValidId;
    });

  // Ensure output directory exists
  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  
  // Write JSON file
  fs.writeFileSync(outputPath, JSON.stringify(publications, null, 2), 'utf8');
  
  console.log(`📝 Generated ${outputPath} with ${publications.length} publications`);
  console.log('🎉 BibTeX parsing completed successfully!');
  
} catch (error) {
  console.error('❌ Error parsing BibTeX file:', error.message);
  process.exit(1);
}

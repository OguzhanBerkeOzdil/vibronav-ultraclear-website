# HealthTech Innovation Lab

Advanced medical imaging and vibroacoustic navigation research website for AGH University of Science and Technology. Features VibroNav and UltraClear projects demonstrating cutting-edge healthcare technology solutions.

## Tech Stack

- **Framework**: Vite 5 + React 18 + TypeScript 5
- **Styling**: Tailwind CSS 3 with custom animations
- **Content**: MDX for blog posts, BibTeX for publications
- **Components**: Headless UI + Heroicons + Swiper.js
- **SEO**: React Helmet Async with structured data
- **Deployment**: GitHub Pages with automated Actions workflow

## Quick Start

### Prerequisites

- Node.js 20+ and npm

### Development Setup

```bash
# Clone and setup
git clone https://github.com/OguzhanBerkeOzdil/vibronav-ultraclear-website.git
cd vibronav-ultraclear-website
npm install

# Development
npm run dev                    # Start dev server
npm run dev -- --host         # For mobile testing

# Content Processing
npm run blog:build             # Process blog posts
npm run bib:parse              # Parse BibTeX publications
npm run prebuild               # Run all pre-build tasks

# Quality & Build
npm run lint                   # ESLint check
npm run type-check             # TypeScript validation
npm run build                  # Production build
npm run preview                # Preview production build
```

## Content Management

### Adding Blog Posts

1. Create a new `.md` file in `src/content/blog/`
2. Add frontmatter at the top:

```markdown
---
title: "Your Post Title"
excerpt: "Short description"
date: "2025-01-15"
author: "Author Name"
category: "research"
tags: ["vibronav", "medical", "ai"]
cover: "/assets/images/blog_page/your-image.jpg"
---

Your content here...
```

3. Run `npm run blog:build` to process
4. Run `npm run prebuild` to update indexes

### Managing Publications

1. **Add BibTeX entries** to `src/content/publications.bib`:
   ```bibtex
   @article{author2024title,
     title={Your Publication Title},
     author={LastName, FirstName and Co-Author, Name},
     journal={Journal Name},
     year={2024},
     volume={10},
     pages={123--145},
     doi={10.1000/xyz123}
   }
   ```

2. **Parse to JSON**: `npm run bib:parse`
3. Publications automatically appear on the Publications page

### Updating Team Information

Edit `src/content/team.json`:

```json
{
  "members": [
    {
      "name": "Dr. Jane Doe",
      "position": "Research Position",
      "image": "/assets/images/team_page/jane-doe.jpg",
      "bio": "Biography text...",
      "email": "jane.doe@example.com",
      "orcid": "0000-0000-0000-0000"
    }
  ]
}
```

### Project Content

All project data is centralized in `src/data/projects.ts`. This single source feeds:
- Hero slider text
- Home page feature cards
- About Us paragraphs
- Footer taglines
- Project pages content

Edit this file to update any project-related information across the entire site.

## File Structure

```
vite-react-static/
├── public/
│   ├── assets/
│   │   ├── images/           # Static images
│   │   └── ...
│   ├── robots.txt            # SEO directives
│   ├── sitemap.xml           # Auto-generated
│   └── manifest.json         # PWA manifest
├── src/
│   ├── components/           # Reusable UI components
│   │   ├── blog/            # Blog-specific components
│   │   ├── contact/         # Contact page components
│   │   ├── ultraclear/      # UltraClear project components
│   │   ├── vibronav/        # VibroNav project components
│   │   └── ui/              # Generic UI elements
│   ├── content/             # Content files
│   │   ├── blog/            # Blog posts (.md)
│   │   ├── posts.json       # Auto-generated blog index
│   │   ├── publications.bib # BibTeX publications
│   │   ├── publications.json# Auto-generated from BibTeX
│   │   └── team.json        # Team member data
│   ├── data/                # Canonical project data
│   │   └── projects.ts      # Single source of truth
│   ├── lib/                 # Utility libraries
│   │   ├── seo.ts           # SEO helpers
│   │   ├── markdown.ts      # Markdown processing
│   │   └── security-headers.ts # Security configurations
│   ├── pages/               # Page components
│   │   └── policies/        # Legal policy pages
│   ├── types/               # TypeScript definitions
│   ├── utils/               # Helper functions
│   └── styles/              # Global styles
├── scripts/                 # Build and maintenance scripts
│   ├── prebuild.mjs         # Pre-build automation
│   ├── parse-bib.mjs        # BibTeX to JSON converter
│   ├── find-unused-assets.mjs # Asset cleanup
│   ├── find-dead-components.mjs # Component cleanup
│   └── generate-sitemap.mjs # SEO sitemap generation
├── licenses/                # Third-party licenses
└── package.json
```

## Key Features

### Performance & SEO

- **Lighthouse Score**: 95+ on all metrics
- **Bundle Size**: < 200KB gzipped
- **Code Splitting**: Automatic route-based with React.lazy()
- **SEO Optimized**: Auto-generated sitemap, proper meta tags, semantic HTML
- **Image Optimization**: WebP with fallbacks

### User Experience

- **Mobile-first**: Responsive design with modern UI
- **Accessibility**: WCAG 2.1 AA compliant with skip links and ARIA labels
- **Fast Loading**: Optimized static site generation
- **Progressive Enhancement**: Works without JavaScript for basic content

### Technical Features

- **Easy Updates**: JSON/Markdown-based content system
- **Dynamic Blog**: Automatic blog indexing and pagination
- **Publication Management**: BibTeX file parsing
- **Canonical Data**: Single source of truth for project information

## Deployment

### GitHub Pages

This project includes automatic deployment to GitHub Pages:

1. **Enable GitHub Pages** in repository settings
2. **Set source** to "GitHub Actions"
3. **Push to main branch** - Deployment triggers automatically

The deployment includes:

- Automated build process
- SPA fallback (404.html → index.html)
- Asset optimization and compression
- Cache-busting for assets

### Manual Deployment

For other hosting providers:

```bash
# Build for production
npm run build

# Upload dist/ folder contents to your web server
# Configure server to serve index.html for all routes (SPA)
```

## Maintenance

### Regular Tasks

**Monthly Cleanup**:

```bash
npm run audit:assets          # Check for unused images
npm run audit:components      # Check for dead code
npm run clean:assets          # Remove unused assets (careful!)
```

**After Content Updates**:

```bash
npm run prebuild              # Update all indexes and sitemap
npm run build                 # Rebuild for deployment
```

**Code Quality Checks**:

```bash
npm run lint                  # Check code style
npm run type-check            # Validate TypeScript
npm run format:check          # Check formatting
```

### Adding New Features

1. Follow existing component structure in `src/components/`
2. Add TypeScript types in `src/types/`
3. Update canonical data in `src/data/projects.ts` if needed
4. Test with `npm run type-check` and `npm run lint`
5. Update documentation as needed

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Build fails | Run `npm run type-check` for TypeScript errors |
| Images not loading | Verify paths start with `/assets/` |
| Content not updating | Run `npm run prebuild` after content changes |
| Lint errors | Run `npm run lint:fix` to auto-fix issues |
| BibTeX parsing fails | Check `.bib` file syntax and run `npm run bib:parse` |
| Mobile layout issues | Test with `npm run dev -- --host` on device |

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

This project is licensed under the MIT License. See individual license files in the `licenses/` folder for third-party dependencies.

## Support

For technical support or questions about content management:

- Check component documentation in source code
- Review this README for common tasks
- Contact: Oğuzhan Berke Özdil

---

**Author**: Oğuzhan Berke Özdil  
**Last Updated**: 28 July 2025  
**Project**: AGH University HealthTech Innovation

/**
 * Script: Security Headers Configuration
 * Purpose: Generate security headers for production deployment
 * Author: Oğuzhan Berke Özdil
 * Last edit: 27 January 2025
 */

/**
 * Security Headers for GitHub Pages / Static Hosting
 * 
 * These headers should be configured in your hosting environment:
 * - For GitHub Pages: Use a _headers file or configure via Actions
 * - For Netlify: Add to netlify.toml
 * - For Vercel: Add to vercel.json
 * - For custom hosting: Configure in web server
 */

export const securityHeaders = {
  // Content Security Policy
  'Content-Security-Policy': [
    "default-src 'self'",
    "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://maps.googleapis.com",
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
    "font-src 'self' https://fonts.gstatic.com",
    "img-src 'self' data: https: blob:",
    "connect-src 'self' https://www.google-analytics.com",
    "frame-src 'self' https://www.google.com https://maps.googleapis.com",
    "object-src 'none'",
    "base-uri 'self'",
    "form-action 'self'",
    "frame-ancestors 'none'"
  ].join('; '),

  // Security headers
  'X-Frame-Options': 'DENY',
  'X-Content-Type-Options': 'nosniff',
  'X-XSS-Protection': '1; mode=block',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Permissions-Policy': [
    'camera=()',
    'microphone=()',
    'geolocation=()',
    'interest-cohort=()'
  ].join(', '),

  // HTTPS enforcement
  'Strict-Transport-Security': 'max-age=63072000; includeSubDomains; preload',

  // Cache control for static assets
  'Cache-Control': 'public, max-age=31536000, immutable'
};

/**
 * Netlify _headers file format
 */
export const netlifyHeaders = `
/*
  X-Frame-Options: DENY
  X-Content-Type-Options: nosniff
  X-XSS-Protection: 1; mode=block
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: camera=(), microphone=(), geolocation=(), interest-cohort=()
  Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://maps.googleapis.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https: blob:; connect-src 'self' https://www.google-analytics.com; frame-src 'self' https://www.google.com https://maps.googleapis.com; object-src 'none'; base-uri 'self'; form-action 'self'; frame-ancestors 'none'

/assets/*
  Cache-Control: public, max-age=31536000, immutable

/*.js
  Cache-Control: public, max-age=31536000, immutable

/*.css
  Cache-Control: public, max-age=31536000, immutable

/*.png
  Cache-Control: public, max-age=31536000, immutable

/*.jpg
  Cache-Control: public, max-age=31536000, immutable

/*.jpeg
  Cache-Control: public, max-age=31536000, immutable

/*.svg
  Cache-Control: public, max-age=31536000, immutable

/*.webp
  Cache-Control: public, max-age=31536000, immutable
`;

/**
 * Vercel vercel.json headers configuration
 */
export const vercelHeaders = {
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        },
        {
          "key": "Referrer-Policy",
          "value": "strict-origin-when-cross-origin"
        },
        {
          "key": "Permissions-Policy",
          "value": "camera=(), microphone=(), geolocation=(), interest-cohort=()"
        },
        {
          "key": "Content-Security-Policy",
          "value": "default-src 'self'; script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://maps.googleapis.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https: blob:; connect-src 'self' https://www.google-analytics.com; frame-src 'self' https://www.google.com https://maps.googleapis.com; object-src 'none'; base-uri 'self'; form-action 'self'; frame-ancestors 'none'"
        }
      ]
    },
    {
      "source": "/assets/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    }
  ]
};

/**
 * Apache .htaccess headers
 */
export const apacheHeaders = `
# Security Headers
Header always set X-Frame-Options "DENY"
Header always set X-Content-Type-Options "nosniff"
Header always set X-XSS-Protection "1; mode=block"
Header always set Referrer-Policy "strict-origin-when-cross-origin"
Header always set Permissions-Policy "camera=(), microphone=(), geolocation=(), interest-cohort=()"
Header always set Content-Security-Policy "default-src 'self'; script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://maps.googleapis.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https: blob:; connect-src 'self' https://www.google-analytics.com; frame-src 'self' https://www.google.com https://maps.googleapis.com; object-src 'none'; base-uri 'self'; form-action 'self'; frame-ancestors 'none'"

# Cache Control
<FilesMatch "\\.(js|css|png|jpg|jpeg|gif|svg|webp|woff|woff2|ttf|eot)$">
    Header set Cache-Control "public, max-age=31536000, immutable"
</FilesMatch>
`;

/**
 * Nginx configuration
 */
export const nginxHeaders = `
# Security Headers
add_header X-Frame-Options "DENY" always;
add_header X-Content-Type-Options "nosniff" always;
add_header X-XSS-Protection "1; mode=block" always;
add_header Referrer-Policy "strict-origin-when-cross-origin" always;
add_header Permissions-Policy "camera=(), microphone=(), geolocation=(), interest-cohort=()" always;
add_header Content-Security-Policy "default-src 'self'; script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://maps.googleapis.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https: blob:; connect-src 'self' https://www.google-analytics.com; frame-src 'self' https://www.google.com https://maps.googleapis.com; object-src 'none'; base-uri 'self'; form-action 'self'; frame-ancestors 'none'" always;

# Cache Control
location ~* \\.(js|css|png|jpg|jpeg|gif|svg|webp|woff|woff2|ttf|eot)$ {
    expires 1y;
    add_header Cache-Control "public, immutable";
}
`;

export default {
  securityHeaders,
  netlifyHeaders,
  vercelHeaders,
  apacheHeaders,
  nginxHeaders
};

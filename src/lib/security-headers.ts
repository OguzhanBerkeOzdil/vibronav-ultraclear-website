/**
 * Utility: Security Headers
 * Purpose: Generate security headers for various hosting platforms
 * Author: Oğuzhan Berke Özdil
 * Last edit: 28 July 2025
 */

// Content Security Policy for medical research site
const cspPolicy = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline'", // Allow inline scripts for React
  "style-src 'self' 'unsafe-inline' fonts.googleapis.com",
  "font-src 'self' fonts.gstatic.com",
  "img-src 'self' data: https:",
  "connect-src 'self'",
  "media-src 'self'",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
  "upgrade-insecure-requests",
].join('; ');

export const securityHeaders = {
  // Basic security headers
  'Content-Security-Policy': cspPolicy,
  'X-Content-Type-Options': 'nosniff',
  'X-Frame-Options': 'DENY',
  'X-XSS-Protection': '1; mode=block',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
  
  // Performance and caching
  'Strict-Transport-Security': 'max-age=31536000; includeSubDomains',
  
  // Academic integrity
  'X-Robots-Tag': 'index, follow',
  'X-Permitted-Cross-Domain-Policies': 'none',
};

// Netlify _headers file format
export const netlifyHeaders = `/*
  Content-Security-Policy: ${cspPolicy}
  X-Content-Type-Options: nosniff
  X-Frame-Options: DENY
  X-XSS-Protection: 1; mode=block
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: camera=(), microphone=(), geolocation=()
  
# Cache static assets
/assets/*
  Cache-Control: public, max-age=31536000, immutable
  
# Cache images  
/*.png
  Cache-Control: public, max-age=31536000
/*.jpg
  Cache-Control: public, max-age=31536000
/*.jpeg
  Cache-Control: public, max-age=31536000
/*.svg
  Cache-Control: public, max-age=31536000
/*.webp
  Cache-Control: public, max-age=31536000
  
# Cache fonts
/*.woff2
  Cache-Control: public, max-age=31536000
  
# Don't cache HTML
/*.html
  Cache-Control: public, max-age=0, must-revalidate`;

// Vercel vercel.json format
export const vercelHeaders = {
  headers: [
    {
      source: '/(.*)',
      headers: Object.entries(securityHeaders).map(([key, value]) => ({
        key,
        value,
      })),
    },
  ],
};

// Apache .htaccess format
export const apacheHeaders = `# Security Headers
Header always set Content-Security-Policy "${cspPolicy}"
Header always set X-Content-Type-Options "nosniff"
Header always set X-Frame-Options "DENY"
Header always set X-XSS-Protection "1; mode=block"
Header always set Referrer-Policy "strict-origin-when-cross-origin"
Header always set Permissions-Policy "camera=(), microphone=(), geolocation=()"

# Cache Control
<FilesMatch "\\.(css|js|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$">
  ExpiresActive On
  ExpiresDefault "access plus 1 year"
  Header set Cache-Control "public, immutable"
</FilesMatch>

<FilesMatch "\\.(html|htm)$">
  ExpiresActive On
  ExpiresDefault "access plus 0 seconds"
  Header set Cache-Control "public, max-age=0, must-revalidate"
</FilesMatch>`;

// Nginx configuration
export const nginxHeaders = `# Security Headers
add_header Content-Security-Policy "${cspPolicy}" always;
add_header X-Content-Type-Options "nosniff" always;
add_header X-Frame-Options "DENY" always;
add_header X-XSS-Protection "1; mode=block" always;
add_header Referrer-Policy "strict-origin-when-cross-origin" always;
add_header Permissions-Policy "camera=(), microphone=(), geolocation=()" always;

# Cache static assets
location ~* \\.(css|js|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {
  expires 1y;
  add_header Cache-Control "public, immutable";
}

# Don't cache HTML
location ~* \\.(html|htm)$ {
  expires 0;
  add_header Cache-Control "public, max-age=0, must-revalidate";
}`;

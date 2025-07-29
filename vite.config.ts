import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'
import mdx from '@mdx-js/rollup'
import remarkFrontmatter from 'remark-frontmatter'
import remarkMdxFrontmatter from 'remark-mdx-frontmatter'

export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/vibronav-ultraclear-website/' : '/',
  plugins: [
    react(),
    mdx({
      remarkPlugins: [
        remarkFrontmatter,
        [remarkMdxFrontmatter, { name: 'frontmatter' }]
      ],
    }),
    svgr({
      include: "**/*.svg?react",
      svgrOptions: {
        exportType: "default",
        ref: true,
        svgo: false,
        titleProp: true,
      },
    }),
  ],
  server: {
    port: 3000,
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          swiper: ['swiper'],
        }
      }
    }
  },
  optimizeDeps: {
    include: ['swiper', '@headlessui/react', '@heroicons/react'],
  },
})

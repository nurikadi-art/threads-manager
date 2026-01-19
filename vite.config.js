import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Base path for GitHub Pages deployment
  base: '/threads-manager/',
  build: {
    // Target modern browsers for smaller bundle
    target: 'es2020',
    // Use esbuild for minification (included with Vite)
    minify: 'esbuild',
    // Code splitting configuration
    rollupOptions: {
      output: {
        // Manual chunks for better caching
        manualChunks: {
          // Vendor chunks
          'vendor-react': ['react', 'react-dom'],
          'vendor-motion': ['framer-motion'],
          'vendor-gsap': ['gsap', '@gsap/react'],
          // Spline is heavy, separate chunk
          'vendor-spline': ['@splinetool/react-spline'],
        },
      },
    },
    // Chunk size warning limit
    chunkSizeWarningLimit: 300,
    // Enable source maps for production debugging
    sourcemap: false,
    // Asset optimization
    assetsInlineLimit: 4096,
  },
  // Optimize dependencies
  optimizeDeps: {
    include: ['react', 'react-dom', 'framer-motion'],
    // Exclude heavy deps from pre-bundling
    exclude: ['@splinetool/react-spline'],
  },
  // CSS optimization
  css: {
    devSourcemap: true,
  },
  // Performance hints
  esbuild: {
    // Remove console in production
    drop: process.env.NODE_ENV === 'production' ? ['console', 'debugger'] : [],
  },
})

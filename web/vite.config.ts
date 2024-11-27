import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'
import path from 'path';

export default defineConfig({
  plugins: [
    react(),
    ViteImageOptimizer({
      svg: {
        multipass: true,
        plugins: [
          {
            name: 'preset-default',
            params: {
              overrides: {
                removeViewBox: false,
                removeTitle: false,
              },
            },
          },
          'removeDimensions',
        ],
      },
      png: {
        quality: 80,
      },
      jpeg: {
        quality: 80,
      },
    }),
  ],
  resolve: {
    alias: {
      '@scss': path.resolve(__dirname, './src/scss'),
      '@': path.resolve(__dirname, './src')
    },
  },
  build: {
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          ui: ['@radix-ui/react-popover', '@radix-ui/react-slot'],
        },
        assetFileNames: 'assets/[name][extname]'
      }
    },
    chunkSizeWarningLimit: 1000
  }
})



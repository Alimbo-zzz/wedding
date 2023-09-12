import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import legacy from '@vitejs/plugin-legacy';

import { resolve } from 'path';
const src = resolve(__dirname, './src');

export default defineConfig({
  base: '/wedding/',
  plugins: [
    react(),
    legacy({ targets: ['IE >= 11'] }),
  ],
  server: { port: 3030 },
  build: { minify: true },
  css: {
    devSourcemap: true,
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "@/styles/vars.scss";
          @import "@/styles/mixins.scss";
        `
      }
    },
    // postcss: { plugins: [autoprefixer()] }
  },
  resolve: {
    alias: {
      '@': resolve(src),
      '@images': resolve(src, 'assets/images'),
      '@icons': resolve(src, 'assets/icons'),
      '@fonts': resolve(src, 'assets/fonts'),
    }
  }
})

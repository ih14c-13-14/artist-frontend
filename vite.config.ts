/// <reference types="vitest" />

import react from '@vitejs/plugin-react-swc';
import { visualizer } from 'rollup-plugin-visualizer';
import { defineConfig } from 'vite';
import { ViteEjsPlugin } from 'vite-plugin-ejs';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    ViteEjsPlugin({
      // TODO: https://github.com/ih14c-13-14/schema/issues/10
      apiBaseUrl: process.env.API_BASE_URL ?? 'http://127.0.0.1:4010',
    }),
    visualizer(),
    svgr(),
  ],
  define: {
    'import.meta.vitest': 'undefined',
  },
  server: {
    host: '0.0.0.0',
    port: 3000,
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: 'setup-vitest.ts',
    /**
     * for in-source testing.
     * {@link https://vitest.dev/guide/in-source.html}
     */
    includeSource: ['{src,integrationTest,docs}/**/*.{ts,tsx}'],
  },
  build: {
    rollupOptions: {
      external: ['@google/model-viewer'],
      output: {
        manualChunks: {
          mui: ['@mui/material'],
          feather: ['react-feather'],
        },
      },
    },
  },
  resolve: {
    alias: {
      '@/': `${__dirname}/src/`,
      '@root/': `${__dirname}/`,
    },
  },
  assetsInclude: ['**/*.reality', '**/*.glb'],
});

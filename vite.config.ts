/// <reference types="vitest" />

import react from '@vitejs/plugin-react-swc';
import { defineConfig, splitVendorChunkPlugin } from 'vite';
import { ViteEjsPlugin } from 'vite-plugin-ejs';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    splitVendorChunkPlugin(),
    ViteEjsPlugin({
      // TODO: https://github.com/ih14c-13-14/schema/issues/10
      apiBaseUrl: process.env.API_BASE_URL ?? 'http://127.0.0.1:4010',
    }),
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

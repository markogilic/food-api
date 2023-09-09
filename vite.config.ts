import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
   plugins: [react()],
   test: {
      globals: true,
      setupFiles: ['vitest-setup.ts'],
      environment: 'jsdom',
   },
   resolve: {
      alias: {
         src: path.resolve(__dirname, './src'),
      },
   },
});

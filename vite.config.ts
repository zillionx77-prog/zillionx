import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/zillionx/',
  build: {
    outDir: 'build'
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});

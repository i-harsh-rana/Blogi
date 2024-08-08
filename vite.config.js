import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src', // This allows using @ as an alias for /src
    },
  },
  build: {
    outDir: 'dist',
  },
});

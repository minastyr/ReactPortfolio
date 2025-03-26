import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Ensure this matches your desired output folder
  },
  server: {
    port: 3000,
    open: true
  }
});
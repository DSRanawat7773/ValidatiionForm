// vite.config.js
import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';

export default defineConfig({
  base: '/ValidatiionForm/', // Match this to your repository name
  plugins: [preact()],
  build: {
    outDir: 'dist', // Ensure this matches the deploy script
    assetsDir: 'assets', // Vite default; you can customize if needed
    sourcemap: true // Optional: for easier debugging
  }
});

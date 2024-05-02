import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import envCompatible from 'vite-plugin-env-compatible';

export default defineConfig({
  plugins: [
    react(),
    envCompatible({
      // specify the path to your .env file
      dotenvDir: './',
    }),
  ],
});

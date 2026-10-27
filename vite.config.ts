import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    port: 3000,
    open: false,
  },
  build: {
    rollupOptions: {
      input: {
        dashboard: 'index.html',
        cpgrams: 'cpgrams.html',
      },
    },
  },
});

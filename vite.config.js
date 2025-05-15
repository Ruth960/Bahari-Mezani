import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@vitejs/plugin-tailwindcss';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      external: ['@supabase/supabase-js'],
    },
  },
});
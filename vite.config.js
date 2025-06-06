import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePluginFonts } from 'vite-plugin-fonts';

export default defineConfig({
  plugins: [
    react(),
    VitePluginFonts({
      google: {
        families: [
          {
            name: 'Inter',
            styles: 'wght@400;500;600;700',
          },
        ],
      },
    }),
  ],
  base: '/The-Ultimate-Watch-Tracking-Toolkit/', // make sure this matches your GitHub repo name
});

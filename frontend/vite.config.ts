import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  css: {
    preprocessorOptions: {
      scss: {
        includePaths: ['./src/styles'],
        additionalData: `
              @import "_mixins.scss";
              @import "_variables.scss";
              @import "_colors.scss";
              @import "_typographies.scss";
            `,
      },
    },
  },
});

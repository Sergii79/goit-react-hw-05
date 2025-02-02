import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: true,
  },
});

// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';
// import path from 'path';

// export default defineConfig({
//   plugins: [react()],
//   build: {
//     sourcemap: true,
//   },
//   resolve: {
//     alias: {
//       '@components': path.resolve(__dirname, 'src/components'),
//       '@pages': path.resolve(__dirname, 'src/pages'),
//       '@services': path.resolve(__dirname, 'src/services'),
//     },
//   },
// });

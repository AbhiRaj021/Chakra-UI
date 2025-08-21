import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  root: '.',
  resolve: {
    // alias: {
    //   '@': path.resolve(__dirname, './src'),
    //   '~': path.resolve(__dirname, './src'),
    //   '@/ui': path.resolve(__dirname, './src/components/ui'),
    //   '@/examples': path.resolve(__dirname, './src/examples'),
    // },
  },
  build: {
    outDir: 'dist',
  },
  server: {
    port: 3000,
    open: true,
  },
})

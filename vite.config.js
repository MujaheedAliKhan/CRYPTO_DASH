import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // we can changes here only it build with our credentials what we have given like
  // build: {
  //   outDir: 'build',
  //   minify: false, // it doesn't minify the code
  //   assetsDir: 'assets2'
  // }
})

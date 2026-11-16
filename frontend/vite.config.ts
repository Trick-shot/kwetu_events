import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
// Default base '/' for the VPS (Nginx at domain root).
// Preview/static builds set VITE_BASE=./ so assets resolve on any path.
export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_BASE || '/',
})

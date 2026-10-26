// vite.config.ts - Vite configuration file for the project
// vite is a fast build tool and development server for modern web projects.
// This configuration file sets up Vite with the necessary plugins and options for the project.
// It converts modern JavaScript and TypeScript code into a format that can be efficiently executed by the browser.

import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})

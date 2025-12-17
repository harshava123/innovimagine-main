import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'
import { visualizer } from 'rollup-plugin-visualizer'
import glsl from 'vite-plugin-glsl'

export default defineConfig({
  plugins: [
    react(),

    // ✅ ADD THIS
    glsl(),

    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: [
        'grah.png',
        'robots.txt'
      ],
      manifest: {
        name: 'Grahmind',
        short_name: 'Grahmind',
        description: 'Premium modern web solutions',
        theme_color: '#111827',
        background_color: '#111827',
        display: 'standalone',
        start_url: '/',
        icons: [
          {
            src: 'grah.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'grah.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      },
      workbox: {
        maximumFileSizeToCacheInBytes: 5000000
      }
    }),

    visualizer({ open: false })
  ],
})

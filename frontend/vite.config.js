import react from '@vitejs/plugin-react'
import { defineConfig, loadEnv } from 'vite'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '')

  return {
    plugins: [react()],
    server: {
      proxy: {
        // Browser calls /api/solar/..., Vite forwards to the API and adds the key.
        '/api/solar': {
          target: 'https://api.le-systeme-solaire.net',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api\/solar/, '/rest'),
          headers: { Authorization: `Bearer ${env.SOLAR_KEY}` },
        },
      },
    },
  }
})

import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  return {
    plugins: [
      vue()
    ],
    resolve: {
      alias: [{ find: '@', replacement: path.resolve(__dirname, './src') }]
    },
    server: {
      host: '0.0.0.0',
      port: 8080,
      open: true,
      cors: true,
      proxy: {
        '/api': {
          target: env.VITE_API_BASE_URL,
          rewrite: (path) => path.replace(/^\/api/, ''),
          changeOrigin: true
        }
      }
    }
  }
})

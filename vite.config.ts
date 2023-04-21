import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import vueJsx from '@vitejs/plugin-vue-jsx'

function pathResolve(dir: string) {
  return resolve(process.cwd(), './', dir)
}
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: {
      '@views': pathResolve('./src/views'),
      '@': pathResolve('./src'),
    }
  }
})

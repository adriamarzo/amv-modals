import { defineConfig } from 'vite'
import { resolve } from 'path'
import react from '@vitejs/plugin-react-swc'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'amv-modals',
      fileName: 'amv-modals'
    },
    rollupOptions: {
      external: ['react', 'react-dom']
    }
  },
  plugins: [react(), dts({ exclude: ['./src/stories'] })]
})

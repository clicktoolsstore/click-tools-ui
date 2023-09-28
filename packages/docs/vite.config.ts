import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import svgr from 'vite-plugin-svgr'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr({ svgrOptions: { icon: true } })],
  resolve: {
    alias: [{ find: '~/', replacement: path.resolve(__dirname, 'src/') }],
  },
})

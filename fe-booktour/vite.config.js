import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 1000, // Thay đổi cổng thành 4000 hoặc bất kỳ cổng nào bạn muốn
  },
})

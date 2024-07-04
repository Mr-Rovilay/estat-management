import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      // Proxy API requests to the backend server
      "/api": {
        target: "https://estate-management.onrender.com",
        secure: false, // If the backend is using a self-signed certificate, set this to false
        changeOrigin: true, // Change the origin of the host header to the target URL
      },
    },
  },
  plugins: [react()],
});

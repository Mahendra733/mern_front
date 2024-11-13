import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api/": "https://mern-back-63eo.onrender.com/",
      "/uploads/": "https://mern-back-63eo.onrender.com/",
    },
  },
});

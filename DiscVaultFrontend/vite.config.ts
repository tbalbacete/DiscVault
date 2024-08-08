import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import replace from "@rollup/plugin-replace";
import svgrPlugin from "vite-plugin-svgr";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  envPrefix: "REACT_APP_",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["setupTests.ts"],
    coverage: {
      provider: "v8",
      reporter: ["clover", "cobertura", "lcov", "text", "json"],
    },
  },
  plugins: [
    react(),
    replace({
      __VERSION__: new Date().getTime().toString(),
    }),
    svgrPlugin({
      svgrOptions: {
        icon: true,
        // ...svgr options (https://react-svgr.com/docs/options/)
      },
    }),
  ],
  define: {
    "process.env": process.env,
  },
  server: {
    port: 3000,
    proxy: {
      "/api": {
        target: "https://5ramxhs401.execute-api.us-east-1.amazonaws.com",
        changeOrigin: true,
      },
    },
  },
});

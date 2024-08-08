/** @type { import('@storybook/react-vite').StorybookConfig } */
import type { StorybookConfig } from "@storybook/react-vite";
import path from "path";

const config: StorybookConfig = {
  stories: ["../**/*.mdx", "../**/*.@(stories|story).@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-controls",
    "@storybook/addon-docs",
    "storybook-dark-mode",
    "storybook-addon-designs",
    "storybook-addon-react-router-v6",
    "@storybook/addon-a11y",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  core: {
    builder: "@storybook/builder-vite", // 👈 The builder enabled here.
  },
  async viteFinal(config) {
    return {
      ...config,
      resolve: {
        alias: {
          "@": path.resolve(__dirname, "../../../../src"),
        },
      },
      define: {
        "process.env": process.env, // Polyfill for process.env
      },
    };
  },
};
export default config;

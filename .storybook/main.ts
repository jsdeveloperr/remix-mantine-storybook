import type { StorybookConfig } from "@storybook/react-vite";
import { mergeConfig } from "vite";
import baseViteConfig from "../vite.config";

const config: StorybookConfig = {
  stories: [
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)",
    "../app/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  async viteFinal(config) {
    return mergeConfig(config, {
      ...baseViteConfig,
      // @ts-ignore
      plugins: baseViteConfig.plugins.filter((plugin) => {
      // @ts-ignore
        if (plugin && plugin.name === "vite:react-babel") {
          return false;
        }
        return true;
      }),
    });
  },
};

export default config;

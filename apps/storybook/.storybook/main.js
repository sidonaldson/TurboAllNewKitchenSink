const path = require("path");
module.exports = {
  stories: ["../stories/**/*.stories.*", "../../../packages/**/*.stories.*"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-mdx-gfm",
  ],
  framework: "@storybook/react-vite",
  core: {
    builder: "@storybook/builder-vite",
  },

  async viteFinal(config, { configType }) {
    // customize the Vite config here
    return {
      ...config,
      resolve: {
        alias: [
          {
            find: "@ui",
            replacement: path.resolve(__dirname, "../../../packages/ui/"),
          },
        ],
      },
    };
  },
  docs: {
    autodocs: true,
  },
};

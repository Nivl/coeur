const path = require("path");

const config = {
  stories: ["../../../packages/coeur-core/src/**/*.stories.tsx", "../../../packages/coeur-core/src/**/*.stories.mdx"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  framework: { name: '@storybook/react-vite' },
  core: {
    builder: "@storybook/builder-vite"
  },
  async viteFinal(config, {
    configType
  }) {
    return {
      ...config,
      resolve: {
        alias: [{
          find: "@coeur/core",
          replacement: path.resolve(__dirname, "../../../packages/coeur-core/")
        }]
      },
      // https://github.com/storybookjs/storybook/issues/18920#issuecomment-1342865124
      define: { 'process.env': {} }
    };
  },
  docs: {
    autodocs: true
  }
};

export default config;

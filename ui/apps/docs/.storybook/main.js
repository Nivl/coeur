const path = require("path");

module.exports = {
  stories: [
    "../../../packages/coeur-core/src/**/*.stories.tsx",
    "../../../packages/coeur-core/src/**/*.stories.mdx"
  ],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  framework: "@storybook/react",
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
            find: "@coeur/core",
            replacement: path.resolve(
              __dirname,
              "../../../packages/coeur-core/"
            ),
          },
        ],
      },
    };
  },
};

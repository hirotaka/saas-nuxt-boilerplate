import type { StorybookConfig } from "@storybook-vue/nuxt"

const config: StorybookConfig = {
  stories: [
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-links",
  ],
  framework: {
    name: "@storybook-vue/nuxt",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
}
export default config

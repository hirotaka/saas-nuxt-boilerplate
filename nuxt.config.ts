// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-08-03",
  devtools: { enabled: true },
  modules: ["@nuxt/eslint", "@nuxtjs/storybook"],
  vite: {
    optimizeDeps: {
      include: ["jsdoc-type-pratt-parser"],
    },
  },
  storybook: {
    // Very verbose logs for debugging
    logLevel: Number.POSITIVE_INFINITY,
  },
})


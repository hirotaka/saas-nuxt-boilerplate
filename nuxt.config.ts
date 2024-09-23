// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-08-03",
  srcDir: "app",
  devtools: { enabled: true },
  modules: ["@nuxt/eslint", "@nuxtjs/storybook", "@nuxtjs/tailwindcss"],
  vite: {
    optimizeDeps: {
      include: ["jsdoc-type-pratt-parser"],
    },
  },
})


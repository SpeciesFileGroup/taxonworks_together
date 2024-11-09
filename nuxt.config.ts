// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    baseURL: '/2024'
  },
  modules: ['@nuxtjs/google-fonts', '@nuxt/content', '@nuxtjs/tailwindcss'],
  googleFonts: {
    families: {
      Lato: true,
      Hind: true
    }
  },
  nitro: {
    static: true,
    prerender: {
      failOnError: true
    }
  }
})

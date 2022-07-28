import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  typescript: {
    shim: false,
  },
  modules: [
    '@nuxt/image-edge',
    'bootstrap-vue/nuxt',
    '@nuxtjs/strapi',
  ],
  strapi: {
    url: process.env.API_URL
  },
  css:[
    '~/assets/sass/main.scss',
  ],
  target: 'static',
  image: {
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
      '2xl': 1536
    },
    dir: 'assets/images'
  },
  router: {
    middleware: ['default']
  },
  publicRuntimeConfig: {
    DEFAULT_LANGUAGE: process.env.DEFAULT_LANGUAGE
  },
})

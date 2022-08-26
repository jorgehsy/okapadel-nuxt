import { defineNuxtConfig } from 'nuxt'

const productionUrl = process.env.SITE_URL
const siteName = 'Okapadel'

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
    DEFAULT_LANGUAGE: process.env.DEFAULT_LANGUAGE,
    SITE_URL: process.env.SITE_URL,
  },
  build: {
    extractCSS: true
  },
  buildModules: [
    ['@nuxt-modules/compression', {
      algorithm: 'brotliCompress'
    }]
  ],
  meta: {
    title: siteName,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
    link: [
      {rel: 'icon', type: 'image/png', href: '/favicon-32x32.png'},
      {rel: 'shortcut icon', href: '/favicon.ico'}
    ],
    htmlAttrs: {
      'lang': 'es',
      'data-theme': 'light' // https://daisyui.com/docs/default-themes
    }
  },
})

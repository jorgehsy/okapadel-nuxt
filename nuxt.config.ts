import { defineNuxtConfig } from 'nuxt'

const productionUrl = process.env.SITE_URL
const siteName = 'Okapadel home page'
const siteShortName = 'Okapadel'
const siteDescription = 'Okapadel site description'
const twitterUser = '@okapadel'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
ssr:false,
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
  meta: {
    title: siteName,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      // required theme-color: pwa
      { name: 'theme-color', content: '#f69435' },
      { name: 'format-detection', content: 'telephone=no' },
      // OG Social Media Cards
      { hid: 'description', name: 'description', content: siteDescription },
      { property: 'og:site_name', content: siteName },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: `https://${productionUrl}` },
      { hid: 'og:title', property: 'og:title', content: siteName },
      { hid: 'og:description', property: 'og:description', content: siteDescription },
      { hid: 'og:image', property: 'og:image', content: `https://${productionUrl}/OG-card.png` },
      { property: 'og:image:width', content: '740' },
      { property: 'og:image:height', content: '300' },
      { name: 'twitter:site', content: twitterUser },
      { name: 'twitter:card', content: 'summary_large_image' },
      { hid: 'twitter:url', name: 'twitter:url', content: `https://${productionUrl}` },
      { hid: 'twitter:title', name: 'twitter:title', content: siteName },
      { hid: 'twitter:description', name: 'twitter:description', content: siteDescription },
      { hid: 'twitter:image', name: 'twitter:image', content: `https://${productionUrl}/OG-card.png`}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
    ],
    htmlAttrs: {
      'lang': 'es',
      'data-theme': 'light' // https://daisyui.com/docs/default-themes
    }
  },
})

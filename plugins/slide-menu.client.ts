import { Slide } from 'vue-burger-menu'

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.use(Slide);
})
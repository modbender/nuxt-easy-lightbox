import VueEasyLightbox from 'vue-easy-lightbox'

import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin((_nuxtApp) => {
  _nuxtApp.vueApp.use(VueEasyLightbox)
})

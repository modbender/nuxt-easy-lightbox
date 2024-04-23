import { defineNuxtPlugin } from "#app";

import VueEasyLightbox from "vue-easy-lightbox";

export default defineNuxtPlugin((_nuxtApp) => {
  _nuxtApp.vueApp.use(VueEasyLightbox);
});

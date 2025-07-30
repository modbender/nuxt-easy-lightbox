export const ModuleOptions = object

declare module 'nuxt-splide' {
  interface NuxtConfig {
    easyLightbox?: ModuleOptions
  }

  interface NuxtOptions {
    easyLightbox?: ModuleOptions
  }
}

export type ModuleOptions = Record<string, never>

declare module 'nuxt-easy-lightbox' {
  interface NuxtConfig {
    easyLightbox?: ModuleOptions
  }

  interface NuxtOptions {
    easyLightbox?: ModuleOptions
  }
}

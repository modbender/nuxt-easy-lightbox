export interface ModuleOptions {}

declare module "nuxt-splide" {
  interface NuxtConfig {
    easyLightbox?: ModuleOptions;
  }

  interface NuxtOptions {
    easyLightbox?: ModuleOptions;
  }
}

<h1 align="center">
Nuxt Easy Lightbox
</h1>

<p align="center">
<a href="https://npmjs.com/package/nuxt-easy-lightbox"><img src="https://img.shields.io/npm/v/nuxt-easy-lightbox/latest.svg?style=flat&colorA=020420&colorB=00DC82" alt="Nuxt Splide - NPM Package" /></a>
<a href="https://npmjs.com/package/nuxt-easy-lightbox"><img src="https://img.shields.io/npm/dm/nuxt-easy-lightbox.svg?style=flat&colorA=020420&colorB=00DC82" alt="Nuxt Splide - NPM Package Downloads" /></a>
<a href="https://npmjs.com/package/nuxt-easy-lightbox"><img src="https://img.shields.io/npm/l/nuxt-easy-lightbox.svg?style=flat&colorA=020420&" alt="Nuxt Splide License" /></a>
<a href="https://nuxt.com"><img src="https://img.shields.io/badge/Nuxt-020420?logo=nuxt.js" alt="Nuxt Splide - Nuxt" /></a>
</p>

<p align="center">
A simple Vue.js 3.0 image lightbox component with Zoom / Drag / Rotate / Switch.
</p>

![Nuxt Easy Lightbox](./.github/VueEasyLightbox.gif)

- [✨ &nbsp;Release Notes](/CHANGELOG.md)
- [🏀 Online playground](https://stackblitz.com/github/modbender/nuxt-easy-lightbox?file=playground%2Fapp.vue)
- [📖 &nbsp;Documentation](https://github.com/XiongAmao/vue-easy-lightbox)

## Features

- 🪶 &nbsp;Lightweight, Fast Loading
- ❤️ &nbsp;Easy to Use with Lots of Features
- 🖼️ &nbsp;Image Slider in Lightbox

## Quick Setup

1. Install the module to your Nuxt application with one command:

    ```bash
    npx nuxi module add easy-lightbox
    ```

2. Add module to `nuxt.config.ts`
  
    ```js
    export default defineNuxtConfig({
      modules: ['nuxt-easy-lightbox'],
    })
    ```

3. Next use the component `VueEasyLightbox` right next to image element for which you want to use lightbox.

    ```xml
    <template>
      <div>
        <div
          v-for="(src, index) in imgs"
          :key="index"
          class="pic"
          @click="() => showImg(index)"
        >
          <img :src="src" />
        </div>
        <VueEasyLightbox
          :visible="visibleRef"
          :imgs="imgs"
          :index="indexRef"
          @hide="onHide"
        />
      </div>
    </template>

    <script setup>
    const visibleRef = ref(false);
    const indexRef = ref(0);

    const imgs = [
      "https://via.placeholder.com/450.png/",
      "https://via.placeholder.com/300.png/",
      "https://via.placeholder.com/150.png/",
      { src: "https://via.placeholder.com/450.png/", title: "this is title" },
    ];

    const showImg = (index) => {
      indexRef.value = index;
      visibleRef.value = true;
    };
    const onHide = () => (visibleRef.value = false);
    </script>
    ```
  
  Remember 
  - For group of images you need only a single `VueEasyLightbox` since they can be viewed through slider. Put all the images in an Array and pass it to `imgs` argument.
  - For individual images, for each `img` element you need individual lighbox.

That's it! You can now use Easy Lightbox in your Nuxt app ✨


## Contribution

<details>
  <summary>Local development</summary>
  
  ```bash
  # Install dependencies
  pnpm install
  
  # Generate type stubs
  pnpm dev:prepare
  
  # Develop with the playground
  pnpm dev
  
  # Build the playground
  pnpm dev:build
  
  # Run ESLint
  pnpm lint
  
  # Run Vitest
  pnpm test
  pnpm test:watch
  
  # Release new version
  npm run release
  ```

</details>

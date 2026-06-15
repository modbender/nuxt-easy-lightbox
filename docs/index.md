---
title: Nuxt Easy Lightbox
description: A Nuxt module that drops a ready-to-use image lightbox into your Nuxt 3 or Nuxt 4 app — zoom, drag, rotate, and swipe between images, with zero setup.
sidebar:
  order: 1
---

Adding an image lightbox to a Nuxt app usually means installing a library, registering a plugin, and remembering to import its stylesheet. Nuxt Easy Lightbox does all of that for you.

It's a thin Nuxt wrapper around the excellent [vue-easy-lightbox](https://github.com/XiongAmao/vue-easy-lightbox) component. Install the module and a globally available `<VueEasyLightbox />` component is registered, its stylesheet is injected, and the package is transpiled for SSR — so it just works in Nuxt. No plugin wiring, no manual CSS import.

## Key features

- **Easy integration** — install the module and start using `<VueEasyLightbox />` anywhere. No plugin setup, no imports.
- **Zoom / drag / rotate / swipe** — the underlying component supports pinch-zoom, drag-to-pan, rotation, and swiping between images out of the box.
- **Image slider** — pass an array of images and users can move through them with previous/next controls or swipe gestures, all inside one lightbox.
- **SSR-safe** — the component is auto-transpiled and its CSS is injected, so there's no flash of unstyled content and no hydration surprises.
- **Nuxt 3 + Nuxt 4** — a single install supports both major versions.

## A 30-second taste

Install the module:

```bash
npx nuxi@latest module add nuxt-easy-lightbox
```

Then use `<VueEasyLightbox />` next to the images you want to open:

```vue
<script setup lang="ts">
const visible = ref(false)
const index = ref(0)

const imgs = [
  'https://images.placeholders.dev/450',
  'https://images.placeholders.dev/350',
  { src: 'https://images.placeholders.dev/150', title: 'A captioned image' },
]

function show(i: number) {
  index.value = i
  visible.value = true
}
</script>

<template>
  <div>
    <img
      v-for="(src, i) in imgs"
      :key="i"
      :src="typeof src === 'string' ? src : src.src"
      @click="show(i)"
    >

    <VueEasyLightbox
      :visible="visible"
      :imgs="imgs"
      :index="index"
      @hide="visible = false"
    />
  </div>
</template>
```

That's the whole thing. `<VueEasyLightbox />` is registered globally — no manual import needed.

## Compatibility

| | Supported |
| --- | --- |
| Nuxt Easy Lightbox | 1.x |
| Nuxt | 3.x and 4.x |
| Vue | 3 |

:::tip
Nuxt Easy Lightbox 1.x supports both Nuxt 3 and Nuxt 4 from the same package — there's nothing extra to configure when you upgrade Nuxt.
:::

## Where to next

- [Installation](/nuxt-easy-lightbox/installation/) — add the module to your Nuxt app.
- [Usage](/nuxt-easy-lightbox/usage/) — control visibility, pass images, and listen to events.
- [Configuration](/nuxt-easy-lightbox/configuration/) — every component prop, event, and slot.

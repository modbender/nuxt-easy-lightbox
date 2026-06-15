---
title: Image Gallery
description: A clickable thumbnail grid backed by a single lightbox — open at the clicked image and let users swipe through the rest.
sidebar:
  order: 2
---

For a set of images, use **one** lightbox and pass the whole array to `imgs`. Clicking a thumbnail opens the lightbox at that image, and users can page or swipe through the rest.

## Full gallery

```vue
<!-- pages/gallery.vue -->
<script setup lang="ts">
const visible = ref(false)
const index = ref(0)

const imgs = [
  'https://images.placeholders.dev/450',
  'https://images.placeholders.dev/350',
  'https://images.placeholders.dev/250',
  'https://images.placeholders.dev/150',
]

function show(i: number) {
  index.value = i
  visible.value = true
}
</script>

<template>
  <div class="gallery">
    <img
      v-for="(src, i) in imgs"
      :key="i"
      :src="src"
      width="120"
      style="cursor: pointer"
      @click="show(i)"
    >
  </div>

  <VueEasyLightbox
    :visible="visible"
    :imgs="imgs"
    :index="index"
    @hide="visible = false"
  />
</template>

<style scoped>
.gallery {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
</style>
```

The `index` ref tells the lightbox which image to open first; setting it in `show(i)` makes the clicked thumbnail the starting slide.

## Captions per image

Mix plain URLs with `{ src, title }` objects to caption only some images:

```vue
<script setup lang="ts">
const imgs = [
  { src: 'https://images.placeholders.dev/450', title: 'First' },
  'https://images.placeholders.dev/350',
  { src: 'https://images.placeholders.dev/250', title: 'Third', alt: 'placeholder' },
]
</script>
```

## Loop and disable scroll

Enable continuous looping past the last image, and keep the page from scrolling behind the overlay (the latter is on by default):

```vue
<template>
  <VueEasyLightbox
    :visible="visible"
    :imgs="imgs"
    :index="index"
    loop
    :scroll-disabled="true"
    @hide="visible = false"
  />
</template>
```

:::tip
Keep the index ref in sync as users navigate by handling `@on-index-change` — useful if you want to highlight the active thumbnail while the lightbox is open.
:::

:::caution
Don't render one `<VueEasyLightbox />` per thumbnail for a gallery — that creates many overlapping overlays. A single lightbox plus the `imgs` array is all you need.
:::

## Next steps

- [Custom Buttons](/nuxt-easy-lightbox/examples/custom-buttons/) — replace the prev/next/close controls and toolbar.
- [Configuration](/nuxt-easy-lightbox/configuration/) — every prop and event.

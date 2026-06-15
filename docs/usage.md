---
title: Usage
description: Show and hide the lightbox, pass single or multiple images, build a clickable gallery, and react to events like prev/next and index changes.
sidebar:
  order: 3
---

You drive the lightbox with three props — `visible`, `imgs`, and `index` — and the `@hide` event. The component renders a full-screen overlay only when `visible` is `true`, so it costs nothing while closed.

## Show and hide

Bind `visible` to a reactive value. Set it to `true` to open the lightbox and listen to `@hide` to close it (the user can close by clicking the mask, the close button, or pressing <kbd>Esc</kbd>):

```vue
<script setup lang="ts">
const visible = ref(false)
</script>

<template>
  <button @click="visible = true">Open lightbox</button>

  <VueEasyLightbox
    :visible="visible"
    imgs="https://images.placeholders.dev/450"
    @hide="visible = false"
  />
</template>
```

:::caution
`@hide` is the only thing that closes the lightbox. The component does **not** mutate `visible` itself — you must set it back to `false` in the handler, or it will never close.
:::

## Passing images

The `imgs` prop is flexible. It accepts:

- a single URL string,
- an array of URL strings,
- an object `{ src, title?, alt? }`,
- or an array mixing strings and objects.

```vue
<script setup lang="ts">
const imgs = [
  'https://images.placeholders.dev/450',
  'https://images.placeholders.dev/350',
  { src: 'https://images.placeholders.dev/150', title: 'A captioned image', alt: 'placeholder' },
]
</script>
```

When `imgs` is an array, the lightbox shows previous/next controls and supports swiping between images. The `index` prop selects which one opens first.

## A clickable gallery

The most common pattern: a grid of thumbnails that opens the lightbox at the clicked image. You need only **one** `<VueEasyLightbox />` for the whole gallery — the array of images becomes the slider.

```vue
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
```

:::tip
For a group of images use a **single** lightbox and pass the whole array to `imgs` — users browse them via the slider. Use one lightbox per image only if each must open in complete isolation.
:::

## Reacting to events

The component emits events as the user navigates. The navigation events provide the previous and new index:

```vue
<script setup lang="ts">
const visible = ref(false)
const index = ref(0)
const imgs = [
  'https://images.placeholders.dev/450',
  'https://images.placeholders.dev/350',
]

function onIndexChange(oldIndex: number, newIndex: number) {
  console.log(`moved from ${oldIndex} to ${newIndex}`)
  index.value = newIndex
}
</script>

<template>
  <VueEasyLightbox
    :visible="visible"
    :imgs="imgs"
    :index="index"
    @hide="visible = false"
    @on-index-change="onIndexChange"
    @on-error="(e) => console.warn('image failed to load', e)"
  />
</template>
```

See [Configuration](/nuxt-easy-lightbox/configuration/) for the complete list of events.

## Next steps

- [Configuration](/nuxt-easy-lightbox/configuration/) — all props, events, and slots.
- [Examples](/nuxt-easy-lightbox/examples/single-image/) — copy-paste, end-to-end recipes.

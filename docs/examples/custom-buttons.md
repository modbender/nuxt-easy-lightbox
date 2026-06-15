---
title: Custom Buttons
description: Replace the lightbox controls with your own — custom prev/next/close buttons, a custom toolbar with zoom and rotate, and custom loading and error states via slots.
sidebar:
  order: 3
---

Every control in the lightbox is a scoped slot, so you can swap the defaults for buttons that match your design. Each slot hands you the method to call.

## Custom navigation and close buttons

The `prev-btn`, `next-btn`, and `close-btn` slots expose `prev`, `next`, and `close` respectively:

```vue
<script setup lang="ts">
const visible = ref(false)
const index = ref(0)
const imgs = [
  'https://images.placeholders.dev/450',
  'https://images.placeholders.dev/350',
  'https://images.placeholders.dev/250',
]
</script>

<template>
  <button @click="visible = true">Open</button>

  <VueEasyLightbox
    :visible="visible"
    :imgs="imgs"
    :index="index"
    @hide="visible = false"
  >
    <template #prev-btn="{ prev }">
      <button class="nav nav--prev" @click="prev">‹ Prev</button>
    </template>

    <template #next-btn="{ next }">
      <button class="nav nav--next" @click="next">Next ›</button>
    </template>

    <template #close-btn="{ close }">
      <button class="nav nav--close" @click="close">✕</button>
    </template>
  </VueEasyLightbox>
</template>
```

## Custom toolbar

The `toolbar` slot gives you `toolbarMethods` with `zoomIn`, `zoomOut`, `rotate`, `rotateLeft`, and `rotateRight`:

```vue
<template>
  <VueEasyLightbox
    :visible="visible"
    :imgs="imgs"
    @hide="visible = false"
  >
    <template #toolbar="{ toolbarMethods }">
      <div class="toolbar">
        <button @click="toolbarMethods.zoomIn">＋</button>
        <button @click="toolbarMethods.zoomOut">－</button>
        <button @click="toolbarMethods.rotateLeft">↺</button>
        <button @click="toolbarMethods.rotateRight">↻</button>
      </div>
    </template>
  </VueEasyLightbox>
</template>
```

## Custom loading and error states

Use the `loading` and `onerror` slots to brand the in-between states:

```vue
<template>
  <VueEasyLightbox
    :visible="visible"
    :imgs="imgs"
    @hide="visible = false"
  >
    <template #loading>
      <div class="loader">Loading image…</div>
    </template>

    <template #onerror>
      <div class="error">This image couldn't be loaded.</div>
    </template>
  </VueEasyLightbox>
</template>
```

:::tip
You can disable interactions you don't want instead of styling them away — for example `:rotate-disabled="true"` to hide rotation entirely, or `:zoom-disabled="true"` to lock the zoom level. See [Configuration](/nuxt-easy-lightbox/configuration/).
:::

## Next steps

- [Configuration](/nuxt-easy-lightbox/configuration/) — the full slot, prop, and event reference.
- [Image Gallery](/nuxt-easy-lightbox/examples/gallery/) — wire these controls into a multi-image gallery.

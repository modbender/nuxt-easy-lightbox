---
title: Single Image
description: The smallest complete setup — open one image in a lightbox from a button or thumbnail click.
sidebar:
  order: 1
---

The minimal case: a single image opened in the lightbox. You need just `visible` and `imgs`, plus the `@hide` handler to close it.

## From a button

```vue
<!-- pages/index.vue -->
<script setup lang="ts">
const visible = ref(false)
</script>

<template>
  <button @click="visible = true">View image</button>

  <VueEasyLightbox
    :visible="visible"
    imgs="https://images.placeholders.dev/800"
    @hide="visible = false"
  />
</template>
```

## From a thumbnail

A common variation is clicking the image itself to open a larger version:

```vue
<!-- pages/index.vue -->
<script setup lang="ts">
const visible = ref(false)
const src = 'https://images.placeholders.dev/800'
</script>

<template>
  <img
    :src="src"
    width="200"
    style="cursor: pointer"
    @click="visible = true"
  >

  <VueEasyLightbox
    :visible="visible"
    :imgs="src"
    @hide="visible = false"
  />
</template>
```

## With a caption

Pass an object instead of a string to add a title shown in the lightbox:

```vue
<script setup lang="ts">
const visible = ref(false)
const img = {
  src: 'https://images.placeholders.dev/800',
  title: 'Sunset over the bay',
  alt: 'A placeholder image',
}
</script>

<template>
  <button @click="visible = true">View image</button>

  <VueEasyLightbox
    :visible="visible"
    :imgs="img"
    @hide="visible = false"
  />
</template>
```

:::tip
`<VueEasyLightbox />` renders nothing until `visible` becomes `true`, so it's cheap to leave in your template permanently.
:::

## Next steps

- [Image Gallery](/nuxt-easy-lightbox/examples/gallery/) — multiple images behind one lightbox.
- [Custom Buttons](/nuxt-easy-lightbox/examples/custom-buttons/) — swap the controls for your own.

---
title: Configuration
description: The complete VueEasyLightbox reference — every prop (zoom, rotate, swipe, loop, teleport, RTL), every event, and every slot for custom buttons, toolbar, loading, and error states.
sidebar:
  order: 4
---

Nuxt Easy Lightbox configures behaviour through props on the `<VueEasyLightbox />` component, not through `nuxt.config.ts`. The module's only job is to register the component and inject its CSS — everything below is set per usage.

## Props

`visible` and `imgs` are the only required props; everything else is optional.

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `visible` | `boolean` | — | **Required.** Controls whether the lightbox is shown. |
| `imgs` | `string \| string[] \| ImgObject \| ImgObject[]` | — | **Required.** Image(s) to display. A string URL, an `{ src, title?, alt? }` object, or an array mixing both. |
| `index` | `number` | `0` | Index of the image to open first when `imgs` is an array. |
| `loop` | `boolean` | `false` | Enable continuous looping when paging past the first/last image. |
| `scrollDisabled` | `boolean` | `true` | Disable page scrolling while the lightbox is open. |
| `escDisabled` | `boolean` | `false` | Disable closing the lightbox with the <kbd>Esc</kbd> key. |
| `moveDisabled` | `boolean` | `false` | Disable drag-to-pan (enables swipe instead). |
| `rotateDisabled` | `boolean` | `false` | Disable image rotation. |
| `zoomDisabled` | `boolean` | `false` | Disable zooming. |
| `pinchDisabled` | `boolean` | `false` | Disable pinch-to-zoom on touch devices. |
| `maskClosable` | `boolean` | `true` | Allow clicking the backdrop mask to close the lightbox. |
| `dblclickDisabled` | `boolean` | `false` | Disable double-click (double-tap) to zoom in/out. |
| `teleport` | `string \| Element` | — | Target node to teleport the lightbox into (CSS selector or element). |
| `swipeTolerance` | `number` | `50` | Pixels the user must swipe before paging to the next/previous image. |
| `zoomScale` | `number` | `0.12` | Step size between zoom levels. |
| `maxZoom` | `number` | `3` | Maximum zoom level. |
| `minZoom` | `number` | `0.1` | Minimum zoom level. |
| `rtl` | `boolean` | `false` | Enable right-to-left layout for RTL languages. |

The `ImgObject` shape:

```ts
interface ImgObject {
  src: string
  title?: string
  alt?: string
}
```

## Events

| Event | Payload | Description |
| --- | --- | --- |
| `hide` | — | Emitted when the user closes the lightbox (mask click, close button, or <kbd>Esc</kbd>). Set `visible` to `false` here. |
| `on-error` | `Event` | Emitted when an image fails to load. |
| `on-prev` / `on-prev-click` | `(oldIndex, newIndex)` | Emitted when the previous control is used or the user swipes to the previous image. |
| `on-next` / `on-next-click` | `(oldIndex, newIndex)` | Emitted when the next control is used or the user swipes to the next image. |
| `on-index-change` | `(oldIndex, newIndex)` | Emitted whenever the displayed image index changes. |
| `on-rotate` | `(deg: number)` | Emitted when the image is rotated, with the new clockwise angle. |

:::caution
The component is uncontrolled with respect to `visible` — it never changes the prop for you. Always set `visible = false` inside your `@hide` handler, or the lightbox stays open.
:::

## Slots

Every visual control can be replaced with a scoped slot.

| Slot | Slot props | Description |
| --- | --- | --- |
| `prev-btn` | `{ prev }` | Custom "previous image" button. Call `prev()` to go back. |
| `next-btn` | `{ next }` | Custom "next image" button. Call `next()` to advance. |
| `close-btn` | `{ close }` | Custom close button. Call `close()` to dismiss. |
| `toolbar` | `{ toolbarMethods }` | Custom toolbar. `toolbarMethods` exposes `zoomIn`, `zoomOut`, `rotate`, `rotateLeft`, `rotateRight`. |
| `loading` | — | Custom loading indicator shown while an image loads. |
| `onerror` | — | Custom placeholder shown when an image fails to load. |

### Custom toolbar example

```vue
<template>
  <VueEasyLightbox
    :visible="visible"
    :imgs="imgs"
    @hide="visible = false"
  >
    <template #toolbar="{ toolbarMethods }">
      <div class="my-toolbar">
        <button @click="toolbarMethods.zoomIn">Zoom in</button>
        <button @click="toolbarMethods.zoomOut">Zoom out</button>
        <button @click="toolbarMethods.rotateLeft">Rotate left</button>
        <button @click="toolbarMethods.rotateRight">Rotate right</button>
      </div>
    </template>
  </VueEasyLightbox>
</template>
```

:::tip
Need the lightbox to render outside a clipped/overflow-hidden container? Use the `teleport` prop (for example `teleport="body"`) to mount it elsewhere in the DOM.
:::

## See also

- [Single Image](/nuxt-easy-lightbox/examples/single-image/) — the minimal one-image setup.
- [Image Gallery](/nuxt-easy-lightbox/examples/gallery/) — a clickable grid backed by one lightbox.
- [Custom Buttons](/nuxt-easy-lightbox/examples/custom-buttons/) — replace the controls with your own.

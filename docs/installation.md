---
title: Installation
description: Install Nuxt Easy Lightbox and register it in nuxt.config so the VueEasyLightbox component is available everywhere.
sidebar:
  order: 2
---

Getting Nuxt Easy Lightbox running is a single step: add the module. Once it's registered, the `<VueEasyLightbox />` component is available globally in every component, and its stylesheet is injected for you.

## Add the module

The quickest way is the Nuxt CLI, which installs the package and adds it to your `nuxt.config` for you:

```bash
npx nuxi@latest module add nuxt-easy-lightbox
```

### Manual install

If you'd rather install it by hand, add the package with your preferred package manager:

```bash
# pnpm
pnpm add nuxt-easy-lightbox
```

```bash
# npm
npm install nuxt-easy-lightbox
```

```bash
# yarn
yarn add nuxt-easy-lightbox
```

Then add `'nuxt-easy-lightbox'` to the `modules` array in `nuxt.config.ts`:

```ts
export default defineNuxtConfig({
  modules: ['nuxt-easy-lightbox'],
})
```

## No CSS import needed

You don't have to import any stylesheet. The module automatically adds `vue-easy-lightbox`'s CSS to your app and transpiles the package for SSR, so the lightbox is styled correctly the moment you use it.

:::tip
`<VueEasyLightbox />` is registered as a global component, so you can drop it into any template without importing it.
:::

## Next steps

- [Usage](/nuxt-easy-lightbox/usage/) — show the lightbox, pass images, and handle events.
- [Configuration](/nuxt-easy-lightbox/configuration/) — the full prop, event, and slot reference.

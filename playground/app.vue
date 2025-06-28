<template>
  <div>
    <div
      v-for="(src, index) in imgs"
      :key="index"
      class="pic"
      @click="() => showImg(index)"
    >
      <img :src="src">
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
const visibleRef = ref(false)
const indexRef = ref(0)

const imgs = [
  'https://images.placeholders.dev/450',
  'https://images.placeholders.dev/350',
  'https://images.placeholders.dev/150',
  { src: 'https://images.placeholders.dev/450', title: 'this is title' },
]

const showImg = (index) => {
  indexRef.value = index
  visibleRef.value = true
}
const onHide = () => (visibleRef.value = false)
</script>

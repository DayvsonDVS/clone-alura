<template>
  <div class="content-video">
    <iframe :src="src" frameborder="0"></iframe>
  </div>
</template>

<script setup lang="ts">
interface Props {
  src: string
}

defineProps<Props>()
</script>

<style scoped lang="scss">
.content-video {
  width: 100%;

  iframe {
    width: 100%;
    height: 100%;
  }
}
</style>

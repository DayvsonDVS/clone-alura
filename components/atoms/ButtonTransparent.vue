<template>
  <button class="button-transparent">
    {{ text }}
  </button>
</template>

<script setup lang="ts">
interface Props {
  text: string
}

defineProps<Props>()
</script>

<style scoped lang="scss">
.button-transparent {
  font-family: inherit;
  cursor: pointer;
  background-color: transparent;
  border: 2px solid #2a7ae4;
  color: #2bdefd;
  border-radius: 13px;
  padding: 0.5rem 1.25rem;
  width: max-content;
  &:hover {
    color: #fff;
  }
}
</style>

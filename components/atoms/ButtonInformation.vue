<template>
  <a class="button-information">{{ title }}</a>
</template>

<script setup lang="ts">
interface Props {
  title: string
}

defineProps<Props>()
</script>

<style lang="scss" scoped>
.button-information {
  width: max-content;
  height: max-content;
  font-weight: 600;
  font-family: 'Inter', sans-serif;
  padding: 1.2rem 2.5rem;
  background-color: #2bfdbe;
  cursor: pointer;
  clip-path: polygon(0 0,
      100% 0,
      100% calc(100% - 12px),
      calc(100% - 12px) 100%,
      0 100%);
  transition: all 0.3s ease;

  a {
    z-index: 1;
  }

  &:hover {
    transform: translateY(1px);
    transition: all 0.3s ease;

    &::before {
      z-index: -1;
      content: '';
      position: absolute;
      padding: 0.9375rem 2.5rem;
      top: 1px;
      left: 1px;
      right: 1px;
      bottom: 1px;
      background-color: rgb(217, 255, 246);
      clip-path: polygon(0 0,
          100% 0,
          100% calc(100% - 12px),
          calc(100% - 12px) 100%,
          0 100%);
    }
  }
}
</style>

<template>
  <a class="button">{{ title }}</a>
</template>

<script setup lang="ts">
interface Props {
  title: string
}

defineProps<Props>()
</script>

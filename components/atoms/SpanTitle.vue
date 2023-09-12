<template>
  <a class="span-title"> {{ title }} </a>
</template>

<script setup lang="ts">
interface Props {
  title: string
}

const { title } = defineProps<Props>()
</script>

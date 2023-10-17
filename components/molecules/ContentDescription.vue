<template>
  <div class="content-description">
    <div class="description">
      <h2>{{ text }}</h2>

      <div class="slot">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  text: string
}

defineProps<Props>()
</script>

<style scoped lang="scss">
.content-description {
  .description {
    display: grid;
    gap: 1rem;
    padding-top: 2rem;
    h2 {
      font-size: 4.75rem;
      line-height: 4.75rem;
      font-family: 'Chakra Petch', sans-serif;
      color: #d7f9ff;
    }
    .slot {
      color: #98d4de;
      font-size: 1.2rem;
      line-height: 1.5rem;
    }
  }
}
</style>

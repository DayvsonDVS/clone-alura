<template>
  <form action="" class="search">
    <input type="search" placeholder="O que você quer aprender?" />

    <button type="submit">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="15"
        viewBox="0 0 16 15"
      >
        <g
          fill="none"
          fill-rule="evenodd"
          stroke="#D7F9FF"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
          transform="translate(1 1)"
        >
          <path d="M13.637 12.86l-3.526-3.527"></path>
          <circle cx="5.667" cy="5.667" r="5.667"></circle>
        </g>
      </svg>
    </button>
  </form>
</template>

<script setup lang="ts">
interface Props {
  text: string
}

defineProps<Props>()
</script>

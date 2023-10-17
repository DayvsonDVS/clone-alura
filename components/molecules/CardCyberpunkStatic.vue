<template>
  <div class="card-cyberpunk-static">
    <div :class="['categories__wrapper', color]">
      <slot name="header"></slot>

      <h2>{{ title }}</h2>
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title: string
  color:
  | 'front-end'
  | 'programming'
  | 'data-science'
  | 'artificial-intelligence'
  | 'devops'
  | 'ux-design'
  | 'mobile'
  | 'innovation-management'
}

defineProps<Props>()
</script>

<style scoped lang="scss">
$colors: front-end, programming, data-science, artificial-intelligence, devops,
  ux-design, mobile, innovation-management;

.card-cyberpunk-static {
  width: 100%;
  min-height: 100%;
  display: flex;
  max-width: 450px;
  background-color: #012640;
  padding: 0.08rem;
  clip-path: polygon(0 0,
      100% 0,
      100% calc(100% - 40px),
      calc(100% - 40px) 100%,
      0 100%);

  .categories__wrapper {
    line-height: 1.5;
    background-color: #021017;
    clip-path: polygon(0 0,
        100% 0,
        100% calc(100% - 40px),
        calc(100% - 40px) 100%,
        0 100%);

    @each $color in $colors {
      &.#{$color} {
        padding: 3rem 4rem;
        color: var(--#{$color});

        :deep(svg) {
          width: 65px;
          height: 65px;

          :first-child {
            fill: var(--#{$color});
          }

          :last-child {
            fill: #fff;
          }
        }

        h2 {
          margin-top: 1.5rem;
        }

        :deep(p) {
          margin-top: 1.5rem;
          color: #d7f9ff;
          font-size: 1.2rem;
          line-height: 150%;
        }
      }
    }
  }
}
</style>

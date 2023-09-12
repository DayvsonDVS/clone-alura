<template>
  <div :class="['card', color]">
    <div class="categories__wrapper">
      <slot />

      <div class="categories__main-info">
        <span>{{ title }}</span>
        <h4>{{ subtitle }}</h4>
      </div>

      <div class="content">
        <nav>
          <a href="" v-for="link in content">{{ link }}</a>
        </nav>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import '@/assets/scss/vars.scss'

interface Props {
  title: string
  subtitle: string
  color:
    | 'front-end'
    | 'programming'
    | 'data-science'
    | 'artificial-intelligence'
    | 'devops'
    | 'ux-design'
    | 'mobile'
    | 'innovation-management'
  content: string[]
}

const { content, color, title, subtitle } = defineProps<Props>()
</script>

<style scoped lang="scss">
$colors: front-end, programming, data-science, artificial-intelligence, devops,
  ux-design, mobile, innovation-management;
.card {
  cursor: pointer;
  width: 100%;
  max-width: 200px;
  min-height: 100%;
  display: flex;
  clip-path: polygon(
    0 0,
    100% 0,
    100% calc(100% - 25px),
    calc(100% - 25px) 100%,
    0 100%
  );
  background-color: #012640;
  top: 0;
  transition: all 0.3s ease;
  position: relative;
  .categories__wrapper {
    width: 100%;
    background-color: #021017;
    display: grid;
    gap: 1rem;
    grid-auto-flow: row;
    padding: 1rem;
    clip-path: polygon(
      0 0,
      100% 0,
      100% calc(100% - 25px),
      calc(100% - 25px) 100%,
      0 100%
    );
  }
  &:hover {
    position: relative;
    top: -10px;
    background-color: #2bdefd;
    transition: all 0.3s ease;
  }
  .categories__main-info {
    display: grid;
    gap: 0.7rem;
    span {
      font-weight: 400;
      font-size: 0.6875rem;
    }
    h4 {
      font-weight: 700;
      font-size: 0.9375rem;
      line-height: 1.5;
    }
  }
  @each $color in $colors {
    &.#{$color} {
      padding: 0.1rem;
      color: var(--#{$color});
      :deep(svg) {
        width: 30px;
        height: 30px;

        path {
          fill: var(--#{$color});
        }
      }
    }
  }
  .content {
    width: auto;
    line-height: 1.5;
    a {
      color: #d7f9ff;
      text-decoration: none;
      font-size: 0.875rem;
      display: inline-block;
      margin-right: 5px;
      &:hover {
        text-decoration: underline;
        opacity: 0.8;
      }
    }
  }
}
</style>

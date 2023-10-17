<template>
  <div :class="['card__cyberpunk-semi-static', color]">
    <div class="card__cyberpunk-wrapper">
      <div class="slot">
        <slot />
        <h3>{{ title }}</h3>
      </div>

      <div class="categories__content">
        <a :href="ref" v-for="{ title, ref } in content">{{ title }} <br></a>
      </div>

      <div class="categories-formation">
        <a>{{ subtitle }}</a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Info {
  title: string
  ref: string
}

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
  content: Info[]
}

const { content, color, title, subtitle } = defineProps<Props>()
</script>

<style scoped lang="scss">
$colors: front-end, programming, data-science, artificial-intelligence, devops,
  ux-design, mobile, innovation-management;

.card__cyberpunk-semi-static {
  width: 100%;
  height: max-content;
  display: flex;
  position: relative;
  overflow: hidden;

  @each $color in $colors {
    &.#{$color} {
      padding: 0.1rem;
      color: var(--#{$color});
      width: 270px;

      .card__cyberpunk-wrapper {
        width: 100%;

        .slot {
          display: grid;
          grid-template-columns: repeat(2, max-content);
          align-items: center;
          gap: 1rem;
          margin-bottom: 2rem;

          :deep(svg) {
            width: 50px;
            height: 50px;

            path {
              fill: var(--#{$color});
            }
          }
        }

        .categories__content {
          width: 100%;

          a {
            display: block;
            text-decoration: none;
            color: inherit;
            -webkit-transition: 0.3s;
            transition: 0.3s;
            width: 100%;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            font-size: .875rem;
            line-height: 180%;
            color: #D7F9FF;

            &:hover {
              opacity: .8;
              text-decoration: underline;
            }
          }

        }

        .categories-formation {
          margin-top: 2rem;
          margin-bottom: 5rem;

          a {
            font-family: "Chakra Petch", sans-serif;
            font-size: 1rem;
            text-decoration: underline;
            color: #2BDEFD;
            font-weight: bold;
            cursor: pointer;
          }
        }
      }
    }
  }
}
</style>

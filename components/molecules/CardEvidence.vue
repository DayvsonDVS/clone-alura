<template>
  <div class="card__evidence">
    <div class="card__evidence-header">
      <img :src="avatar">
      <h3>{{ student }}</h3>
    </div>

    <div class="card__evidence-body">
      <div :style="`background-image: url(${backgroundEvidence})`" class="card__evidence-boy-preview">
        <img src="../../assets/imgs/video-play.webp" alt="">
        <a :href="link"></a>
      </div>

      <slot class="slot" />
    </div>
    <a :href="link" class="card__evidence-body-link">Ver depoimento completo no youtube</a>
  </div>
</template>
 
<script setup lang="ts">
interface Props {
  avatar: string
  student: string
  link: string
  backgroundEvidence: string
}

defineProps<Props>()

</script>
 
<style scoped lang="scss">
.card__evidence {
  position: relative;
  color: #D7F9FF;
  padding: 2rem;
  display: grid;
  gap: 2rem;

  &::before {
    z-index: -2;
    content: "";
    position: absolute;
    top: -1px;
    left: -1px;
    width: calc(100% + 2px);
    height: calc(100% + 2px);
    background-color: #012640;
    clip-path: polygon(0 0, 100% 0, 100% calc(100% - 40px), calc(100% - 40px) 100%, 0 100%);
  }

  .card__evidence-header {
    display: grid;
    grid-template-columns: repeat(2, max-content);
    gap: 1rem;
    align-items: center;

    img {
      width: 40px;
      height: 40px;
      border-radius: 100%;
    }

    h3 {
      font-weight: 700;
      font-size: 1.1875rem;
      line-height: 1;
      color: #2BDEFD;
      font-family: "Chakra Petch", sans-serif;
    }
  }

  .card__evidence-body {

    .card__evidence-boy-preview {
      position: relative;
      -webkit-box-ordinal-group: 2;
      order: 1;
      width: 100%;
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
      margin-top: 0.375rem;
      margin-bottom: 2rem;

      &::before {
        content: "";
        display: block;
        padding-top: 56.25%;
        background: linear-gradient(0deg, rgba(0, 0, 0, .5), rgba(0, 0, 0, .5));
      }

      img {
        position: absolute;
        top: 50%;
        left: 50%;
        -webkit-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
        max-width: 51px;
        -webkit-transition: all 0.3s;
        transition: all 0.3s;

        &:hover {
          max-width: 71px;
          cursor: pointer;
          -webkit-transition: all 0.3s;
          transition: all 0.3s;
        }
      }
    }
  }

  .card__evidence-body-link {
    -webkit-box-ordinal-group: 4;
    order: 3;
    margin-top: 1.5625rem;
    color: #2BDEFD;
    font-weight: 400;
    font-size: .9375rem;
    line-height: 150%;
    text-decoration-line: underline;
  }

  &::after {
    z-index: -2;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #021017;
    clip-path: polygon(0 0, 100% 0, 100% calc(100% - 40px), calc(100% - 40px) 100%, 0 100%);
  }
}
</style>
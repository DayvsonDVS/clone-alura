<template>
  <div class="container-video">
    <div class="container__video-content">
      <ContentDescription text="A maior escola online de tecnologia do Brasil.">
        <p>
          Mergulhe com profundidade e navegue em outras áreas de Tecnologia. Torne-se profissional em {{ "<T>." }}
        </p>
      </ContentDescription>

      <ButtonInformation title="VEJA COMO FUNCIONA" />
    </div>

    <div class="container__video">
      <div class="head-img">
        <img src="../../assets/imgs/stripes.svg">
        <img src="../../assets/imgs/numbers-right.svg">
      </div>
      <div class="img-iframe-video" ref="iFrameVideoFake">
        <img src="../../assets/imgs/video-play.webp" @click="play()">
        <img src="../../assets/imgs/imgFrameVideo.jpeg">
      </div>
      <div class="video" ref="iFrameVideo">
        <ContentVideo src="https://www.youtube.com/embed/2t8ycK8D4Rk?autoplay=1" />
      </div>
    </div>
  </div>
</template>
 
<script setup lang="ts">
const iFrameVideoFake = ref<HTMLElement>()
const iFrameVideo = ref<HTMLElement>()

function play() {
  iFrameVideoFake.value!.style.display = 'none'
  iFrameVideo.value!.style.display = 'grid'

}
</script>
 
<style scoped lang="scss">
.container-video {
  margin-top: 5rem;
  display: grid;
  grid-template-columns: 500px 1fr;
  gap: 6rem;

  .container__video {
    display: grid;
    display: grid;
    grid-auto-rows: max-content 300px;
    gap: 3rem;

    .head-img {
      margin-top: 70px;
      justify-content: space-between;
      display: grid;
      grid-auto-flow: column;
      align-items: center;
    }

    .img-iframe-video {
      justify-items: center;
      display: grid;
      position: relative;
      align-items: center;

      :nth-child(1) {
        position: absolute;
        z-index: 1;
        cursor: pointer;
        transition: all 0.3s ease-in-out;
        width: 20%;

        &:hover {
          width: 25%;
          transition: all 0.3s ease-in-out;
        }
      }

      :nth-child(2) {
        position: absolute;
        z-index: -1;
        width: 600px;
      }
    }

    .video {
      display: none;
    }
  }

  .container__video-content {
    display: grid;
    gap: 3rem;
  }
}
</style>
<template>
  <div class="content__formation">
    <div class="content__formation-description">
      <h3>Nossas Formações, Seu Guia</h3>

      <h2>Sequências de cursos organizados em <span>Formações</span></h2>

      <p>Formações com conteúdo do mercado de trabalho: sequências de cursos e conteúdo para você se capacitar em
        tecnologia e negócios digitais.</p>
    </div>

    <div class="content__formation-illustration">
      <img class="stripes" src="../../assets/imgs/stripes.svg">
      <img class="sub" src="../../assets/imgs/formations-sub.webp">
    </div>
  </div>
</template>
 
<script setup lang="ts">

</script>
 
<style scoped lang="scss">
.content__formation {
  margin-top: 10rem;
  display: grid;
  grid-template-columns: 690px 1fr;
  gap: 2rem;

  .content__formation-description {
    padding-top: 3rem;

    h3 {
      margin-bottom: 2rem;
      font-weight: 700;
      font-size: 1.3rem;
      line-height: 150%;
      color: #2BDEFD;
    }

    h2 {
      font-size: 3.75rem;
      line-height: 1;
      color: #D7F9FF;
      font-family: "Chakra Petch", sans-serif;
      font-size: 4.5rem;

      span {
        color: #2BDEFD;
      }
    }

    p {
      font-size: 1.3rem;
      line-height: 1.5;
      color: #98D4DE;
      max-width: 508px;
      margin-top: 1.5rem;
    }
  }

  .content__formation-illustration {
    .stripes {
      margin-bottom: 1.3rem;
    }

    .sub {
      width: 100%;
    }
  }
}
</style>
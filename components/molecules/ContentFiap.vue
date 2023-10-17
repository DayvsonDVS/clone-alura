<template>
  <div class="content__fiap">
    <div class="content__fiap--future-skill">
      <div class="line"></div>
      //FUTURE SKILLS
    </div>

    <div class="content__fiap--container">
      <div class="content__fiap--content">
        <h3>FIAP + Alura</h3>
        <h2>Faça parte do maior ecossistema de ensino tech do Brasil!</h2>

        <p>
          Você sabia que a Alura se uniu ao Centro Universitário <strong>referência em tecnologia no Brasil?</strong>
        </p>

        <p><strong>CONHEÇA A PÓS TECH</strong>
          um projeto sem precedentes da parceria
          <strong> FIAP + ALURA</strong>: pós-graduações única, 100% digitais, hands-on e assíncronas nas áreas de Dev,
          Cyber Segurança e Dados.
        </p>

        <p>Vagas limitadas!</p>

        <div class="button-fiap">
          <a>SAIBA MAIS </a>
        </div>
      </div>

      <div class="content__fiap--image">
        <img src="../../assets/imgs/fiap_alura.webp" alt="">
      </div>
    </div>

    <div class="content__fiap--footer">
      <div>DEEP TECH, DEEP DIVE</div>
      <div class="line"></div>
      <div>FIAP + ALURA</div>
    </div>
  </div>
</template>
 
<script setup lang="ts">

</script>
 
<style scoped lang="scss">
.content__fiap {
  margin-top: 20px;
  color: #fff;

  .line {
    background-color: #696969;
    width: 90px;
    height: 2px;
    display: inline-block;
  }

  .content__fiap--future-skill {
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: end;
    justify-content: right;
    -webkit-box-align: center;
    align-items: center;
    gap: 42px;
    color: #696969;
    font-weight: 700;
    font-size: .75rem;
    line-height: 150%;
    margin-bottom: 30px;
  }

  .content__fiap--container {
    display: grid;
    grid-template-columns: 670px max-content;
    gap: 3rem;

    .content__fiap--content {
      color: #9EADB7;

      h3 {
        font-weight: 700;
        font-size: 1rem;
        line-height: 1.5;
        color: #E81B5C;
        font-family: "Chakra Petch", sans-serif;
        margin-bottom: 20px;
      }

      h2 {
        font-family: "Chakra Petch", sans-serif;
        font-size: 3.75rem;
        line-height: 1;
      }

      p {
        font-weight: 400;
        font-size: 1rem;
        line-height: 1.5;
        margin-top: 1.5rem;
        margin-bottom: 1.5em;
        max-width: 551px;
      }

      .button-fiap {
        margin-top: 4rem;

        a {
          cursor: pointer;
          position: relative;
          text-decoration: none;
          color: #D7F9FF;
          display: inline-block;
          width: 100%;
          padding: 1.1875rem;
          font-size: 1rem;
          text-align: center;
          text-transform: uppercase;
          margin-top: 1.875rem;
          max-width: 218px;

          &::before {
            z-index: -1;
            content: "";
            position: absolute;
            top: -1px;
            left: -1px;
            width: calc(100% + 2px);
            height: calc(100% + 2px);
            background-color: #E81B5C;
            clip-path: polygon(0 0, 100% 0, 100% calc(100% - 25px), calc(100% - 25px) 100%, 0 100%);
          }

          &::after {
            z-index: -1;
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: #01080E;
            -webkit-transition: all 0.2s;
            transition: all 0.2s;
            clip-path: polygon(0 0, 100% 0, 100% calc(100% - 25px), calc(100% - 25px) 100%, 0 100%);

          }

          &:hover {
            &::after {
              opacity: 0;
            }
          }
        }
      }
    }

    .content__fiap--image {
      img {
        width: 480px;
      }
    }
  }

  .content__fiap--footer {
    display: grid;
    grid-template-columns: 1fr max-content max-content;
    gap: 15rem;
    -webkit-box-pack: end;
    justify-content: end;
    -webkit-box-align: center;
    align-items: center;
    color: #696969;
    font-weight: 700;
    font-size: .75rem;
    line-height: 150%;
    border-top: 1px solid #696969;
    padding-top: 1.5rem;
    margin-top: 5rem;
  }
}
</style>
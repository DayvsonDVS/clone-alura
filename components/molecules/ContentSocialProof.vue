<template>
  <div class="content-social-proof">
    <div class="social-wrapper">
      <div class="social-main">
        <h3>Nossos mergulhadores</h3>
        <h2>A maior escola online de tecnologia do Brasil.</h2>
        <p> São mais de 1460 cursos, 100% em português, e novos lançamentos toda semana.</p>
      </div>
      <div class="social-proof">
        <ul>
          <li class="proof">
            <img src="../../assets/imgs/genilton-souza.jpg" alt="">
            <div class="proof-text">
              <p>Se você não sabe a ordem do que deve aprender e praticar para dominar uma tecnologia, <strong> a forma
                  como os cursos estão organizados e estruturados na Alura ajuda muito. </strong> Aprendi C# aqui e pago
                minhas contas com isso hoje em dia.</p>

              <p class="prof-students"><strong> Genilton Souza </strong></p>
            </div>
          </li>

          <li class="divisor">
            <img src="../../assets/imgs/divisor-destaqueAlunos.svg" alt="">
          </li>

          <li class="proof">
            <img src="../../assets/imgs/leandro-silva.jpg" alt="">
            <div class="proof-text">
              <p>Passei dois anos e meio desempregado e foi onde conheci os cursos da Alura. <strong> Consegui fazer uma
                  mudança de carreira em uma área muito disputada e estou muito feliz:</strong> passei em um processo
                seletivo como Agente de Inovação, e muito do que aprendi tanto para a prova quanto para a etapa presencial
                foi graças a Alura.</p>
              <p class="prof-students"><strong>Leandro da Silva</strong></p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
 
<script setup lang="ts">

</script>
 
<style scoped lang="scss">
.content-social-proof {
  position: relative;
  padding-top: 9rem;
  padding-bottom: 3rem;

  ::before {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 93px;
    background-image: url(/assets/imgs/divisor-section-down.svg);
    background-position: bottom center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  .social-wrapper {
    display: grid;
    grid-template-columns: 390px 1fr;
    gap: 8rem;
    padding: 4rem;

    .social-main {

      h3 {
        font-family: "Chakra Petch", sans-serif;
        font-weight: 700;
        font-size: 1rem;
        line-height: 150%;
        color: #093366;
      }

      h2 {
        margin-top: 30px;
        font-size: 3.75rem;
        line-height: 100.5%;
        font-family: "Chakra Petch", sans-serif;
      }

      p {
        margin-top: 1.5rem;
        color: #093366;
        font-size: 1rem;
        line-height: 150%;
      }
    }

    .social-proof {
      ul {
        .divisor {
          margin-bottom: 4rem;
        }

        .proof {
          display: grid;
          grid-auto-flow: column;
          gap: 2.2rem;

          img {
            width: 86px;
            clip-path: polygon(0 0, calc(100% - 20px) 0%, 100% 20px, 100% 100%, 20px 100%, 0% calc(100% - 20px));
          }

          .proof-text {
            font-size: 1.25rem;
            line-height: 1.875rem;
          }

          .prof-students {
            font-size: 1.3125rem;
            text-align: right;
            margin-top: 3rem;
            margin-bottom: 2rem;

          }
        }
      }
    }
  }

  ::after {
    content: "";
    display: block;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 93px;
    background-image: url(/assets/imgs/divisor-section-up.svg);
    background-position: top center;
    background-repeat: no-repeat;
    background-size: cover;
  }
}
</style>
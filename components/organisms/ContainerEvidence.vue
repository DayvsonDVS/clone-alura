<template>
  <div class="container__evidence">
    <div class="container__evidence-header">
      <div class="container__evidence-header-content">
        <h3>A Alura vale a pena?</h3>
        <h2>Conheça os <span>depoimentos e histórias</span> de quem estuda com a gente</h2>
      </div>

      <div class="container__evidence-header-animation">
        <img class="container__evidence-header-animation-animation-luz" src="../../assets/imgs/selo-animation-luz.webp"
          alt="">
        <img class="container__evidence-header-animation-sombra" src="../../assets/imgs/selo-animation-sombra.webp"
          alt="">
        <img class="container__evidence-header-animation-selo" src="../../assets/imgs/selo-animation.webp" alt="">
      </div>
    </div>

    <div class="container__evidence-card">
      <CardEvidence v-for="evidence in listEvidence" :student="evidence.student" :avatar="evidence.avatar"
        :backgroundEvidence="evidence.backgroundEvidence" :link="evidence.link">

        <p>{{ evidence.content }}</p>
      </CardEvidence>
    </div>

    <a href="" class="container__evidence--cta">Conheça mais dezenas de histórias de alunos e alunas da Alura!</a>
  </div>
</template>
 
<script setup lang="ts">
const listEvidence = [{ student: 'Angela Emanoelle', avatar: '/img/angela-caldas.jpg', backgroundEvidence: 'https://i3.ytimg.com/vi/ODEgEk83PLA/hqdefault.jpg', link: 'https://www.youtube.com/watch?v=ODEgEk83PLA&ab_channel=Alura', content: 'A arquiteta Angela estava atuando na área da construção civil...' },

{ student: 'Roger Tuma', avatar: '/img/roger-tuma.webp', backgroundEvidence: 'https://i3.ytimg.com/vi/-Ue_I6_qZOI/hqdefault.jpg', link: 'https://www.youtube.com/watch?v=-Ue_I6_qZOI&ab_channel=Alura', content: 'O Roger começou na área de tecnologia aos 17 anos! Como homem trans, enfrentou vários desafios no mercado de trabalho...' },

{ student: 'Natalia Francisco', avatar: '/img/natalia-francisco.jpg', backgroundEvidence: 'https://i3.ytimg.com/vi/mCHS_2NR-Uc/hqdefault.jpg', link: 'https://www.youtube.com/watch?v=mCHS_2NR-Uc&ab_channel=Alura', content: 'A Natália F. Silva começou na tecnologia porque era apaixonada por jogos e queria aprender como fazer um...' },

{ student: 'Iago Alves', avatar: '/img/iago-lopes.jpg', backgroundEvidence: 'https://i3.ytimg.com/vi/DDp0LKyfepo/hqdefault.jpg', link: 'https://www.youtube.com/watch?v=DDp0LKyfepo&ab_channel=Alura', content: 'Você já ouviu dizer que para trabalhar com tecnologia é preciso ter um “dom”? O Iago é a prova...' },

{ student: 'Dayane Garcia', avatar: '/img/dayane-garcia.jpg', backgroundEvidence: '	https://i3.ytimg.com/vi/pVdFGtF9OzY/hqdefault.jpg', link: 'https://www.youtube.com/watch?v=pVdFGtF9OzY&ab_channel=Alura', content: 'A Dayane saiu da área de RH para mergulhar em tecnologia! A transição não foi fácil, mas...' },

{ student: 'Jean Rodrigues', avatar: '/img/jean-rodrigues.webp', backgroundEvidence: 'https://i3.ytimg.com/vi/hmiM3gfFGGw/hqdefault.jpg', link: 'https://www.youtube.com/watch?v=hmiM3gfFGGw&ab_channel=Alura', content: 'O Jean teve o primeiro contato com a tecnologia como jovem aprendiz, aos 15 anos...' },

]


</script>
 
<style scoped lang="scss">
.container__evidence {

  .container__evidence-header {
    padding-top: 8rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    height: 300px;
    gap: 1rem;
    padding-bottom: 4rem;

    .container__evidence-header-content {
      h3 {
        margin-bottom: 1.8rem;
        color: #2BDEFD;
        font-weight: 700;
        font-size: 1rem;
        line-height: 150%;
        font-family: "Chakra Petch", sans-serif;
      }

      h2 {
        font-size: 3.75rem;
        line-height: 1;
        font-family: "Chakra Petch", sans-serif;
        color: #D7F9FF;

        span {
          color: #2BDEFD;
        }
      }
    }

    .container__evidence-header-animation {
      position: relative;

      .container__evidence-header-animation-animation-luz {
        position: absolute;
        top: -110px;
        right: -50px;
        max-width: calc(100% + 100px);
      }

      .container__evidence-header-animation-sombra {
        position: absolute;
        top: 40px;
        right: -40px;
        max-width: 100%;
        animation: seloSombra 5s ease-in-out infinite;
        opacity: .5;
      }

      @keyframes seloSombra {
        0% {
          opacity: .5;
        }

        50% {
          opacity: 1;
        }

        100% {
          opacity: .5;
        }
      }

      .container__evidence-header-animation-selo {
        position: absolute;
        top: 0;
        right: 0;
        max-width: 100%;
        animation: seloFloat 5s ease-in-out infinite;
      }

      @keyframes seloFloat {
        0% {
          -webkit-transform: translateY(0);
          transform: translateY(0);
        }

        50% {
          -webkit-transform: translateY(50px);
          transform: translateY(50px);
        }

        100% {
          -webkit-transform: translateY(0);
          transform: translateY(0);
        }
      }
    }
  }

  .container__evidence-card {
    margin-top: 3rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }

  .container__evidence--cta {
    display: block;
    background-color: #2BDEFD;
    color: #01080E;
    text-align: center;
    text-decoration: none;
    font-weight: 600;
    text-transform: uppercase;
    padding: 1.1875rem;
    width: 100%;
    max-width: 670px;
    -webkit-transition: all 0.3s ease;
    transition: all 0.3s ease;
    font-size: .75rem;
    line-height: 1.5;
    margin: 4rem auto 0;
    clip-path: polygon(0 0, 100% 0, 100% calc(100% - 25px), calc(100% - 25px) 100%, 0 100%);

    &:hover {
      transform: translateY(1px);
      background-color: #D7F9FF;
    }
  }
}
</style>
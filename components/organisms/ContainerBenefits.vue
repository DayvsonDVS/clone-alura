<template>
  <div class="container__benefits">
    <CardCyberpunkStatic color="front-end" title="AVANCE NA CARREIRA">
      <template #header>
        <SVGBoat />
      </template>
      <p>
        São mais de 1473 cursos e lançamentos toda semana para você transformar
        o seu futuro com a escola referência em educação tech.
      </p>
    </CardCyberpunkStatic>

    <CardCyberpunkStatic color="front-end" title="APROFUNDE SEUS CONHECIMENTOS">
      <template #header>
        <SVGIconSub />
      </template>
      <p>
        Aqui você tem acesso a um processo de aprendizado acessível e com
        direcionamento na sua jornada de estudos, para você se tornar
        profissional em T.
      </p>
    </CardCyberpunkStatic>

    <CardCyberpunkStatic color="front-end" title="CONECTE-SE COM A COMUNIDADE">
      <template #header>
        <SVGIconFlag />
      </template>
      <p>
        Faça parte da maior comunidade de apaixonados por tecnologia. Conheça e se conecte com milhares de profissionais
        do mercado.
      </p>
    </CardCyberpunkStatic>
  </div>
</template>
 
<script setup lang="ts">
import SVGBoat from 'assets/icons/icon-barco.svg'
import SVGIconSub from 'assets/icons/icon-sub.svg'
import SVGIconFlag from 'assets/icons/flag.svg'

</script>
 
<style scoped lang="scss">
.container__benefits {
  margin-top: 5rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.5rem;
  height: 500px;
}
</style>
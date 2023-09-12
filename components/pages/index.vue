<template>
  <div class="index">
    <!-- <NavigationMenu /> -->

    <Card
      color="mobile"
      title="Escola_"
      subtitle="MOBILE"
      :content="listContentMobile"
    >
      <SVGMobile />
    </Card>

    <Card
      color="ux-design"
      title="Escola_"
      subtitle="UX & DESIGN"
      :content="listContentUXDesign"
    >
      <SVGUXDesign />
    </Card>
  </div>
</template>

<script setup lang="ts">
import SVGMobile from 'assets/icons/phone.svg'
import SVGUXDesign from 'assets/icons/eye-fill.svg'

const listContentMobile = [
  'React Native,',
  'Flutter,',
  'iOS e Swift,',
  'Android,',
  'Kotlin,',
  'Jogos,',
  'e mais...'
]

const listContentUXDesign = [
  'Usabilidade e UX,',
  'Vídeo e Motion,',
  '3D e mais...,'
]
</script>

<style scoped lang="scss">
.index {
  display: grid;
  grid-auto-flow: column;
  padding: 1rem;
  justify-content: center;
  gap: 0.5rem;
  position: relative;
  top: 100px;
}
</style>

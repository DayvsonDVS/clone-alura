<template>
  <Container>

    <NavigationMenu />

    <ContainerCategories />

    <ContainerTerminal />

    <ContainerVideo />

    <ContainerBenefits />

    <ContentFormation />

  </Container>

  <div class="divider">
    <img src="../../assets/imgs/formations-divider.svg">
  </div>

  <Container>

    <ContainerFormation />

  </Container>

  <ContainerSocialProof />

  <Container>

    <ContainerFiap />

    <ContainerEvidence />

  </Container>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.divider {
  width: 100%;
  margin-top: 5rem;

  img {
    width: 100%;
  }
}
</style>

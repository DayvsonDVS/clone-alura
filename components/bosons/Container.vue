<template>
  <div class="container">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.container {
  margin: 0 auto;
  max-width: 1200px;
  height: 100%;
  min-height: 100vh;
  @include for-size('phone') {
    width: 95%;
  }
  @include for-size('tablet') {
    width: 90%;
  }
  @include for-size('desktop', 'big-desktop') {
    width: 90%;
  }
}
</style>

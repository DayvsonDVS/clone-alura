<template>
  <div class="navigation">
    <Logo />

    <Search text="O que você quer aprender?" />

    <SpanTitle title="NOSSAS FORMAÇÕES" />
    <SpanTitle title="PARA EMPRESAS" />
    <SpanTitle title="DEV EM<T>" />
    <SpanTitle title="ENTRAR" />

    <ButtonInformation title="MATRICULE-SE" />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.navigation {
  padding: 22px 0px;
  display: grid;
  grid-template-columns: max-content 305px repeat(5, max-content);
  gap: 2rem;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  .logo {
    width: 100%;
    height: 100%;
  }
  .search {
    margin-right: 30px;
    padding: 12px 18px 12px 14px;
    background-color: transparent;
    border: solid 1.28px #0d6271;
    display: grid;
    grid-template-columns: 1fr 50px;
    gap: 1 rem;
    :deep(input) {
      outline: none;
      background: none;
      border: none;
      color: #fff;
      &::placeholder {
        font-size: 0.875rem;
        color: #0d6271;
        font-weight: 300;
        filter: brightness(160%);
      }
    }
    :deep(button) {
      background: none;
      border: none;
    }
  }
  .span-title {
    color: #fff;
    font-weight: 600;
    font-family: 'Inter', sans-serif;
    cursor: pointer;
    transition: all 0.3s ease-out;
    font-size: 0.8125rem;
    &::before {
      content: '';
      position: absolute;
      width: 0px;
      height: 18px;
      border-bottom: solid 1.8px #2bdefd;
      transition: all 0.3s ease-out;
    }
    &:hover {
      color: #2bdefd;
      transition: transform 0.3s ease-out;
      &::before {
        content: '';
        position: absolute;
        width: 28px;
        height: 18px;
        border-bottom: solid 1.8px #2bdefd;
        transition: all 0.3s ease-out;
      }
    }
  }
}
</style>

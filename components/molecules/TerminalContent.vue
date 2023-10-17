<template>
  <div class="terminal-content">
    <div class="terminal-wrapper">
      <div class="terminal-description">
        <p>
          Olá, boas-vindas! :) <br />
          Qual tecnologia você quer estudar na <br />
          Alura?
        </p>
      </div>
      <div class="terminal-button">
        <ButtonTransparent text="Front-end" />
        <ButtonTransparent text="Programação" />
        <ButtonTransparent text="Mobile" />
        <ButtonTransparent text="Devops" />
        <ButtonTransparent text="UX & Design" />
        <ButtonTransparent text="Data Science" />
        <ButtonTransparent text="Inovação & Gestão" />
        <ButtonTransparent text="Inteligência Artificial" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.terminal-content {
  margin-top: 6%;
  background-image: url(assets/imgs/console-prompt-small.svg);
  background-repeat: no-repeat;
  width: 540px;
  height: 385px;
  display: grid;
  background-position: top;
  .terminal-wrapper {
    padding: 2rem 2rem 2rem 0.7rem;
    display: grid;
    align-content: center;
    justify-items: end;
    gap: 1rem;
    &::before {
      content: '';
      width: 160px;
      height: 40px;
      background-image: url(assets/imgs/console-prompt-detail.svg);
      background-repeat: no-repeat;
      z-index: 2;
      position: relative;
      bottom: 80px;
      display: grid;
      justify-self: baseline;
      margin-left: 1.5rem;
    }
    :nth-child(1) {
      justify-self: left;
      margin-left: 20px;
    }
    .terminal-description {
      padding: 1rem 1.25rem 1rem 0rem;
      border-radius: 0 2.5rem 2.5rem 0;
      display: block;
      background-color: #092d5d;
      width: 65%;
      margin-top: -55px;
      p {
        font-size: 0.875rem;
        line-height: 1.25rem;
        color: #fff;
        font-weight: 400;
      }
    }
    .terminal-button {
      color: #fff;
      font-weight: bold;
      display: -webkit-box;
      display: -webkit-flex;
      display: flex;
      -webkit-box-pack: end;
      justify-content: flex-end;
      -webkit-flex-wrap: wrap;
      flex-wrap: wrap;
      width: 85%;
      gap: 8px;
      margin-top: 0.5rem;
    }
  }
}
</style>

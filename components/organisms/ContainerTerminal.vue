<template>
  <div class="terminal-wrapper">
    <div class="container-terminal">
      <TerminalContent />
    </div>

    <ContentDescription text="Em qual tecnologia você quer mergulhar?">
      <p>
        Use o terminal ao lado para descobrir as tecnologias e assuntos que você
        pode explorar no Aluraverso.
      </p>
    </ContentDescription>
  </div>
</template>

<style scoped lang="scss">
.terminal-wrapper {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3rem;
  .container-terminal {
    display: grid;
    grid-auto-flow: column;
  }
}
</style>

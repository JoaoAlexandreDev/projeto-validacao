<script setup>
</script>

<template>
  <header class="topbar">
    <RouterLink to="/"><img src="../assets/logo_turion.png" alt="Logomarca da Turion"></RouterLink>
    <h1>TECIDOS DIVERSOS LTDA</h1>
  </header>
</template>

<style scoped>
  .topbar {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;

    background-color: #c3c3c3;
    padding: 10px;
  }

  .topbar img {
    max-width: 50px;
    height: fit-content;
  }

  .topbar h1 {
    font-size: 20px;
  }
</style>

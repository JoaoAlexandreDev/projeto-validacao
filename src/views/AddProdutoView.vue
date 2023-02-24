<script setup>
</script>

<template>
  <main>
    <h2>Manutenção de Produtos</h2>
    <div class="search-bar">
        <RouterLink to="/add-produto">Adicionar</RouterLink>
        <span>Pesquisar <input type="text"></span>
    </div>
  </main>
</template>

<style scoped>
.search-bar {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}
</style>

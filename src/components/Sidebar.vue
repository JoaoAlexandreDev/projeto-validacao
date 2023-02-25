<script setup>
</script>

<template>
  <aside class="sidebar">
    <h3>Menu Opções</h3>
    <hr/>
    <RouterLink to="/produto" class="sibebar-link">Produto</RouterLink>
  </aside>
</template>

<style scoped>
.sidebar {
  background-color: #c3c3c3;
  width: 150px;
  min-height: -webkit-fill-available;
  padding: 10px;
}

.sibebar-link {
  color: #333;
  text-decoration: none;
}
</style>

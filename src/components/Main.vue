<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Sidebar from '../components/Sidebar.vue'
</script>

<template>
  <div class="main-content">
    <Sidebar></Sidebar>
    <main>
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
.main-content, main {
  width: 100%;
  display: flex;
  flex-direction: row;
}
.main-content {
  height: inherit;
}
</style>

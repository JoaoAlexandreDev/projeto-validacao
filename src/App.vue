<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Topbar from './components/Topbar.vue'
import Sidebar from './components/Sidebar.vue'
</script>

<template>
  <Topbar></Topbar>
  <div class="main-content">
    <Sidebar></Sidebar>
    <RouterView />
  </div>
</template>

<style scoped>
.main-content {
  width: 100%;
  display: flex;
  flex-direction: row;
}
</style>

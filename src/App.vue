<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Topbar from './components/Topbar.vue'
import Sidebar from './components/Sidebar.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <Topbar></Topbar>
  <div class="main-content">
    <Sidebar></Sidebar>
    <RouterView />
  </div>
  <Footer></Footer>
</template>

<style scoped>
.main-content {
  width: 100%;
  height: inherit;
  display: flex;
  flex-direction: row;
}
</style>

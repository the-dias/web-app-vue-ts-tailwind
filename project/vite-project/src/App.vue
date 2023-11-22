<script setup lang="ts">
import MainApp from "./components/MainApp.vue";
import "./style.css";
</script>

<template>
  <!-- <Sidebar /> -->
  <!-- <Main /> -->
  <div class="flex flex-row justify-end bg-[#E0E0E0] mx-2 h-screen">
    <MainApp class="bg-white rounded-xl" />
  </div>
</template>

<!-- <style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style> -->

<!-- <div>
  <a href="https://vitejs.dev" target="_blank">
    <img src="/vite.svg" class="logo" alt="Vite logo" />
  </a>
  <a href="https://vuejs.org/" target="_blank">
    <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
  </a>
</div>
<HelloWorld msg="Vite + Vue" /> -->

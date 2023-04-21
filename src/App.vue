<script setup lang="ts">
  import { KeepAlive } from 'vue'
  import HelloWorldVue from './components/HelloWorld.vue';
</script>

<template>
<main class="data-lite-app-main">
  <aside class="menu">
    <HelloWorldVue />
  </aside>
  
  <section class="main-container">
    <router-view v-slot="{Component, route}">
        <KeepAlive>
          <component :is="Component" :key="route.fullPath" />
        </KeepAlive>
    </router-view>
  </section>
  </main>
</template>

<style lang="scss">
html,body{
  margin: 0;
  padding: 0;
}
.fang100 {
  width: 100%;
  height: 100%
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.data-lite-app-main {
  width: 100%;
  height: 100vh;
  display: flex;
  .menu {
    padding: 10px;
    width: 200px;
    box-sizing: border-box
  }
  .main-container {
    flex: 1
  }
}
</style>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavSection from '../components/NavSection.vue'
</script>

<template>
  <RouterLink class="home-link" to="/">Прейти на главну страницу</RouterLink>
  <NavSection class="pegas-links" />
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<style>
.about {
  min-height: 100vh;
  display: flex;
  align-items: center;
}

.home-link {
  margin: 2vw;
  display: flex;
  justify-content: center;
}

</style>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HeroSection from './components/HeroSection.vue'
import FooterSection from './components/FooterSection.vue'
</script>

<template>
<div class="wrapper">
  <header class="hero-section">
    <HeroSection />
  </header>
  <RouterView />
  <FooterSection />
</div>


</template>

<style scoped>
.nav {
  padding: 0 10vw;
  flex: 1;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.wrapper {
  margin: 0 2vw;
}

</style>

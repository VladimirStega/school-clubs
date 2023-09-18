<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HeroSection from './components/HeroSection.vue'
</script>

<template>
<div class="wrapper">
  <header class="hero-section">
    <HeroSection />
      
    <!-- <main class="main-section">

    </main> -->
  </header>
</div>

<RouterView />

</template>

<style scoped>

.hero-section {
  height: 100vh;
}

.nav {
  padding: 0 10vw;
  flex: 1;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

/* header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
} */

</style>

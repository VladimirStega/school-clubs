<script setup>
  import NavSection from '../components/NavSection.vue'
</script>

<template>
  <nav class="nav-pagas">
    <h2 class="nav-title">НАПРАВЛЕНИЯ ДВИЖЕНИЯ</h2>
    <div class="home"> 
        <NavSection />
    </div>
  </nav>
</template>

<style>
.home {
  min-height: 100vh;
  display: flex;
  align-items: center;
  margin: calc(var(--index) * 0.5) 0;
}

.nav-title {
  display: flex;
  justify-content: center;;
  color: #fff;
  padding: calc(var(--index) * 4);
}

.nav-pagas {
  border-radius: 35px;
  background: #007aff;
}
</style>

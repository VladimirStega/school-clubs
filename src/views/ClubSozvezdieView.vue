<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavSection from '../components/NavSection.vue'
import BtnLinkHome from '../components/BtnLinkHome.vue'

</script>

<template>
  <div class="about">
    <div class="page">
      <h3 class="title-link">УЧИСЬ И ПОЗНАВАЙ!</h3>
      <div class="page-content">
          <img class="icon-club" src="../assets/img/sozvezdie_logoV2.png" alt="Логотип Созвездие киноклуб">
        <div class="text-block">
          <p class="page-description">
            Школьный киноклуб "Созвездие" - это место встречи ребят, желающих не только посмотреть интересное кино, но и поделиться своими впечатлениями, чувствами, мыслями, увидеть более широко картину, выслушав другое мнение, иной взгляд.
          </p>
          <br>
          <p class="page-description"> <span class="text-decoration">Ключевое дело:</span> итоговая встреча киноклуба.</p>
          <div class="btn-nav">
            <RouterLink class="back-link" to="/9"> <img class="back-ios" src="../components/icons/back-ios.svg"></RouterLink>
            <BtnLinkHome />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.page {
  padding: calc(var(--index) * 2);
  border-radius: 35px;
  background: #007aff;
}

.title-link {
  text-align: center;
  padding-bottom: calc(var(--index) * 2);
}


.page-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: calc(var(--index) * .9);
}

.icon-club {
    width: calc(var(--index) * 20);
    border-radius: 30px;
}


.page-description{
  font-size: calc(var(--index) * 0.8);
  max-width: calc(var(--index) * 25);
}

.btn-nav {
  display: flex;
  
}

</style>

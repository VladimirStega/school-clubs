<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavSection from '../components/NavSection.vue'
import BtnLinkHome from '../components/BtnLinkHome.vue'

</script>

<template>
  <div class="about">
    <div class="page">
      <h3 class="title-link">НАЙДИ ПРИЗВАНИЕ!</h3>
      <div class="page-content">
          <img class="icon-club" src="../assets/img/legenda47.png" alt="Лого Легенда №47">
        <div class="text-block">
          <p class="page-description">
           Школьный спортивный клуб «Легенда №47» -  это объединение учащихся, заинтересованных в развитии спорта в школе. Участники занимаются организацией спортивных мероприятий в школе и представляют школьную команду на уровне города и региона. 
          </p>
          <br>
          <p class="page-description">
            <span class="text-decoration">Ключевое дело:</span> организация и проведение школьных летних и зимних Олимпийских игр.
          </p>
          <div class="btn-nav">
            <RouterLink class="back-link" to="/7"> <img class="back-ios" src="../components/icons/back-ios.svg"></RouterLink>
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

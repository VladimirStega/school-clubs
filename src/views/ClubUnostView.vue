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
          <img class="icon-club" src="../assets/img/UnostLogo_2.png" alt="картинка 1">
        <div class="text-block">
          <p class="page-description">
            Клуб старшеклассников "Юность" - объединение старшеклассников, направленное на реализацию их творческого потенциала. Клуб заинтересованных и инициативных. Самые яркие творческие вечера в школе - это и есть "Юность"! 
          </p>
          <br>
          <p class="page-description">
            <span class="text-decoration">Ключевое дело:</span> творческие вечера в конце триместров.
          </p>
          <div class="btn-nav">
            <RouterLink class="back-link" to="/4"> <img class="back-ios" src="../components/icons/back-ios.svg"></RouterLink>
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

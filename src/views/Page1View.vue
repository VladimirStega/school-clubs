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
          <img class="icon-club" src="../assets/img/directions-01.95e3898.png" alt="картинка 1">
        <div class="text-block">
          <p class="page-description">
            Время за гаджетами начнет приносить пользу. Мы познакомим участников с принципами создания видеоигр и других цифровых продуктов, расскажем, как работать с большими данными, создавать ботов, обучать нейросети, программировать беспилотники и моделировать полеты дронов. Для самых активных и результативных предусмотрены тематические смены, уникальные курсы наставничества по разработке цифровых продуктов и стажировка в одной из крупнейших отечественных IT-компаний.
          </p>
          <div class="btn-clubs">
            <button class="btn-link-club">
              <RouterLink class="club-link" to="/liga-znaniy"><img class="logo-club" src="../assets/img/logo-liga-znaniy.png" alt="Лого Лига знаний"></RouterLink>
            </button>           
            <button class="btn-link-club">
              <RouterLink class="club-link" to="/orlyata"><img class="logo-club" src="../assets/img/orlyata-logo.svg" alt="Лого Орлята России"></RouterLink>
            </button>
            <button class="btn-link-club">
              <RouterLink class="club-link" to="/bolshaia-peremena"><img class="logo-club" src="../assets/img/logo-bolshaia-peremena.png" alt="Лого Большая Перемена"></RouterLink>
            </button>
          </div>
          <BtnLinkHome />
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
    min-width: calc(var(--index) * 20);
    border-radius: 30px;
}

.btn-clubs {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.logo-club{
  width: calc(var(--index) * 7);
}


.page-description{
  font-size: calc(var(--index) * 0.8);
  max-width: calc(var(--index) * 25);
}

</style>

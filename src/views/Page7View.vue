<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavSection from '../components/NavSection.vue'
import BtnLinkHome from '../components/BtnLinkHome.vue'

</script>

<template>
  <div class="about">
    
    <div class="page">
      <h3 class="title-link">ДОСТИГАЙ И ПОБЕЖДАЙ!</h3>
      <div class="page-content">
          <img class="icon-club" src="../assets/img/directions-07.f3343ae.png" alt="картнка 7">
        <div class="text-block">
          <p class="page-description">
            Для тех, кто любит постоянно быть в Движении, стремится быть сильным, смелым, побеждать в российских и международных соревнованиях – наш трек «Достигай и побеждай». Спортивные квесты и челленджи на улицах города и за его пределами от Движения и спортивных Федераций: на велосипедах, самокатах, лыжах, пешком, с геотрекером и увлекательными заданиями - это тренировка и игра одновременно. А для тех, кто дойдет до финала – участие в заезде или забеге в одной команде со звездами спорта. Но и это еще не все – участников ждут спортивные марафоны на ловкость, силу и выносливость, а еще мастер-классы, совместные тренировки и зарядки с сильнейшими спортсменами России.
          </p>
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
    width: calc(var(--index) * 30);
    border-radius: 30px;
}

.page-description{
  font-size: calc(var(--index) * 0.8);
  max-width: calc(var(--index) * 25);
}

</style>

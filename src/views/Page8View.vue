<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavSection from '../components/NavSection.vue'
import BtnLinkHome from '../components/BtnLinkHome.vue'

</script>

<template>
  <div class="about">
    
    <div class="page">
      <h3 class="title-link">БУДЬ ЗДОРОВ!</h3>
      <div class="page-content">
          <img class="icon-club" src="../assets/img/directions-08.ffb24b3.png" alt="картнка 8">
        <div class="text-block">
          <p class="page-description">
            Каждый мечтает быть энергичным, сильным, здоровым и дожить до ста лет. В нашем направлении «Будь здоров» у участников появится возможность открыть секреты правильного питания и эффективного сна, организовать настоящий фитнес-клуб в школе и поближе познакомиться с понятием «цифровая гигиена». Наши эксперты познакомят ребят с основами доврачебной помощи, научат ориентироваться на местности и быть готовыми всегда и в любой ситуации прийти на помощь к ближнему. Здоровый образ жизни — это тренд «Движения Первых»!
          </p>
          <div class="btn-clubs">
            <button class="btn-link-club">
              <RouterLink class="club-link" to="/vmeste"><img class="logo-club" src="../assets/img/vmeste_logoV2.png" alt="картинка 1"></RouterLink>
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
    width: calc(var(--index) * 30);
    border-radius: 30px;
}

.page-description{
  font-size: calc(var(--index) * 0.8);
  max-width: calc(var(--index) * 25);
}

</style>

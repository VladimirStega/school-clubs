<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavSection from '../components/NavSection.vue'
import BtnLinkHome from '../components/BtnLinkHome.vue'

</script>

<template>
  <div class="about">
    
    <div class="page">
      <h3 class="title-link">СЛУЖИ ОТЕЧЕСТВУ!</h3>
      <div class="page-content">
          <img class="icon-club" src="../assets/img/directions-06.4a7607b.png" alt="">
        <div class="text-block">
          <p class="page-description">
            «Патриотизм и историческая память» – одно из важнейших направлений работы в Движении. Любить свою Родину, беречь историческую память и защищать Отечество – главные принципы нашего направления. Участники смогут проверить свою ловкость и сноровку во Всероссийском военно-спортивном фестивале «Зарница», пройти все этапы от школы до уровня Всероссийского финала. А еще узнать о памятных датах и событиях России, о деятельности нашего направления от опытных экспертов и наставников, взять шефство над «Вечными огнями» и другими военными памятниками и получить паспорт в торжественной обстановке из рук общественного деятеля в сфере патриотического воспитания. Старшие участники смогут включиться в деятельность по сохранению правды о преступлениях против советского народа в годы Великой Отечественной войны – проекта «Без срока давности».
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

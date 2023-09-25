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
          <img class="icon-club" src="../assets/img/directions-03.ef31b8d.png" alt="">
        <div class="text-block">
          <p class="page-description">
            Труд сопровождает нас на протяжении всей жизни, наши достижения и успехи – это все результаты труда. «Движение Первых» обеспечит участникам массу возможностей для учебы, развития и строительства своей профессиональной траектории, а также сформирует реестр вакансий для твоего первого трудоустройства. Вместе с друзьями ты примешь участие в профессиональных пробах, пройдёшь стажировку в крупной компании и заработаешь свои первые деньги. Бизнес-марафоны, финансовые турниры, встречи с успешными предпринимателями и участие в ключевых экономических форумах страны – эти и другие инструменты развития собственных навыков ждут будущих бизнесменов и знатоков финансовой грамотности.
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

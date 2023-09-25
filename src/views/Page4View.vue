<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavSection from '../components/NavSection.vue'
import BtnLinkHome from '../components/BtnLinkHome.vue'

</script>

<template>
  <div class="about">
    
    <div class="page">
      <h3 class="title-link">СОЗДАВАЙ И ВДОХНОВЛЯЙ!</h3>
      <div class="page-content">
          <img class="icon-club" src="../assets/img/directions-04.da21e7e.png" alt="">
        <div class="text-block">
          <p class="page-description">
            Для тех, кто мечтает о большой сцене или об участии в ТВ-шоу – наше направление «Создавай и вдохновляй». В рамках трека у участников будет возможность изучить основы музыкального мастерства, создать собственную песню, принять участие в авторском мюзикле, стать автором сценариев, постановок и познакомиться с классическими и новыми формами театрального искусства. А еще – побывать на театральных фестивалях, организовать уличное театральное шествие или принять участие со своим коллективом в гастролях – здесь каждый найдет формат по душе. Для мастеров художественного слова мы предусмотрели литературный марафон, стажировки в издательствах и даже возможность впоследствии опубликовать свою работу. Для будущих дизайнеров, стилистов и фэшн-предпринимателей – курсы стиля и возможность создать школьную форму своей мечты, которая будет отшита и рекомендована к использованию в школах страны. 
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

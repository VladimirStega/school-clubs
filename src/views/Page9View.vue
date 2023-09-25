<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavSection from '../components/NavSection.vue'
import BtnLinkHome from '../components/BtnLinkHome.vue'

</script>

<template>
  <div class="about">
    
    <div class="page">
      <h3 class="title-link">РАССКАЖИ О ГЛАВНОМ!</h3>
      <div class="page-content">
          <img class="icon-club" src="../assets/img/directions-09.a9e61e7.png" alt="">
        <div class="text-block">
          <p class="page-description">
            Мы живем в динамичном информационном мире, где профессия журналиста и коммуникатора как никогда востребована. В нашем направлении «Расскажи о главном» у участников появится возможность вместе с командой освещать события Движения на разных уровнях, предлагать идеи для социальных сетей, СМИ и онлайн-шоу. Авторы самых интересных идей побывают в ведущих информационных агентствах России, на федеральных телеканалах и радиостанциях. Счастливчики примут участие в мастер-классах, тренингах и лекциях от лучших экспертов в сфере журналистики, блогинга, фотографии и видео. Участники направления получат пресс-карту и в качестве корреспондента поработают на федеральных мероприятиях, а у некоторых появится возможность опубликовать свои статьи в бортовых журналах ведущих перевозчиков страны. Также «Движением Первых» будет создана выездная МедиаЛабаратория, посетив которую в рамках интенсивов, команды региональных медиацентров смогут снять собственный видеоклип, организовать фотовыставку, а также разработать дизайн собственного сайта.
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

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavSection from '../components/NavSection.vue'
import BtnLinkHome from '../components/BtnLinkHome.vue'

</script>

<template>
  <div class="about">
    
    <div class="page">
      <h3 class="title-link">БЕРЕГИ ПЛАНЕТУ!</h3>
      <div class="page-content">
          <img class="icon-club" src="../assets/img/directions-11.67cc72c.png" alt="картнка 11">
        <div class="text-block">
          <p class="page-description">
            Всем важно, как выглядит мир вокруг нас. И в направлении «Береги планету» каждый участник Движения сможет на это повлиять. Мы создадим экологические отряды и проведем экологические мероприятия: квест-игры, уроки и викторины, ярмарки по обмену вещами и растениями, зеленые марафоны и плоггинги, займемся посадкой деревьев и помощью животным. Наш трек – это возможность перейти на зеленую сторону и поменять мир вокруг уже сейчас. Мы объединимся, чтобы взять под опеку редких животных и помочь четвероногим друзьям в приютах: собрать для них помощь и создать новые лежанки из старых ненужных вещей. Вместе мы создадим и восстановим экотропы в регионах, а самых активных исследователей отправим в научно-практические экспедиции, чтобы расширить знания и познакомить с природой ближе. Впереди – большой фотомарафон, который расскажет о богатстве флоры и фауны России, экологических проблемах и необходимости беречь природу нашей страны через искусство фотографии. Самые интересные снимки будут представлены на уличных фотовыставках в городах России.
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

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavSection from '../components/NavSection.vue'
import BtnLinkHome from '../components/BtnLinkHome.vue'

</script>

<template>
  <div class="about">
    
    <div class="page">
      <h3 class="title-link">ОТКРЫВАЙ СТРАНУ!</h3>
      <div class="page-content">
          <img class="icon-club" src="../assets/img/directions-12.d4aedc9.png" alt="">
        <div class="text-block">
          <p class="page-description">
            Настало время приключений, путешествий и походов! С нами каждый участник направления «Открывай страну» сможет по-новому открыть свой родной город. Но не за компьютером или в библиотеке, а в формате городской игры, проходя маршруты, отгадывая загадки и собирая артефакты. Не обойдётся и без гостевых визитов, поисковых экспедиций и археологических раскопок. С нами участники Движения научатся самостоятельно разрабатывать большие межрегиональные туристические маршруты, смогут отправиться в гости к друзьям из других регионов, увидеть древние крепости и принять участие в настоящей реконструкции сражения не только в фильмах, но и наяву. А еще в каждом городе мы определим места, где по-настоящему комфортно детям и молодежи, и где мы будем регулярно проводить наши встречи, вместе создадим почтовую марку «Движения Первых» и почтовые открытки, которые можно будет отправить друзьям из каждого города, а еще создадим музеи Движения в каждом первичном отделении. Коллекцию музея будут определять сами участники Движения –  артефакты и личные достижения, карты важных событий и мест, где они проводились, победы в наших конкурсах и проектах – все это займет достойное место в музеях «Движения Первых».
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

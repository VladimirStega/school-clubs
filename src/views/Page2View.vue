<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavSection from '../components/NavSection.vue'
import BtnLinkHome from '../components/BtnLinkHome.vue'

</script>

<template>
  <div class="about">
    
    <div class="page">
      <h3 class="title-link">ДЕРЗАЙ И ОТКРЫВАЙ!</h3>
      <div class="page-content">
          <img class="icon-club" src="../assets/img/directions-02.ade5afc.png" alt="картинка 2">
        <div class="text-block">
          <p class="page-description">
            Мир науки удивительный и захватывающий. Он выходит далеко за пределы школьной программы. «Движение Первых» поможет прикоснуться к науке и полюбить ее всем: от «начинающих» до уже «практикующих» ученых. У каждого желающего будет возможность посетить экскурсии на технологичных производствах и прослушать курсы лекций от именитых ученых. А во время каникул на базе ведущих вузов страны мы проведем Университетские смены. Наши научные проекты помогут воплотить и реализовать идеи участников или реализовать проведенные исследования, а также показать их другим – все это под руководством опытнейших наставников. Также у каждого желающего будет возможность посоревноваться в гонке коптеров, попробовать 3D-печать и погрузиться в мир VR.
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

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavSection from '../components/NavSection.vue'
import BtnLinkHome from '../components/BtnLinkHome.vue'

</script>

<template>
  <div class="about">
    
    <div class="page">
      <h3 class="title-link">БЛАГО ТВОРИ!</h3>
      <div class="page-content">
          <img class="icon-club" src="../assets/img/directions-05.3aeb6e3.png" alt="картнка 5">
        <div class="text-block">
          <p class="page-description">
            Знаете, что объединяет все направления работы в Движении? Наш трек «Благо твори». Ведь те или иные волонтерские активности есть в рамках каждого из направлений. Сейчас очень много людей, которые нуждаются в поддержке.  И мы в Движении активно включаемся в большие волонтерские проекты и стараемся изменить мир к лучшему – творить добро. Оно может быть разным. Восстановление объектов культурного наследия и помощь некоммерческим организациям в регионах России – одно из направлений волонтерства. И для того, чтобы оказать помощь в этой нелегкой задаче мы будем снимать и монтировать видеоконтент, разрабатывать дизайн афиш и баннеров, оформлять профили в социальных сетях. Научное волонтерство – тоже к нам! Мы будем собирать данные и проводить наблюдения для будущих великих открытий наших ученых. Для самых продвинутых – киберволонтерство. У участников будет возможность стать помощниками в оцифровке документов, создании цифровых материалов и веб-страниц, помогать пожилым людям пользоваться порталом Госуслуг. Отличный кейс для портфолио! Мы продолжим акции в рамках проекта #МыВместе.Дети, который уже объединил более 1 000 000 ребят по всей стране: будем оказывать адресную помощь и поддержку тем, кто в ней действительно нуждается. Нас ждет много добрых дел!
          </p>
          <div class="btn-clubs">
            <button class="btn-link-club">
              <RouterLink class="club-link" to="/delayi-dobro"><img class="logo-club" src="../assets/img/logo-delayi-dobro.png" alt="Лого Делай добро"></RouterLink>
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

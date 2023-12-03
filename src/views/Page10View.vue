<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavSection from '../components/NavSection.vue'
import BtnLinkHome from '../components/BtnLinkHome.vue'

</script>

<template>
  <div class="about">
    
    <div class="page">
      <h3 class="title-link">УМЕЙ ДРУЖИТЬ!</h3>
      <div class="page-content">
          <img class="icon-club" src="../assets/img/directions-10.372ee43.png" alt="картнка 10">
        <div class="text-block">
          <p class="page-description">
            Дети – прирожденные дипломаты, они открыты, искренни, для них нет границ. «Движение первых» ведет свою работу в международной сфере, организовывая детские и молодежные проекты, направленные на вовлечение детей к изучению основ международных отношений и дипломатии, а также проводит мероприятия со странами-партнерами Движения как на территории России, так и за рубежом! Движение активно ведет работу по поиску и установлению контактов с международными детскими и молодежными организациями зарубежных стран с целью углубления взаимопонимания между детскими и молодежными сообществами России и иностранных государств. Девиз международного направления «Движения первых» – «Умей дружить». Представители детских и молодежных сообществ-участников «Движения первых» уже успели доказать на деле, что дружба – это самый главный ресурс, и только вместе мы сможем добиться больших успехов.
          </p>
          <div class="btn-clubs">
            <button class="btn-link-club">
              <RouterLink class="club-link" to="/sodrygestvo"><img class="logo-club" src="../assets/img/logo-sodrygestvo.png" alt="Лого Медиацентр 47"></RouterLink>
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

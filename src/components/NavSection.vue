<script setup>
  import IconClub1 from '../components/icons/IcomClub1.vue'
  import IconClub2 from '../components/icons/IcomClub2.vue'
  import IconClub3 from '../components/icons/IcomClub3.vue'
  import IconClub4 from '../components/icons/IcomClub4.vue'
  import IconClub5 from '../components/icons/IcomClub5.vue'
  import IconClub6 from '../components/icons/IcomClub6.vue'
  import IconClub7 from '../components/icons/IcomClub7.vue'
  import IconClub8 from '../components/icons/IcomClub8.vue'
  import IconClub9 from '../components/icons/IcomClub9.vue'
  import IconClub10 from '../components/icons/IcomClub10.vue'
  import IconClub11 from '../components/icons/IcomClub11.vue'
  import IconClub12 from '../components/icons/IcomClub12.vue'
</script>

<template>
    <nav class="nav">
        <RouterLink class="club-link" to="/about">
          <img class="icon-club" src="../assets/img/directions-01.95e3898.png" alt="">
          <h3 class="title-link">УЧИСЬ И ПОЗНАВАЙ!</h3>
        </RouterLink>

        <RouterLink class="club-link" to="/about">
          <img class="icon-club" src="../assets/img/directions-02.ade5afc.png" alt="">
          <h3>ДЕРЗАЙ И ОТКРЫВАЙ!</h3>
        </RouterLink>

        <RouterLink class="club-link" to="/about">
          <img class="icon-club" src="../assets/img/directions-03.ef31b8d.png" alt="">
          <h3>НАЙДИ ПРИЗВАНИЕ!</h3>
        </RouterLink>

        <RouterLink class="club-link" to="/about">
          <img class="icon-club" src="../assets/img/directions-04.da21e7e.png" alt="">
          <h3>СОЗДАВАЙ И ВДОХНОВЛЯЙ!</h3>
        </RouterLink>

        <RouterLink class="club-link" to="/about">
          <img class="icon-club" src="../assets/img/directions-05.3aeb6e3.png" alt="">
          <h3>БЛАГО ТВОРИ!</h3>
        </RouterLink>

        <RouterLink class="club-link" to="/about">
          <img class="icon-club" src="../assets/img/directions-06.4a7607b.png" alt="">
          <h3>СЛУЖИ ОТЕЧЕСТВУ!</h3>
        </RouterLink>

        <RouterLink class="club-link" to="/about">
          <img class="icon-club" src="../assets/img/directions-07.f3343ae.png" alt="">
          <h3>ДОСТИГАЙ И ПОБЕЖДАЙ!</h3>
        </RouterLink>

        <RouterLink class="club-link" to="/about">
          <img class="icon-club" src="../assets/img/directions-08.ffb24b3.png" alt="">
          <h3>БУДЬ ЗДОРОВ!</h3>
        </RouterLink>

        <RouterLink class="club-link" to="/about">
          <img class="icon-club" src="../assets/img/directions-09.a9e61e7.png" alt="">
          <h3>РАССКАЖИ О ГЛАВНОМ!</h3>
        </RouterLink>

        <RouterLink class="club-link" to="/about">
          <img class="icon-club" src="../assets/img/directions-10.372ee43.png" alt="">
          <h3>УМЕЙ ДРУЖИТЬ!</h3>
        </RouterLink>

        <RouterLink class="club-link" to="/about">
          <img class="icon-club" src="../assets/img/directions-11.67cc72c.png" alt="">
          <h3>БЕРЕГИ ПЛАНЕТУ!</h3>
        </RouterLink>

        <RouterLink class="club-link" to="/about">
          <img class="icon-club" src="../assets/img/directions-12.d4aedc9.png" alt="">
          <h3>ОТКРЫВАЙ СТРАНУ!</h3>
        </RouterLink>
      </nav>
</template>

<style scoped>
  .nav {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-end;
    padding: calc(var(--index)) calc(var(--index) * 2);
  }

  .club-link {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: calc(var(--index) * 2) calc(var(--index));

  }

  .icon-club {
    max-width: calc(var(--index) * 15);
    border-radius: 30px;
    margin-bottom: calc(var(--index) * 1.5);
  }
</style>
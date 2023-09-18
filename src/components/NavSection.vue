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
          <IconClub1 class="icon-club" />
          <h2>Название клуба 1</h2>
        </RouterLink>

        <RouterLink class="club-link" to="/about">
          <IconClub2 class="icon-club" />
          <h2>Название клуба 2</h2>
        </RouterLink>

        <RouterLink class="club-link" to="/about">
          <IconClub3 class="icon-club" />
          <h2>Название клуба 3</h2>
        </RouterLink>

        <RouterLink class="club-link" to="/about">
          <IconClub4 class="icon-club" />
          <h2>Название клуба 4</h2>
        </RouterLink>

        <RouterLink class="club-link" to="/about">
          <IconClub5 class="icon-club" />
          <h2>Название клуба 5</h2>
        </RouterLink>

        <RouterLink class="club-link" to="/about">
          <IconClub6 class="icon-club" />
          <h2>Название клуба 6</h2>
        </RouterLink>

        <RouterLink class="club-link" to="/about">
          <IconClub7 class="icon-club" />
          <h2>Название клуба 7</h2>
        </RouterLink>

        <RouterLink class="club-link" to="/about">
          <IconClub8 class="icon-club" />
          <h2>Название клуба 8</h2>
        </RouterLink>

        <RouterLink class="club-link" to="/about">
          <IconClub9 class="icon-club" />
          <h2>Название клуба 9</h2>
        </RouterLink>

        <RouterLink class="club-link" to="/about">
          <IconClub10 class="icon-club" />
          <h2>Название клуба 10</h2>
        </RouterLink>

        <RouterLink class="club-link" to="/about">
          <IconClub11 class="icon-club" />
          <h2>Название клуба 11</h2>
        </RouterLink>

        <RouterLink class="club-link" to="/about">
          <IconClub12  class="icon-club"/>
          <h2>Название клуба 12</h2>
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
    margin: 2vw 4vw;
  }

  .icon-club {
    max-width: calc(var(--index) * 5);
  }
</style>
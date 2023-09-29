<template>
    <nav class="nav">
        <RouterLink class="club-link" to="/1">
          <img class="icon-club" src="../assets/img/directions-01.95e3898.png" alt="картинка 1">
          <h3 class="title-link">УЧИСЬ И ПОЗНАВАЙ!</h3>
        </RouterLink>

        <RouterLink class="club-link" to="/2">
          <img class="icon-club" src="../assets/img/directions-02.ade5afc.png" alt="картинка 2">
          <h3>ДЕРЗАЙ И ОТКРЫВАЙ!</h3>
        </RouterLink>

        <RouterLink class="club-link" to="/3">
          <img class="icon-club" src="../assets/img/directions-03.ef31b8d.png" alt="картинка 3">
          <h3>НАЙДИ ПРИЗВАНИЕ!</h3>
        </RouterLink>

        <RouterLink class="club-link" to="/4">
          <img class="icon-club" src="../assets/img/directions-04.da21e7e.png" alt="картинка 4">
          <h3>СОЗДАВАЙ И ВДОХНОВЛЯЙ!</h3>
        </RouterLink>

        <RouterLink class="club-link" to="/5">
          <img class="icon-club" src="../assets/img/directions-05.3aeb6e3.png" alt="картинка 5">
          <h3>БЛАГО ТВОРИ!</h3>
        </RouterLink>

        <RouterLink class="club-link" to="/6">
          <img class="icon-club" src="../assets/img/directions-06.4a7607b.png" alt="картинка 6">
          <h3>СЛУЖИ ОТЕЧЕСТВУ!</h3>
        </RouterLink>

        <RouterLink class="club-link" to="/7">
          <img class="icon-club" src="../assets/img/directions-07.f3343ae.png" alt="картинка 7">
          <h3>ДОСТИГАЙ И ПОБЕЖДАЙ!</h3>
        </RouterLink>

        <RouterLink class="club-link" to="/8">
          <img class="icon-club" src="../assets/img/directions-08.ffb24b3.png" alt="картинка 8">
          <h3>БУДЬ ЗДОРОВ!</h3>
        </RouterLink>

        <RouterLink class="club-link" to="/9">
          <img class="icon-club" src="../assets/img/directions-09.a9e61e7.png" alt="картинка 9">
          <h3>РАССКАЖИ О ГЛАВНОМ!</h3>
        </RouterLink>

        <RouterLink class="club-link" to="/10">
          <img class="icon-club" src="../assets/img/directions-10.372ee43.png" alt="картинка 10">
          <h3>УМЕЙ ДРУЖИТЬ!</h3>
        </RouterLink>

        <RouterLink class="club-link" to="/11">
          <img class="icon-club" src="../assets/img/directions-11.67cc72c.png" alt="картинка 11">
          <h3>БЕРЕГИ ПЛАНЕТУ!</h3>
        </RouterLink>

        <RouterLink class="club-link" to="/12">
          <img class="icon-club" src="../assets/img/directions-12.d4aedc9.png" alt="картинка 12">
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
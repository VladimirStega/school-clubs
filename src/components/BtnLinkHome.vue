<template>

      <RouterLink class="home-link" to="/">Перейти на главну страницу</RouterLink>

</template>

<style>


.btn-home a {
  color: #fff;
}

.home-link {
  padding: calc(var(--index) * .8) calc(var(--index) * 1.5);
  display: flex;
  justify-content: center;
  margin: calc(var(--index) * 1) 0;
  border: 2px solid #fff;
  border-radius: 35px;
  background-color: #007aff;
}
</style>
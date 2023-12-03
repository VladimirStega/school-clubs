<template>
    <button class="btn-home">
      <RouterLink class="home-link" to="/">Прейти на главну страницу</RouterLink>
    </button>
</template>

<style>
.btn-home{
  display: flex;
  justify-content: center;
  margin: calc(var(--index) * 1);
  border: 2px solid #fff;
  border-radius: 35px;
  background-color: #007aff;
}

.btn-home a {
  color: #fff;
}

.home-link {
  margin: calc(var(--index) * .8) calc(var(--index) * 1.5);
  display: flex;
  justify-content: center;
}
</style>
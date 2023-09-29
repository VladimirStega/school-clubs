<template>
    <div class="hero">
        <div class="title">
            <h1 class="main-title">Объединения "Движение первых"</h1>
        </div>
        <img class="hero-img-boy" src="../assets/img/Logo_of_the_Movement_of_the_First.svg" alt="Логотип">
    </div>
</template>

<style scoped>
    .main-title {
        color: #fff;
    }
    .hero {
        background-color: #E53130;
        overflow: hidden;
        padding: calc(var(--index) * 4) calc(var(--index) * 4);
        margin-top: calc(var(--index) * 2);
        margin-bottom: calc(var(--index) * 4);
        /* height: 100vh; */
        border-radius: 35px;
    }
    .hero-img-boy {
        width: calc(var(--index) * 10);
        position: relative;
        left: 60vw;

    }

    .title {
        position: absolute;
        top: 20vh;
    }

    .main-title {
        font-size: calc(var(--index) * 4);
        width: min-content;
        line-height: .9;
    }
</style>
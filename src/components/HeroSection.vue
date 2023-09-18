<template>
    <div class="hero">
        <div class="title">
            <h1 class="main-title">ШКОЛЬНЫЕ КЛУБЫ</h1>
            <p>Тут небольшое описание</p>
        </div>

        <img class="hero-img-toy" src="../assets/img/image-2.png" alt="">
        <img class="hero-img-boy" src="../assets/img/boy--open-book.png" alt="">
        <img class="hero-img-cactus" src="../assets/img/image-1.png" alt="">
    </div>
</template>

<style scoped>
    .hero {
        background-color: #F6F5F4;
        overflow: hidden;
        padding: 2vw 10vw;
        margin-bottom: 2vw;
        height: 100vh;
    }
    .hero-img-boy {
        width: calc(var(--index) * 15);
        position: relative;
        left: 50vw;

    }
    .hero-img-cactus {
        width: calc(var(--index) * 17);
        position: relative;
        left: 39vw;
        top: 5vw;
    }
    .hero-img-toy {
        width: calc(var(--index) * 4.5);
        position: relative;
        left: 54vw;
        top: -5vw;
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
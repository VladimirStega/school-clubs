<template>
    <div class="hero">
        <div class="title">
            <h1 class="main-title">ШКОЛЬНЫЕ КЛУБЫ</h1>
        </div>
        <img class="hero-img-boy" src="../assets/img/Logo_of_the_Movement_of_the_First.svg" alt="">

        <!-- <img class="hero-img-toy" src="../assets/img/image-2.png" alt="">
        <img class="hero-img-boy" src="../assets/img/boy--open-book.png" alt="">
        <img class="hero-img-cactus" src="../assets/img/image-1.png" alt=""> -->
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
    /* .hero-img-cactus {
        width: calc(var(--index) * 16);
        position: relative;
        left: 39vw;
        top: 5vw;
    }
    .hero-img-toy {
        width: calc(var(--index) * 4.5);
        position: relative;
        left: 54vw;
        top: -5vw;
    } */

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
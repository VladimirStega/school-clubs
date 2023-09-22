<template>
<div>
    <div class="footer">
        <a href="https://vk.com/mbousoch47" target="_blank">
            <img class="vk-link" src="../assets/img/VK_logo.svg" alt="">
        </a>
        <a href="https://xn--90acagbhgpca7c8c7f.xn--p1ai/" target="_blank">
            <img class="rddm-link" src="../assets/img/logo.svg" alt="">
        </a>
        
    </div>  
</div>
</template>

<style scoped>
.footer {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: calc(var(--index) * 4);
    padding: calc(var(--index) * 0.9);
    border-top-left-radius: 35px;
    border-top-right-radius: 35px;
    background-color: red;
}

.footer a {
    margin: 0 calc(var(--index) * 1.4);
}
.vk-link{
    width: calc(var(--index) * 2); 
    color: #fff;
}

.rddm-link {
    fill: #007aff;
}
</style>
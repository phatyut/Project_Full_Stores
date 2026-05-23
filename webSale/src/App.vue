<template>
<div class=" realtive w-screen h-screen bg-gradient-to-r from-[#0D52A0] via-[#036AE0] to-[#036AE0] flex flex-col">
    <div class="bg-transparent border border-blue-700 flex bg-white ">
        <div class="relative">
            <img src="../public/images/v380camera.png" alt="">
        </div>
        <div>
            <Menu></Menu>
        </div>
        <div><button class="btn-danger">clickme</button></div>
        <div class="card-shadow rounded-lg p-4 bg-white">
  Custom shadow card
</div>

    </div>
    <router-view></router-view>

</div>
</template>

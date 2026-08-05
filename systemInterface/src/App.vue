<template>
  <div class="relative w-screen h-screen">

        <div class="relative w-full h-[10%] md:h-[10%]  flex  items-center gap-2   md:bg-red-950 ">
            <Account />
        </div>
        <div class="relative w-full h-[90%] flex gap-0.5 text-amber-400  ">
            <div class="h-full bg-red-950/90" :class="app.setSize ? 'w-[13%] ' : 'w-[3.5%] md:w-[5%]'">
                <Menu />
            </div>
            <div class="relative h-full bg-red-950 w-full flex flex-col ">
                 <router-view />
            </div>
        </div>
        <!-- <div class=" z-100 w-screen h-screen bg-amber-300 top-0 right-0" style="position: absolute;"></div> -->
  
    </div>
</template>

<script setup>
import Account from './components/account/Account.vue'
import Menu from './components/menu/Menu.vue'
import { ref, provide } from 'vue'
import { app } from './sharingStatus/sharingStatus'

const checkusers = ref(0)
provide("users", checkusers)
</script>

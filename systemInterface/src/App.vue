<template>
  <div class="relative w-screen h-screen flex gap-0.5">
    <div class="h-full bg-white" :class="app.setSize ? 'w-[13%]' : 'w-[3.5%]'">
      <Menu />
    </div>
    <div class="relative h-full bg-red-950 w-full flex flex-col ">
      <div class="relative w-full h-[10%]  flex  items-center gap-2  p-4 bg-red-950 ">
        <Account />
      </div>
      <router-view />
    </div>
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

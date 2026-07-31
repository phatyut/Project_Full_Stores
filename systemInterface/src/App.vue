<template>
  <div class="relative w-screen h-screen flex gap-0.5">
    <div class="h-full bg-blue-900" :class="app.setSize ? 'w-[20%]' : 'w-[5%]'">
      <Menu />
    </div>
    <div class="relative h-full bg-amber-900 w-full">
      <router-view />
    </div>
  </div>
</template>
<script setup>
import { ref, provide } from 'vue'
import { app } from './sharingStatus/sharingStatus'
import Menu from './components/menu/Menu.vue'

const checkusers = ref(0)        // must be a ref
provide("users", checkusers) // provide the ref

</script>


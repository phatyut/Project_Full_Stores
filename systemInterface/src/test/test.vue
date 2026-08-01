<script setup>
import { inject } from 'vue'

const users = inject("users") // receives the ref
</script>

<template>
  <div class="relative bg-white flex justify-center items-center">

    <button @click="users++" class="relative bg-amber-950 text-white">{{ users }}</button>



    <div class="relative bg-gray-900 text-white p-4 rounded-md w-fit">
  <!-- Blue accent corner -->
  <div class="absolute top-0 left-0 w-2 h-2 bg-blue-500 rounded-tr-sm"></div>
  
  <!-- Text content -->
  <p>Crucial for user-centric design.</p>
</div>

  </div>
</template>

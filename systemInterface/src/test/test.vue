<script setup>
import { inject } from 'vue'

const users = inject("users") // receives the ref
</script>

<template>
  <div class="relative bg-white flex justify-center items-center">

    <button @click="users++" class="relative bg-amber-950 text-white">{{ users }}</button>
  </div>
</template>

<script setup>
import { inject } from 'vue'

const users = inject("users") // receives the ref
</script>

<template>
  <button @click="users++">{{ users }}</button>
</template>

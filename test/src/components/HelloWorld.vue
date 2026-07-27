<template>
  <div>
    <p>Injected message: {{ love }}</p>
    <button @click="love++">Change</button>
  </div>
</template>

<script setup>
import { inject } from 'vue'

const love = inject('love');
const couternumber = inject("couternumber");
</script>
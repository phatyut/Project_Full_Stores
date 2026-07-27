<template>
  <div class="border">This testing page in Vue</div>
  <HelloWorld />
  <div>{{ message }}</div>
</template>

<script setup>
import { ref, provide } from 'vue'
import HelloWorld from './components/HelloWorld.vue'

const message = ref(0);
const numbercouter=ref("I love you");
provide('love', message)
provide ("countnumber",numbercouter)
</script>
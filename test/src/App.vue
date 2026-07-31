<template>
  <div class="relative flex flex-col w-screen h-screen">
      <div class="relative w-full h-1/2 bg-blue-500 flex justify-center items-center">
            <div><button @click="this.test = !this.test">{{ test }}</button></div>

      </div>
      <div class="relative w-full h-1/2 bg-blue-400">
          <keepAlive>
              <component :is="this.test?'Testone':'Testtwo'"></component>
          </keepAlive>
      </div>
  </div>
</template>
<script>
import {ref} from "vue";
import Testone from "./components/testone/Testone.vue";
import Testtwo from "./components/testtwo/Testtwo.vue";
export default{
  components:{Testone,Testtwo},
  setup(){
    const test = ref(true)
    return {
      test

    }
  }
}
</script>
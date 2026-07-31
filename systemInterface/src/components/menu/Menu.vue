<template>
  <div class=" relative w-full h-full flex flex-col justify-between">
  <!-- store logo company -->

  <div class="relative w-full h-[20%] flex justify-center items-center ">
    <div class="relative h-[70px] w-[70px] border rounded-full" >
        <img src="../../../public/imgs/company.jpg" alt="">
    </div>
    
  </div>

    <!-- control event clicking -->

    <div class="relative bg-amber-900 h-full flex flex-col " >
      <!-- btn Home -->
        <div class="relative flex border border-blue-600 ">
            <p><font-awesome-icon icon="fa-solid fa-house" class="text-[40px]" /></p>
            <p><router-link to="/home">Home</router-link></p>
        </div>

        <router-link to="/view">view</router-link>
        <router-link to="/test">test</router-link>
        <router-link to="/setting">Setting</router-link>
        <router-link to="/products">Product</router-link>
        <router-link to="/users">Users</router-link>
     <!--  -->
    </div>
    <div class="relative w-full  bg-amber-400">
      <KeepAlive>
          <component :is="app.setSize ?'Testone':'Testtwo'"></component>
      </KeepAlive>
    </div>


<!-- button scar menu box -->

    <div class="relative  flex justify-end bg-linear-to-r from-transparent to-red-900/80 p-2 hover:cursor-pointer " @click="app.setSize = !app.setSize">
      <button class="relative hover:cursor-pointer  " >
        <font-awesome-icon icon="angles-left" :class="app.setSize?'rotate-0':'rotate-180'" class="text-white" />
      </button>
    </div>
    
  </div>
</template>

<script>
import { watch,computed } from "vue";
import { app } from "../../sharingStatus/sharingStatus";

// this block for testing 

import Testone from "../../test/testone/Testone.vue";
import Testtwo from "../../test/testtwo/Testtwo.vue";

export default {
  components:{Testone,Testtwo},
  setup() {

    // this block store in local marchine
    const getItems = localStorage.getItem("checklocal");
    if (getItems !== null) {
      app.setSize = JSON.parse(getItems);
    }

    watch(
      () => app.setSize,
      (val) => {
        localStorage.setItem("checklocal", JSON.stringify(val));
      }
    );


    // this block store component setSize

   

    return {
      app,
  
    };
  },
};
</script>

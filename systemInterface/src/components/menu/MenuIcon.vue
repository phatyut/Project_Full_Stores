<template>
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
</template>
<script>
import { app } from "../../sharingStatus/sharingStatus";
export default{
    setup(){
        return {

        }
    }
}

</script>
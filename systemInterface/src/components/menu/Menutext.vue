<template>
    <div class="relative  h-full flex flex-col gap-0.5 " >
      <!-- btn Home -->
       

        <router-link to="/home"  class="relative flex  items-center bg-red-950 rounded-md p-2 hover:cursor-pointer gap-2 text-[20px]"  title="View">
            <font-awesome-icon icon="fa-solid fa-house" class="text-[25px] text-amber-400" />
            <p class="text-amber-400 hover:text-amber-300 font-medium">Home</p>
        </router-link>
        <router-link to="/view"  class="relative flex  items-center bg-red-950 rounded-md p-2 hover:cursor-pointer gap-2 text-[20px]"  title="View">
            <font-awesome-icon icon="fa-solid fa-arrows-to-eye" class="text-[25px] text-amber-400" />
            <p class="text-amber-400 hover:text-amber-300 font-medium">View</p>
        </router-link>

        <router-link to="/products" class="relative flex  items-center bg-red-950 rounded-md p-2 hover:cursor-pointer gap-2 text-[20px]"  title="Test">
            <font-awesome-icon icon="fa-solid fa-bag-shopping" class="text-[25px] text-amber-400" />
            <p class="text-amber-400 hover:text-amber-300 font-medium">products</p>
        </router-link>

        <router-link to="/setting" class="relative flex  items-center bg-red-950 rounded-md p-2 hover:cursor-pointer gap-2 text-[20px]"  title="Setting">
            <font-awesome-icon icon="fa-solid fa-gear"  class="text-[25px] text-amber-400" />
            <p class="text-amber-400 hover:text-amber-300 font-medium">Setting</p>
        </router-link>
        <router-link to="/users" class="relative flex  items-center bg-red-950 rounded-md p-2 hover:cursor-pointer gap-2 text-[20px]"  title="Users">
            <font-awesome-icon icon="fa-solid fa-user" class="text-[25px] text-amber-400" />
            <p class="text-amber-400 hover:text-amber-300 font-medium">Users</p>
        </router-link>
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
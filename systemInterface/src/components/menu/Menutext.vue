<template>
    <div class="relative  h-full flex flex-col gap-0.5 *:md:text-[15px] *:hover:text-amber-400 text-amber-400/10" >
      <!-- btn Home -->
       

      <router-link to="/view"  class="relative flex  items-center bg-red-950 rounded-md p-2 hover:cursor-pointer gap-2 text-[20px]"  title="View">
          <font-awesome-icon icon="fa-solid fa-arrows-to-eye" class="text-[25px] text-amber-400 md:text-[20px]" />
          <p class="text-amber-400 hover:text-amber-300 font-medium">Dashboard</p>
      </router-link>
        <!-- <router-link to="/home"  class="relative flex  items-center bg-red-950 rounded-md p-2 hover:cursor-pointer gap-2 text-[20px]"  title="View">
            <font-awesome-icon icon="fa-solid fa-warehouse" class="text-[25px] text-amber-400 md:text-[20px]" />
            <p class="text-amber-400 hover:text-amber-300 font-medium">Home</p>
        </router-link>
         -->

        <router-link to="/products" class="relative flex  items-center bg-red-950 rounded-md p-2 hover:cursor-pointer gap-2 text-[20px]"  title="Test">
            <font-awesome-icon icon="fa-solid  fa-briefcase" class="text-[25px] text-amber-400 md:text-[20px]" />
            <p class="text-amber-400 hover:text-amber-300 font-medium">products</p>
        </router-link>

        <router-link to="/users" class="relative flex  items-center bg-red-950 rounded-md p-2 hover:cursor-pointer gap-2 text-[20px]"  title="Users">
            <font-awesome-icon icon="fa-solid fa-user" class="text-[25px] text-amber-400 md:text-[20px]" />
            <p class="text-amber-400 hover:text-amber-300 font-medium">Employee</p>
        </router-link>
        <router-link to="/stock" class="relative flex  items-center bg-red-950 rounded-md p-2 hover:cursor-pointer gap-2 text-[20px]"  title="Users">
            <font-awesome-icon icon="fa-solid fa-warehouse" class="text-[25px] text-amber-400 md:text-[20px]" />
            <p class="text-amber-400 hover:text-amber-300 font-medium">Stock</p>
        </router-link>
        <router-link to="/supplier" class="relative flex  items-center bg-red-950 rounded-md p-2 hover:cursor-pointer gap-2 text-[20px]"  title="Users">
            <font-awesome-icon icon="fa-solid fa-handshake" class="text-[25px] text-amber-400 md:text-[20px]" />
            <!-- <font-awesome-icon icon="fa-solid fa-handshake" /> -->
            <p class="text-amber-400 hover:text-amber-300 font-medium">Supplier</p>
        </router-link>
        <router-link to="/web" class="relative flex  items-center bg-red-950 rounded-md p-2 hover:cursor-pointer gap-2 text-[20px]"  title="Users">
            <font-awesome-icon icon="fa-solid fa-cloud" class="text-[25px] text-amber-400 md:text-[20px]" />
            <p class="text-amber-400 hover:text-amber-300 font-medium">Web</p>
        </router-link>
        
        <router-link to="/reports" class="relative flex  items-center bg-red-950 rounded-md p-2 hover:cursor-pointer gap-2 text-[20px]"  title="Users">
            <font-awesome-icon icon="fa-solid fa-file-pen" class="text-[25px] text-amber-400 md:text-[20px]" />
            <!-- <font-awesome-icon icon="fa-solid fa-file-pen" /> -->
            <p class="text-amber-400 hover:text-amber-300 font-medium">Reports</p>
        </router-link>
        
        <router-link to="/sale" class="relative flex  items-center bg-red-950 rounded-md p-2 hover:cursor-pointer gap-2 text-[20px]"  title="Users">
            <font-awesome-icon icon="fa-solid fa-circle-dollar-to-slot" class="text-[25px] text-amber-400 md:text-[20px]" />
            <p class="text-amber-400 hover:text-amber-300 font-medium">Sale</p>
        </router-link>
        <router-link to="/order" class="relative flex  items-center bg-red-950 rounded-md p-2 hover:cursor-pointer gap-2 text-[20px]"  title="Users">
            <font-awesome-icon icon="fa-solid fa-cart-plus" class="text-[25px] text-amber-400 md:text-[20px]" />
            <p class="text-amber-400 hover:text-amber-300 font-medium">Order</p>
        </router-link>
        <router-link to="/setting" class="relative flex  items-center bg-red-950 rounded-md p-2 hover:cursor-pointer gap-2 text-[20px]"  title="Setting">
            <font-awesome-icon icon="fa-solid fa-gear"  class="text-[25px] text-amber-400 md:text-[20px]" />
            <p class="text-amber-400 hover:text-amber-300 font-medium">Setting</p>
        </router-link>
     <!--  -->
    </div>
</template>
<script>

export default{
    setup(){
        return {

        }
    }
}

</script>
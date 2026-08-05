<template>
  <div class="relative w-full h-auto md:flex md:flex-col md:gap-8 p-4 overflow-y-scroll  scroll-smooth scrollbar-thin scrollbar-thumb-yellow-400 scrollbar-track-gray-900">
    <!-- Product view -->
      <div class="relative w-full h-auto rounded-md flex flex-col gap-4 px-2">
                  <ViewmainDate />
                  <ViewGraphAndTopProduct/>
      </div>
      <div class="  flex md:flex  md:px-2 relative w-full h-auto md:gap-6 *:md:rounded-md  ">
          <div class="relative flex w-[70%] gap-8" style="position:relative">
              <div class=" relative w-[60%] p-2 rounded-md  shadow-[0px_0px_3px] shadow-amber-400/80  ">
                <RecentOrder/>
              </div>
              <div class="relative w-[40%] bg-blue-400/20">two</div>
          </div>
            <div class="relative w-[30%] rounded-md  shadow-[0px_0px_3px] shadow-amber-400/80">
                  <Inventory/>
            </div>
      </div>
  </div>
</template>

<script>
import { ref, inject } from 'vue'
import ViewmainDate from "./ViewmainDate.vue";
import ViewGraphAndTopProduct from './viewGraphAndTopSale/ViewGraphAndTopProduct.vue';
import RecentOrder from './RecentOrder.vue'
import Inventory from './Inventory.vue';
export default {
  components: {
                  ViewmainDate,
                  ViewGraphAndTopProduct,
                  RecentOrder,
                  Inventory
            },
  setup() {
    const users = inject("users")
    return {  users }
  }
}
</script>

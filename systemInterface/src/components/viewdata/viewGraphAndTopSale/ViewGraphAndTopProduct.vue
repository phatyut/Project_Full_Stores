<template>
<div class="relative w-full h-auto bg-red-950/70 flex gap-6 rounded-md">
        <!-- Left section -->
        <div class="relative w-[65%] h-full px-4 py-2 inset-shadow-[0px_0px_1px_rgba(255,255,0,1)] z-10 rounded-md shadow-[0px_0px_1px] shadow-amber-400">      
            <Graph></Graph>
        </div>
        <!-- Right section -->
        <div class="relative w-[35%]  py-2 px-3 inset-shadow-[0px_0px_2px_rgba(255,255,0,.5)] z-10 rounded-md flex flex-col shadow-[0px_0px_1px] shadow-amber-400">
                  <div class="flex">
                    <div class="relative md:w-[160px] md:h-[100px]  bg-transparent py-2 px-4 flex flex-col justify-center items-center rounded-md  inset-shadow-[4px_4px_10px_rgba(10,0,0,1)] shadow-[2px_2px_0px] shadow-amber-400/70 " >
                        <div  class="relative w-[100px] h-[100px] rounded-full flex flex-col justify-center items-center overflow-hidden" >
                        <div class="relative w-full  flex justify-center md:text-4xl md:font-extrabold items-center z-10">
                             {{ users }}
                        </div>
                        <!-- <div class=" bottom-0 w-full   z-0" 
                             style="position: absolute;"
                            :style="{height :users > 0 ? users + 'px' : '0px' , backgroundColor: users > 50 ? 'red':'green'}">  
                        </div> -->
                        </div>
                        <div class=" *:z-10 *:text-[15px] text-amber-400/50 font-serif">
                            <p>Low Stock Items</p>
                        </div>
                  </div> 
                  <div class="relative md:w-[160px] md:h-[100px]  bg-transparent py-2 px-4 flex flex-col justify-center items-center rounded-md  inset-shadow-[4px_4px_10px_rgba(10,0,0,1)] shadow-[2px_2px_0px] shadow-amber-400/70 " >
                        <div  class="relative w-[100px] h-[100px] rounded-full flex flex-col justify-center items-center overflow-hidden" >
                        <div class="relative w-full  flex justify-center md:text-4xl md:font-extrabold items-center z-10">
                             {{ users }}
                        </div>
                        <!-- <div class=" bottom-0 w-full   z-0" 
                             style="position: absolute;"
                            :style="{height :users > 0 ? users + 'px' : '0px' , backgroundColor: users > 50 ? 'red':'green'}">  
                        </div> -->
                        </div>
                        <div class=" *:z-10 *:text-[15px] text-amber-400/50 font-serif">
                            <p>Low Stock Items</p>
                        </div>
                  </div> 
                </div>
                  <TopSaleProduct></TopSaleProduct>
            </div>

      </div>
</template>
<script>
import {ref} from "vue"
import TopSaleProduct from "./TopSaleProduct.vue"
import Graph from "./Graph.vue"
export default{
      components:{
            TopSaleProduct,
            Graph
      },
    setup(){
        return {
        }
    }
}
</script>
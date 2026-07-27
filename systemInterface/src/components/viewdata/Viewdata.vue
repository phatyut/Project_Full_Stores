<template>
  <div class="relative w-full h-full p-2">
    <div class="relative w-full h-auto bg-gray-400/50 rounded-md flex flex-col gap-8 p-2">

      <div class="relative flex justify-center items-center ">
            <p class="bg-white font-extrabold "
                style="border-">
                    Product
            </p>
      </div>
    
      <div class="relative flex  items-center  justify-around gap-2" 
           style="">
           <div class=" bg-white py-2 px-4 flex flex-col justify-center items-center" 
                style="">
                <div  class="relative w-[100px] h-[100px] rounded-full flex flex-col justify-center items-center overflow-hidden" 
                      style="border:2px solid red;">
                          <div class="relative w-full  flex justify-center items-center z-10">
                              {{ users }}
                          </div>
                          <div class=" bottom-0 w-full   z-0" 
                              style="position: absolute;"
                              :style="{height :users > 0 ? users + 'px' : '0px' , backgroundColor: users > 50 ? 'red':'green'}">
                              
                          </div>
                </div>
                <div>
                  <p>Products</p>
                </div>
           </div>

           <div class=" bg-white" style="border :1px solid blue">
                <div  class="relative w-[100px] h-[100px] rounded-full flex flex-col justify-center items-center overflow-hidden" 
                      style="border:2px solid red">
                          <div class="relative w-full  flex justify-center items-center z-10">
                              {{ users }}
                          </div>
                          <div class=" bottom-0 w-full   z-0" 
                              style="position: absolute;"
                              :style="{height :users > 0 ? users + 'px' : '0px' , backgroundColor: users > 50 ? 'red':'green'}">
                              
                          </div>
                </div>
                <div>
                  <p>Products</p>
                </div>
           </div>

      </div>
     



     
    </div>

    
  </div>
</template>

<script setup>
import { ref, inject } from 'vue'
const users = inject("users")
</script>

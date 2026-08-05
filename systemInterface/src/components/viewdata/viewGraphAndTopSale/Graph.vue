<template>
     <div class="relative flex flex-col gap-5">
            <div class="relative flex h-full">
                  <div class="flex flex-col w-[50%]">
                        <p class="font-bold text-[20px]">Stock Overview</p>
                        <p>Stock Level & Sale Trends </p>
                  </div>

                  <div class="relative w-full h-13 md:flex md:items-center  md:justify-end md:m-5  md:gap-5 ">
                        <div class="relative flex p-3 gap-5 inset-shadow-[1px_1px_5px_rgba(0,0,0,.1)]">
                              <div class="relative flex justify-center items-center gap-2">
                                    <div class=" relative w-[15px] h-[15px] bg-green-400/50 rounded-full"></div>
                                    <div class="">Sale</div>
                              </div>
                              <div class="relative flex justify-center items-center gap-2">
                                    <div class=" relative w-[15px] h-[15px] bg-gray-400 rounded-full"></div>
                                    <div class="">Sale</div>
                              </div>
                        </div>
                        <div class=" relative flex justify-center items-center inset-shadow-[0px_.5px_0px_rgba(255,255,0,1)] py-1 px-2">
                              <div class="relative ">
                                    2026
                              </div>
                        </div>
                  </div>
            </div>

            <div class="relative w-full h-full flex flex-col gap-1">
              <div 
                        class="flex gap-2 items-center" 
                        v-for="(test, index) in testing" :key="index">
                  <div class="relative w-[5%] h-10 flex flex-col justify-end  items-end" >{{ test }}</div>
                  <div class="relative flex flex-col w-[95%]">
                        <div 
                              class="relative md:w-[670px] h-10 bg-gradient-to-t from-transparent to-amber-400/5" 
                              style="border-bottom: 1px dotted gray;">
                        </div>
                  </div>
              </div>



              <div class="flex gap-2 items-center" >
                <div class="relative w-[5%] flex flex-col text-end" ></div>
                <div class="relative flex flex-col w-full">
                  <div class="relative flex md:w-[670px] h-10 md:grid md:grid-cols-12 *:md:flex *:md:justify-center *:md:items-start  gap-2" >
                        <p>1</p>
                        <p>2</p>
                        <p>3</p>
                        <p>4</p>
                        <p>5</p>
                        <p>6</p>
                        <p>7</p>
                        <p>8</p>
                        <p>9</p>
                        <p>10</p>
                        <p>11</p>
                        <p>12</p>
                  </div>
                </div>
              </div>


            </div>
          </div>
</template>
<script>
import {ref} from "vue"
export default{
     setup(){
            const testing = ref([2000, 1500,1000,500,0])
        return {
            testing
        }
    }
}
</script>
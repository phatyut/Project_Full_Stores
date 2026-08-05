<template>
    <div class="relative flex w-full h-full  items-center  justify-between gap-8 px-5 pt-5 pb-3  bg-red-950/70 rounded-md  inset-shadow-[4px_4px_8px_rgba(0,0,100,0.1)] z-10" >
              <div class="relative flex md:grid  w-[50%] md:w-full h-auto md:h-auto md:grid-cols-6 gap-8  " >   
                
                
                  <div class=" relative md:w-[160px] md:h-[100px]  bg-transparent py-2 px-4 flex flex-col justify-center items-center rounded-md  inset-shadow-[4px_4px_10px_rgba(10,0,0,1)] shadow-[2px_2px_0px] shadow-pink-400/70  " >
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
                            <p>Total Products</p>
                        </div>
                         <div class=" bottom-0 w-full   z-0" 
                             style="position: absolute;"
                            :style="{height :users > 0 ? users + 'px' : '0px' , backgroundColor: users > 50 ? 'red':'black'}">  
                        </div>
                  </div> 

                  <div class=" relative md:w-[160px] md:h-[100px]  bg-transparent py-2 px-4 flex flex-col justify-center items-center rounded-md  inset-shadow-[4px_4px_10px_rgba(10,0,0,1)] shadow-[2px_2px_0px] shadow-green-400/50  " >
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
                            <p> Stock Items</p>
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


                  <div class=" relative md:w-[160px] md:h-[100px]  bg-transparent py-2 px-4 flex flex-col justify-center items-center rounded-md  inset-shadow-[4px_4px_10px_rgba(10,0,0,1)] shadow-[2px_2px_0px] shadow-red-400/50 " >
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
                            <p>Host To Web</p>
                        </div>
                  </div>


                  <div class=" relative md:w-[160px] md:h-[100px]  bg-transparent py-2 px-4 flex flex-col justify-center items-center rounded-md  inset-shadow-[4px_4px_10px_rgba(10,0,0,1)] shadow-[2px_2px_0px] shadow-gray-400/50 " >
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
                            <p>Supplier</p>
                        </div>
                  </div>
                  
                  
                  <div class=" relative md:w-[160px] md:h-[100px]  bg-transparent py-2 px-4 flex flex-col justify-center items-center rounded-md  inset-shadow-[4px_4px_10px_rgba(10,0,0,1)] shadow-[2px_2px_0px] shadow-amber-400/50 " >
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
                            <p>Employee</p>
                        </div>
                  </div> 


                  
              
              
            </div>
                
                
            <div class="relative w-[50%] h-52 bg-amber-300 md:hidden">teswt</div>
          </div>

</template>
<script>
import { ref, inject } from 'vue'
export default{
    setup(){
        const users = inject("users")
        return {
           users 
        }
    }
}
</script>   
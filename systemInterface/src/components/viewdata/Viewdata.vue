<template>
  <div class="relative w-full h-full p-2">
    <!-- This block controls the product view -->
      <div class="relative w-full h-auto  rounded-md flex flex-col gap-0 p-2 " >

          <div class="relative flex  items-center ">
                <p class=" font-extrabold p-2 rounded-md text-lg text-amber-400 text-2xl" >
                        Product
                </p>
          </div>

        <!-- controll product view -->
          <div class="relative flex  items-center  justify-between gap-8 border-2 p-10 bg-amber-500 rounded-md  inset-shadow-[4px_4px_8px_rgba(0,0,100,0.1)] " >
              <div class="relative flex w-[50%] h-auto gap-8  " >   
                
                
                  <div class="  bg-transparent py-2 px-4 flex flex-col justify-center items-center rounded-md shadow-lg inset-shadow-[4px_4px_10px_rgba(10,0,0,1)] " >
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
                            <p>all</p>
                        </div>
                  </div> 

                  <div class="  bg-transparent py-2 px-4 flex flex-col justify-center items-center rounded-md shadow-lg inset-shadow-[4px_4px_10px_rgba(10,0,0,1)] " >
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
                            <p>Low</p>
                        </div>
                  </div> 


                  <div class="  bg-transparent py-2 px-4 flex flex-col justify-center items-center rounded-md shadow-lg inset-shadow-[4px_4px_10px_rgba(10,0,0,1)] " >
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
                            <p>host</p>
                        </div>
                  </div> 


                  <div class="  bg-transparent py-2 px-4 flex flex-col justify-center items-center rounded-md shadow-lg inset-shadow-[4px_4px_10px_rgba(10,0,0,1)] " >
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


                  <div class="  bg-transparent py-2 px-4 flex flex-col justify-center items-center rounded-md shadow-lg inset-shadow-[4px_4px_10px_rgba(10,0,0,1)] " >
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
              
              
            </div>
                
                
            <div class="relative w-[50%] h-auto bg-amber-300">teswt</div>
          </div>
      
  
      </div>

    
  </div>
</template>

<script >
import { ref, inject } from 'vue'
import ViewProduct from './ViewProduct.vue'
export default{
  components:{
    ViewProduct
  },  
  setup(){
    const users = inject("users")
    return {
      users
    }
  }
}
</script>

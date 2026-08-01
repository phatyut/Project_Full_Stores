<template>
        <div class="relative w-full h-full bg-white p-2 flex justify-between items-center rounded-md">
            <div>

                Account {{ account.viewModeColor }}
            </div>
            

            <div class="relative w-auto h-full flex  items-center gap-8 ">              

                <!-- this block move view backgroun color -->
                <div class="realative w-[50px] h-[25px] bg-red  -950 px-1 rounded-full inset-shadow-[2px_2px_10px_rgba(0,0,0,.5)] flex  items-center gap-2">
                    <div class="relative w-[20px] h-[20px] bg-amber-400 rounded-full inset-shadow-[2px_2px_10px_rgba(0,0,0,.5)]"></div>
                </div>

                <!--  this logout button -->
                <div class="relative flex gap-2 justify-center items-center bg-red-950 rounded-md p-2 hover:cursor-pointer *:cursor-pointer" title="Logout">
                    <button class="text-amber-400">Logout</button>
                    <font-awesome-icon icon="fa-solid fa-right-from-bracket" class="text-amber-400 " />
                </div>
                
            </div>
        </div>
</template>
<script>
import {account} from "../../sharingStatus/sharingStatus";
export default{
    setup(){
        return {
            account

        }
    }
}
</script>
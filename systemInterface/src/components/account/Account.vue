<template>
<div class="relative w-full h-full bg-gray-950/10 p-2 flex justify-between items-center rounded-md">
    <div>
        <div>
            <p class="text-amber-400 font-semibold md:text-2xl">MS Stock</p>
        </div>

        <!-- Account {{ account.viewModeColor }} -->
        <!-- <div class="relative w-full h-[20%] flex justify-center items-center ">
            <div class="relative h-[70px] w-[70px] border rounded-full">
                <img src="../../../public/imgs/company.jpg" alt="">
            </div>

        </div> -->
    </div>

    <div class="relative w-auto h-full flex  items-center gap-8 ">
        <button> <font-awesome-icon icon="fa-solid fa-bell" class="text-amber-400" /></button>
        <button><font-awesome-icon icon="fa-solid fa-envelope" class="text-amber-400" /></button>

        <!-- this block move view backgroun color -->
        <button @click="">
            <div class="realative w-[50px] h-[25px] hover:cursor-pointer bg-red  -950 px-1 rounded-full inset-shadow-[2px_2px_10px_rgba(0,0,0,1)] flex  items-center gap-2">
                <div class="relative w-[20px] h-[20px] bg-amber-400 rounded-full inset-shadow-[2px_2px_10px_rgba(0,0,0,.5)]"></div>
            </div>
        </button>

        <!--  this logout button -->
        <div class="relative flex gap-2 justify-center items-center bg-red-950 rounded-md p-2 hover:cursor-pointer *:cursor-pointer" title="Logout">
            <button class="text-amber-400">Logout</button>
            <font-awesome-icon icon="fa-solid fa-right-from-bracket" class="text-amber-400 " />
        </div>

    </div>
</div>
</template>

<script>
import {
    account
} from "../../sharingStatus/sharingStatus";
export default {
    setup() {
        return {
            account

        }
    }
}
</script>

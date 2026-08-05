<template>
    <div class="p-4  text-[20px] flex flex-col gap-6">
        <div>
            <p class="font-semibold">Inventory Status</p>
        </div>
        <div class="relative flex-col flex gap-2 *:px-2 md:*:py-1 md:*:rounded-md  ">
            <div class="shadow-[0px_0px_2px] shadow-amber-400/70   md:grid md:grid-cols-3">
                <div class="flex justify-between items-center gap-8">
                    <font-awesome-icon icon="fa-solid fa-arrow-up-from-ground-water" class="text-amber-400/80" />
                    <p class=" text-[17px] text-amber-400/70"> InStock</p>
                </div>
                <div></div>
                <div class="relative flex  gap-2 justify-center items-center">
                    <p class=" underline font-bold text-[18px]">1000</p>
                    <p class="text-[15px] text-amber-400/70 ">items</p>
                </div>
            </div>
            <div class="0 md:grid md:grid-cols-3 shadow-[0px_0px_2px] shadow-green-400/70">
                <div class="flex justify-between items-center gap-8">
                    <font-awesome-icon icon="fa-solid fa-arrow-up-from-ground-water"  class=" rotate-180 text-amber-400/70"/>
                    <p class=" text-[17px] text-amber-400/70"> OutStock</p>
                </div>
                <div></div>
                <div class="relative flex  gap-2 justify-center items-center">
                    <p class=" underline font-bold text-[18px]">1000</p>
                    <p class="text-[15px] text-amber-400/70 ">items</p>
                </div>
            </div>
            <div class=" md:flex gap-4 shadow-[0px_0px_2px] shadow-pink-400/70">
                <div class="flex justify-between items-center gap-8 ">
                    <font-awesome-icon icon="fa-solid fa-hourglass-half"  class=" rotate-180 text-amber-400/70"/>
                    <p class=" text-[17px] text-amber-400/70"> Pending-Restock</p>
                </div>
                
                <div class="relative flex  gap-2 justify-center items-center">
                    <p class=" underline font-bold text-[18px]">1000</p>
                    <p class="text-[15px] text-amber-400/70 ">order</p>
                </div>
            </div>

        </div>
    </div>
</template>
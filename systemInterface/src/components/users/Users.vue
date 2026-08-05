<template>
    <div class="relative w-full flex flex-col h-full px-4 gap-4 ">
        <div class=" font-semibold text-[20px] border-dotted-yellow py-4 inset-shadow-[0px_-1px_0px_rgba(255,255,0,1)] ">Employee</div>   
        
        <div class="relative w-full h-auto flex gap-2">
            <div class="relative bg-red-950 px-2 py-1 rounded-md flex *:hover:cursor-pointer justify-center items-center inset-shadow-[0px_0px_3px_rgba(0,0,0,1)] shadow-[0px_0px_5px] shadow-amber-300 ">
                <font-awesome-icon icon="fa-solid fa-square-plus" />
                <button class=" flex justify-center items-center px-2 py-1">Add User </button>
            </div>

            <button class="relative bg-red-950 px-2 py-1 rounded-md flex *:hover:cursor-pointer justify-center items-center inset-shadow-[0px_0px_3px_rgba(0,0,0,1)] shadow-[0px_0px_5px] shadow-amber-300 ">
                <p><font-awesome-icon icon="fa-solid fa-file-arrow-down "  /> Export User</p>
                <p></p>
            </button>
        </div>
        
        
    </div>
    
</template>
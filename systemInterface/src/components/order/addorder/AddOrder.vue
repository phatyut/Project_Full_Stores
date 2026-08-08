<template>
<div class="relative bg-amber-950/95 w-full h-full flex px-24 py-2 " style="position: relative;">

    <div class="relative w-full l h-full    " style="position: relative;">
        <div class="w-full h-full flex flex-col ">

            <div class=" flex flex-col bg-gray-95x0/20 h-full shadow-[0px_0px_3px]  shadow-amber-400 rounded-md p-4 pb-0 ">
                <div class="pb-4 font-semibold text-[18px]">Import Product</div>
                <form action="" class="*:text-amber-500/90">
                    <div class=" flex flex-col gap-4 w-full h-full" style="position: relative;">

                        <div class="relative w-full  flex h-full md:*:flex-col md:grid md:grid-cols-4 md:gap-4  ">
                            <div class="flex gap-1.5">
                                <lable class="md:text-[15px]">Supplier</lable>
                                <input type="text" class=" outline outline-none   rounded-md shadow-[0px_0px_3px] p-1.5">
                            </div>
                            <div class="flex gap-1.5">
                                <lable class="md:text-[15px]">Invoice number</lable>
                                <input type="text" class=" outline outline-none   rounded-md shadow-[0px_0px_3px] p-1.5">
                            </div>
                            <div class="flex gap-1.5">
                                <lable class="md:text-[15px]">Import date</lable>
                                <input type="Date" class=" outline outline-none text-amber-400 custom-date  rounded-md shadow-[0px_0px_3px] p-1.5">
                            </div>
                            <div class="flex gap-1.5">
                                <lable class="md:text-[15px]">Status</lable>
                                <input type="date" class="outline outline-none text-amber-500 rounded-md shadow-[0px_0px_3px] p-1.5 custom-date" />

                            </div>

                        </div>

                        <div class="relative flex  gap-4  h-auto w-full ">
                            <div class="w-[40%] flex-col flex gap-4">
                                <div class="flex flex-col gap-1">
                                    <!-- <lable class="md:text-[15px]">note</lable> -->
                                    <textarea class=" outline outline-none w-full h-10 md:min-h-10 md:max-h-20  rounded-md shadow-[0px_0px_3px] px-2 py-2" placeholder="note here ..."></textarea>
                                </div>
                                <div class=" flex  text-amber-400 text-[18px] py-1 font-semibold">
                                    <p class="">
                                        Product detail
                                    </p>
                                </div>
                                <div class="relative flex flex-col rounded-md shadow-[0px_0px_4px] p-3 shadow-amber-400 gap-2">
                                    <div class=" flex flex-col gap-2 ">
                                        <div class="flex flex-col gap-1.5">
                                            <lable class="md:text-[15px]">Product Code</lable>

                                            <input type="text" class="rounded-md shadow-[0px_0px_2px] shadow-amber-400 p-1.5">
                                        </div>
                                        <div class="flex md:gap-3.5  " style="position: relative;">
                                            <div class="flex flex-col gap-1.5 w-[48%]">
                                                <lable class="md:text-[15px] ">Quantity</lable>
                                                <input type="text" class=" outline outline-none   rounded-md shadow-[0px_0px_3px] p-1.5">

                                            </div>
                                            <div class="flex flex-col  gap-1.5  w-[48%]">
                                                <lable class="md:text-[15px]">Unit price</lable>
                                                <input type="text" class=" outline outline-none   rounded-md shadow-[0px_0px_3px] p-1.5">

                                            </div>
                                        </div>
                                        <div class="relative w-full flex justify-end  items-center pt-3">
                                            <button class="md:text-[15px]  py-1 px-5 font-semibold bg-amber-500/80 rounded-md text-red-950">Add</button>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div class="w-[60%] h-full flex flex-col gap-2 ">
                                <div>

                                    <table border="1" class="shadow-[0px_0px_2px] w-full h-auto rounded-md overflow-hidden bg-amber-950  ">
                                        <thead class="">
                                            <tr class="relative bg-amber-500/80 *:text-amber-950  w-full h-auto *:p-2.5 shadow-[0px_0px_3px] text-[13px] *:text-start">
                                                <th class="">image</th>
                                                <th>Product</th>
                                                <th>Unit price </th>
                                                <th>Qty</th>
                                                <th>Tatal</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr class="*:p-2.5 hover:bg-amber-500/80 hover:text-amber-950 ">
                                                <td>one</td>
                                                <td>one</td>
                                                <td>one</td>
                                                <td>one</td>
                                                <td>one</td>
                                                <td class="px-4 py-3 w-[10%] flex  items-center gap-2  w-full">
                                                    <button class=" text-red-600/50">
                                                        <font-awesome-icon icon="fa-solid fa-trash-can" />
                                                    </button>
                                                </td>
                                            </tr>
                                            <tr class="*:p-2.5 hover:bg-amber-400/20 hover:text-amber-950 ">
                                                <td>one</td>
                                                <td>one</td>
                                                <td>one</td>
                                                <td>one</td>
                                                <td>one</td>
                                                <td class="px-4 py-3 w-[10%] flex  items-center gap-2  w-full">
                                                    <button class=" text-red-600/50">
                                                        <font-awesome-icon icon="fa-solid fa-trash-can" />
                                                    </button>
                                                </td>
                                            </tr>
                                            
                                           
                                        </tbody>
                                    </table>
                                </div>
                                <div class="flex justify-end items-center">
                                    <div class="rleative w-ful gap-4 flex ">
                                        <div class="   flex justify-center items-center  rounded-md *:font-semibold">
                                            <button class="text-[15px] py-1 rounded-md px-3 bg-gray-500 text-amber-500/50 shadow-[0px_0px_2px] shadow-gray-500">Cancel</button>
                                        </div>
                                        <div class=" rounded-md *:font-semibold ">
                                            <button class="text-[15px] py-1 rounded-md px-4 bg-amber-500 text-amber-950 shadow-[0px_0px_4px] shadow-amber-500">Save</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>

    </div>
</div>
</template>

<template>
<div class="relative w-full h-auto flex flex-col px-4 pt-2 gap-2" v-if="products.addproduct">
    <div class="relative py-2  w-full h-auto flex justify-between rounded-md">
        <div class="font-bold text-[18px]">Product</div>
        <div>
            <button class="text-[14px] font-semibold shadow-[0px_1px_2px] p-2 rounded-md ">Add Product</button>
        </div>
    </div>

    <div class="relative h-full rounded-md shadow-[0px_0px_5px] gap-4 flex flex-col p-3 " style="position: relative;">
        <div class="relative flex justify-between items-center ">
            <div class="shadow-[0px_1px_0px,0px_-1px_0px]  *:px-2 *:py-1  outline outline-none">
                <select name="" id="" class="*:p-2">
                    <option value="10" disabled> select</option>
                    <option value="10">10</option>
                    <option value="20">20</option>
                </select>
            </div>
            <div>
                <input type="text" class="md:w-[250px] h-[40px] px-2  outline outline-none shadow-[0px_0px_3px] shadow-amber-300 rounded-md" placeholder="Search here...">
            </div>
        </div>
        <table class="min-w-full shadow-[0px_0px_1px] shadow-amber-400 p-2 rounded-md overflow-hidden ">
            <thead class="  w-full ">
                <tr class="*:text-[13px] *:py-3 *:font-bold bg-amber-600/50 ">
                    <th class=" py-2 text-start pl-2 w-[10%]">Images</th>
                    <th class=" py-2 text-start pl-2 w-[15%] ">Name</th>
                    <th class=" py-2 text-start pl-2 w-[10%]">Code</th>
                    <th class=" py-2 text-start pl-2 w-[15%] ">Category</th>
                    <th class=" py-2 text-start pl-2  w-[10%]">Cost Price</th>
                    <th class=" py-2 text-start pl-2  w-[10%] ">Sale Price</th>
                    <th class=" py-2 text-start pl-2 w-[10%]">Current Stock</th>
                    <th class=" py-2 text-start pl-2 w-[5%] ">Action</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(product, index) in products" :key="index" class="  inset-shadow-[0px_-1px_0px] inset-shadow-amber-950 hover:bg-gray-600/50">
                    <td class="px-4 py-3 w-[10%]">{{ product.name }}1</td>
                    <td class="px-4 py-3 w-[15%]">{{ product.price }}1</td>
                    <td class="px-4 py-3 w-[10%]">{{ product.stock }}1</td>
                    <td class="px-4 py-3 w-[15%]">{{ product.stock }}1</td>
                    <td class="px-4 py-3 w-[10%]">{{ product.stock }}1</td>
                    <td class="px-4 py-3 w-[10%]">{{ product.category }}1</td>
                    <td class="px-4 py-3 w-[10%]">{{ product.description }}1</td>
                    <td class="px-4 py-3 w-[10%] flex  items-center gap-2  w-full">
                        <button class=" text-gray-400 mr-2" @click="editProduct(index)">
                            <font-awesome-icon icon="fa-solid fa-pen-fancy" />
                        </button>
                        <button class=" text-red-600/50" @click="deleteProduct(index)">
                            <font-awesome-icon icon="fa-solid fa-trash-can" />
                        </button>
                    </td>
                </tr>
                <tr v-for="(product, index) in products" :key="index" class="  inset-shadow-[0px_-1px_0px] inset-shadow-amber-950 hover:bg-gray-600/50">
                    <td class="px-4 py-3 w-[10%]">{{ product.name }}1</td>
                    <td class="px-4 py-3 w-[15%]">{{ product.price }}1</td>
                    <td class="px-4 py-3 w-[10%]">{{ product.stock }}1</td>
                    <td class="px-4 py-3 w-[15%]">{{ product.stock }}1</td>
                    <td class="px-4 py-3 w-[10%]">{{ product.stock }}1</td>
                    <td class="px-4 py-3 w-[10%]">{{ product.category }}1</td>
                    <td class="px-4 py-3 w-[10%]">{{ product.description }}1</td>
                    <td class="px-4 py-3 w-[10%] flex  items-center gap-2  w-full">
                        <button class=" text-gray-400 mr-2" @click="editProduct(index)">
                            <font-awesome-icon icon="fa-solid fa-pen-fancy" />
                        </button>
                        <button class=" text-red-600/50" @click="deleteProduct(index)">
                            <font-awesome-icon icon="fa-solid fa-trash-can" />
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
        <div class="flex justify-between items-center">
            <p>Page 1/1 </p>
            <div class="flex  rounded-md overflow-hidden shadow-[0px_0px_3px] shadow-amber-400 *:px-2 gap-0.5">
                <div class=" flex justify-center items-center">
                        <font-awesome-icon icon="angles-left"/>
                </div>
                <div class="bg-amber-600">1</div>
                <div><font-awesome-icon icon="angles-left" class=" rotate-180"/></div>
            </div>
        </div>
    </div>

    
</div>
<div v-else class="bg-gray-950/20 p-8   " style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; ">
    <AddProduct />
</div>
</template>

<script>
import AddProduct from "./addproduct/AddProduct.vue"
import {
    products
} from "../../sharingStatus/sharingStatus.js";
export default {
    components: {
        AddProduct
    },
    setup() {
        return {
            products,
        }
    }

}
</script>

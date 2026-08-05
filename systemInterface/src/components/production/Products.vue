<template>
<div class="relative w-full h-full flex flex-col px-4 pt-2 gap-6" v-if="products.addproduct">
    <div class="relative p-3 w-full h-[12%] bg-gray-950/10 inset-shadow-[-1px_-1px_1px_rgba(255,255,0,.5)] flex justify-between rounded-md">
        <div class="relative ">
            <input type="text" class="md:w-[250px] h-full px-2  outline outline-none shadow-[0px_0px_3px] shadow-amber-300 rounded-md" placeholder="Search here...">
        </div>
       
        <div class="relative flex justify-center items-center">
            <button class=" p-1 bg-red-950 inset-shadow-[1px_1px_3px] inset-shadow-gray-800 hover:cursor-pointer rounded-md font-semibold text-[15px] shadow-[0px_0px_1px] shadow-amber-400" @click="products.addproduct=false">
                Add Item
            </button>
        </div>
    </div>

    <div class="relative h-[78%]  " style="position: relative;">
        <table class="min-w-full border border-gray-300 rounded-lg shadow-md">
            <thead class="bg-amber-400/50 w-full" >
                 <tr class="*:font-light">
                        <th class="px-4 py-2 border">Images</th>
                        <th class="px-4 py-2 border">Name</th>
                        <th class="px-4 py-2 border">Code</th>
                        <th class="px-4 py-2 border">Category</th>
                        <th class="px-4 py-2 border">Cost Price</th>
                        <th class="px-4 py-2 border">Sale Price</th>
                        <th class="px-4 py-2 border">Current Stock</th>
                        <th class="px-4 py-2 border">Action</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(product, index) in products" :key="index" class="hover:shadow-[0px_0px_3px] hover:shadow-amber-400">
                    <td class="px-4 py-2 border">{{ product.name }}</td>
                    <td class="px-4 py-2 border">{{ product.price }}</td>
                    <td class="px-4 py-2 border">{{ product.stock }}</td>
                    <td class="px-4 py-2 border">{{ product.stock }}</td>
                    <td class="px-4 py-2 border">{{ product.stock }}</td>
                    <td class="px-4 py-2 border">{{ product.category }}</td>
                    <td class="px-4 py-2 border">{{ product.description }}</td>
                    <td class="px-4 py-2 border">
                        <button class="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 mr-2" @click="editProduct(index)">
                            Edit
                        </button>
                        <button class="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600" @click="deleteProduct(index)">
                            Delete
                        </button>
                    </td>
                </tr>
            </tbody>
           
        </table>
    </div>

    <div class="bg-red-900 flex w-full h-[10%]">
e
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

<template>
  <div class="p-6">
    <h2 class="text-xl font-bold mb-4">Stock</h2>
    <table class="min-w-full border border-gray-300 rounded-lg shadow-md">
      <thead class="bg-gray-100">
        <tr>
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
        <tr v-for="(stock, index) in stocks" :key="index" class="hover:bg-gray-50">
          <td class="px-4 py-2 border">{{ stock.product }}</td>
          <td class="px-4 py-2 border">{{ stock.quantity }}</td>
          <td class="px-4 py-2 border">{{ stock.location }}</td>
          <td class="px-4 py-2 border">{{ stock.status }}</td>
          <td class="px-4 py-2 border">
            <button class="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 mr-2" @click="editStock(index)">Edit</button>
            <button class="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600" @click="deleteStock(index)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref } from "vue";

const stocks = ref([
  { product: "Laptop", quantity: 50, location: "Warehouse A", status: "In stock" },
  { product: "Phone", quantity: 20, location: "Shop B", status: "Reserved" },
]);

function editStock(index) {
  alert(`Editing stock for: ${stocks.value[index].product}`);
}

function deleteStock(index) {
  stocks.value.splice(index, 1);
}
</script>

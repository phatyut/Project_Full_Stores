<template>
<div class="relative w-full h-full  flex justify-center items-center">

    <div class="relative h-full w-[50%] bg-amber-900 ring rounded-md p-4 gap-4 *:space-y-5" style="position: relative;">
        <form class="space-y-5">
        <!-- Product Name -->
        <div>
          <label class="block text-yellow-400 mb-1">Product Name</label>
          <input type="text" placeholder="Enter product name"
            class="w-full px-4 py-2 bg-[#3b0a0a] text-yellow-100 border border-[#2a0707] rounded-lg focus:ring-2 focus:ring-yellow-400 focus:outline-none" />
        </div>

        <!-- Price -->
        <div>
          <label class="block text-yellow-400 mb-1">Price</label>
          <input type="number" value="4"
            class="w-full px-4 py-2 bg-[#3b0a0a] text-yellow-100 border border-[#2a0707] rounded-lg focus:ring-2 focus:ring-yellow-400 focus:outline-none" />
        </div>

        <!-- Stock Quantity -->
        <div>
          <label class="block text-yellow-400 mb-1">Stock Quantity</label>
          <input type="number" value="5"
            class="w-full px-4 py-2 bg-[#3b0a0a] text-yellow-100 border border-[#2a0707] rounded-lg focus:ring-2 focus:ring-yellow-400 focus:outline-none" />
        </div>

        <!-- Category -->
        <div>
          <label class="block text-yellow-400 mb-1">Category</label>
          <select
            class="w-full px-4 py-2 bg-[#3b0a0a] text-yellow-100 border border-[#2a0707] rounded-lg focus:ring-2 focus:ring-yellow-400 focus:outline-none">
            <option>Accessories</option>
            <option>Electronics</option>
            <option>Clothing</option>
          </select>
        </div>

        <!-- Description -->
        <div>
          <label class="block text-yellow-400 mb-1">Description</label>
          <textarea rows="3" placeholder="Enter product description"
            class="w-full px-4 py-2 bg-[#3b0a0a] text-yellow-100 border border-[#2a0707] rounded-lg focus:ring-2 focus:ring-yellow-400 focus:outline-none"></textarea>
        </div>

        <!-- Submit -->
        <button type="submit"
          class="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition">
          Add Product
        </button>
      </form>

    </div>
</div>
</template>

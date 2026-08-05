<template>
    <div class="flex flex-col ">
        <div class="w-full h-full p-2 md:inset-shadow-[0px_-1px_0px] md:inset-shadow-amber-400/50 ">
            <p class=" font-semibold text-[20px]">
                Recent Order
            </p>
        </div>
        <div class="relative flex flex-col py-2">
           <table border="1">
             <thead>
               <tr class=" bg-gray-500/20 *:text-[15px] *:py-2" >
                 <th>Order ID</th>
                 <th>Customer</th>
                 <th>Status</th>
                 
               </tr>
             </thead>
             <tbody>
               <tr class="*:text-center">
                 <td>0001</td>
                 <td>John Doe</td>
                 <td class="text-green-800">Pending</td>              
               </tr>
               <tr class="*:text-center">
                 <td>0001</td>
                 <td>John Doe</td>
                 <td class="text-amber-500/50">Shipped</td>              
               </tr>
               <tr class="*:text-center">
                 <td>0001</td>
                 <td>John Doe</td>
                 <td class="text-red-700">Cancelled</td>              
               </tr>
               <tr class="*:text-center">
                 <td>0001</td>
                 <td>John Doe</td>
                 <td class="text-white">180$</td>              
               </tr>
             </tbody>
           </table>
        </div>
    </div>
</template>
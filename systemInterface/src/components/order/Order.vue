<template>
<div class="relative w-full l h-full p-4 pb-0  " style="position: relative;">
    <div class="w-full h-full flex flex-col gap-4">
        <div class=" w-full flex justify-between  ">
            <div>
                <p class="font-bold text-[18px]">Create Order</p>
            </div>
            <div>
                <button @click="orders.ordercomp =false"> Add Order</button>
            </div>
        </div>
        <div class="relative w-full h-full">
            <!-- <component :is="orders.ordercomp ? 'OrderList':'AddOrder'"></component> -->
             <OrderList></OrderList>
        </div>
    </div>


    <div class=" w-full h-full" style="position: absolute; top: 0%; left: 0%;">
        <AddOrder></AddOrder>
    </div>

</div>
</template>
<script>
import { orders } from '../../sharingStatus/sharingStatus.js';
import AddOrder from './addorder/AddOrder.vue';
import OrderList from './orderList/OrderList.vue';
export default{
    components:{
        AddOrder,
        OrderList
    },

    setup(){
        return {
            orders
        }
    }
}
</script>

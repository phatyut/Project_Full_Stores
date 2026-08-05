import {createRouter,createWebHistory } from "vue-router";
import Test from "../test/test.vue";
import Viewdata from "../components/viewdata/Viewdata.vue";
import Setting from "../components/setting/Setting.vue";
import Products from "../components/production/Products.vue";
import Users from "../components/users/Users.vue";
import Home from "../components/home/Home.vue";
import Web from "../components/web/Web.vue";
import Supplier from "../components/supplier/Supplier.vue";
import Reports from "../components/reports/Reports.vue";
import Sale from "../components/sale/Sale.vue";
import Stock from "../components/stock/Stock.vue";
import Order from "../components/order/Order.vue";

//  this block for testing import


const routes=[
    { path:"/test",component:Test},
    { path:"/view",component:Viewdata},
    {path:"/",redirect:"/view"},
    {path:"/setting",component:Setting},
    {path:"/products",component:Products},
    {path:"/users",component:Users},
    {path:"/home",component:Home},
    {path:"/web",component:Web},
    {path:"/supplier",component:Supplier},
    {path:"/reports",component:Reports},
    {path:"/sale",component:Sale},
    {path:"/stock",component:Stock},
    {path:"/order",component:Order},
    
    
    // testing


]

const router=createRouter({
    history:createWebHistory(),
    routes
}) 

export default router;
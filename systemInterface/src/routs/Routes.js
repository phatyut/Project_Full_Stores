import {createRouter,createWebHistory } from "vue-router";
import Test from "../test/test.vue";
import Viewdata from "../components/viewdata/Viewdata.vue";
import Setting from "../components/setting/Setting.vue";
import Products from "../components/production/Products.vue";
import Users from "../components/users/Users.vue";
import Home from "../components/home/Home.vue";

const routes=[
    { path:"/test",component:Test},
    { path:"/view",component:Viewdata},
    {path:"/",redirect:"/view"},
    {path:"/setting",component:Setting},
    {path:"/products",component:Products},
    {path:"/users",component:Users},
    {path:"/home",component:Home},
]

const router=createRouter({
    history:createWebHistory(),
    routes
}) 

export default router;
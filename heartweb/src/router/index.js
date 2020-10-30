import Vue from "vue"
import Router from 'vue-router'

Vue.use(Router);

export default new Router({

    routes:  [
        {
        
            path: "/",
            component: ()=> import("@/views/Menu"),
        //     children:[
        //         {
        //         path: "",
        //         name: "Menu",
        //         component: ()=> import("@/components/menuv2"),
        //     }
        // ],              
        },
        // {
        //     path:"/Change",
        //     name:"Change",
        //     component: ()=> import("@/views/Change_Password"),
        // },
        {
            path:"/Thitipat",
            name:"Thitipat",
            component: ()=> import("@/views/Thitiphat"),
           
        },
        {
            path:"/Jiraporn",
            name:"Jiraporn",
            component: ()=> import("@/views/Jiraporn"),
        },
        {
            path:"/Chawprapa",
            name:"Chawprapa",
            component: ()=> import("@/views/Chawprapa"),
        },
        {
            path:"/Group",
            name:"Group",
            component: ()=> import("@/views/Group"),
        },
        
    ]
})
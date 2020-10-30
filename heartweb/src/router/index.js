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
            path:"/Thitipat2",
            name:"Jiraporn",
            conponent: ()=> import("@/views/Thitiphat"),
        },
        {
            path:"/Thitipat",
            name:"Thitipat",
            component: ()=> import("@/views/Thitiphat"),
           
        },
       
        
    ]
})
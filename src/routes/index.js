import VueRouter from 'vue-router'
import Home from '@/pages/Home'
import Login from '@/pages/Login'

export default new VueRouter({
    routes:[
        {
            path:'',
            redirect:'/login'
        },
        {
            path:'/home',
            component:Home
        },
        {
            path:'/login',
            component:Login
        }
    ]
})
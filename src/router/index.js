import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        /*设置默认路由*/
        path: '/',
        redirect: '/login',
        name: 'Default'
    },
    {
        /*仪表盘*/
        path: '/dashboard',
        name: 'Dashboard',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/Dashboard.vue'),
        children: [
            {
                /*仪表盘默认*/
                path: '/',
                redirect: 'index'
            },
            {
                path: 'index',
                components: {
                    dash: () => import('@/views/subViews/dashboardIndex')
                }
            }
        ]
    },
    {
        /*登录*/
        path: '/login',
        name: 'Login',
        component: () => import('@/views/Login')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router

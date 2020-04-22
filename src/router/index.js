import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        meta: {layout: 'main'},
        component: () => import('@/views/Home.vue')
    },
    {
        path: '/poll',
        name: 'Poll',
        meta: {layout: 'main'},
        component: () => import('@/views/Poll.vue'),
    },
    {
        path: '/users',
        name: 'Users',
        meta: {layout: 'main'},
        component: () => import('@/views/Users.vue')
    },
    {
        path: '/blacklist',
        name: 'Blacklist',
        meta: {layout: 'main'},
        component: () => import('@/views/Blacklist.vue')
    },
    {
        path: '/call',
        name: 'Call',
        meta: {layout: 'main'},
        component: () => import('@/views/Call.vue')
    }
]

const router = new VueRouter({
    routes
})

export default router

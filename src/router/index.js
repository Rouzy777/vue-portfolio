import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Главная',
        component: () => import('../views/Home.vue')
    },
    {
        path: '/about',
        name: 'О себе',
        component: () => import('../views/About.vue')
    },
    {
        path: '/skills',
        name: 'Навыки',
        component: () => import('../views/Skills.vue')
    },
    {
        path: '/projects',
        name: 'Проекты',
        component: () => import('../views/Projects.vue')
    },
    {
        path: '/contact',
        name: 'Контакты',
        component: () => import('../views/Contact.vue')
    }
]

const router = new VueRouter({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes
})

export default router

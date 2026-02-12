import { createRouter, createWebHistory } from 'vue-router'
// import GreetingView from '../views/GreetingView.vue'
// import AuthView from '../views/AuthView.vue'
// import HomePageView from '../views/HomePageView.vue'

const routes = [
    {
        path: '/',
        name: 'greeting',
        component: () => import('../views/GreetingView.vue'),
    },
    {
        path: '/auth',
        name: 'auth',
        component: () => import('../views/AuthView.vue'),
        redirect: '/auth/login',
        children: [
            {
                path: 'login',
                name: 'login',
                component: () => import('../views/LoginView.vue'),
            },
            {
                path: 'register',
                name: 'register',
                component: () => import('../views/RegistrationView.vue'),
            },
        ],
    },
    {
        path: '/map',
        name: 'home',
        component: () => import('../views/HomePageView.vue'),
    },
]

export const router = createRouter({
    history: createWebHistory(),
    routes,
})

// const routes = [
//     { path: '/', component: GreetingView },
//     { path: '/auth', component: AuthView },
//     { path: '/map', component: HomePageView },
// ]

// export const router = createRouter({
//     history: createWebHistory(),
//     routes,
// })

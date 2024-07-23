import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from './Home.vue';
import FormView from './FormView.vue';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/form',
        name: 'Form',
        component: FormView
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
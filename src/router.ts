import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from './Home.vue';
import FormView from './FormView.vue';
import ContactView from './ContactView.vue';

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
    },
    {
        path: '/contact',
        name: 'Contact',
        component: ContactView
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
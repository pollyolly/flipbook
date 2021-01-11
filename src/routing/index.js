
import Vue from 'vue'
import Router from 'vue-router';
import Home from '../views/Home';

// const isAdmin = false;

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('../views/Login')
        },
        {
            path: '/flipbook',
            name: 'flipbook',
            component: () => import('../views/Flipbook')
        },
        {
            path: '/user',
            name: 'user',
            component: () => import('../views/User')
        },
        {
            path: '/template',
            name: 'template',
            component: () => import('../views/Template')
        },
        {
            path: '/settings',
            name: 'settings',
            component: () => import('../views/Settings'),
            // beforeEnter: (to, from, next) =>{
            //     if(isAdmin)  { next(); }
            //     else { next('/login'); }
            // }
        },
        {
            path: '/about',
            name: 'about',
            component: () => import('../views/About')
        },
        {
            path: '/adminhome',
            name: 'adminhome',
            component: () => import('../views/AdminHome'),
            // beforeEnter: (to, from, next) =>{
            //         if(isAdmin)  { next(); }
            //         else { next('/login'); }
            // }
        },
        {
            path: '/adminuser',
            name: 'adminuser',
            component: () => import('../views/AdminUser'),
            // beforeEnter: (to, from, next) =>{
            //     if(isAdmin)  { next(); }
            //     else { next('/login'); }
            // }
        },
        {
            path: '/logs',
            name: 'logs',
            component: () => import('../views/Logs'),
            // beforeEnter: (to, from, next) =>{
            //     if(isAdmin)  { next(); }
            //     else { next('/login'); }
            // }
        },
        { path: '*', redirect: '/' }
    ]
});
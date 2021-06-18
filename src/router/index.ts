import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import authenticationGuard from '@/router/AuthenticationGuard';
import Home from '@/components/Home/Home.vue';
import Login from '@/components/Login/Login.vue';
import Register from '@/components/Register/Register.vue';
import HomeGlobal from '@/components/Home/HomeGlobal/HomeGlobal.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
  {
    path: '/register',
    name: 'register',
    component: Register,
  },
  {
    path: '/',
    name: 'home',
    component: Home,
    children: [
      {
        path: '',
        name: 'home',
        component: HomeGlobal,
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

router.beforeEach((to, from, next) => {
  authenticationGuard(to, from, next);
});

export default router;

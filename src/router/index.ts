import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import authenticationGuard from '@/router/AuthenticationGuard';
import Home from '@/components/Home/Home.vue';
import Login from '@/components/Login/Login.vue';
import Register from '@/components/Register/Register.vue';
import HomeGlobal from '@/components/Home/HomeGlobal/HomeGlobal.vue';
import HomeTag from '@/components/Home/HomeTag/HomeTag.vue';
import Settings from '@/components/Settings/Settings.vue';
import Article from '@/components/Article/Article.vue';

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
    path: '/settings',
    name: 'settings',
    component: Settings,
  },
  {
    path: '/',
    name: 'home',
    component: Home,
    children: [
      {
        name: 'home-global',
        path: '',
        component: HomeGlobal,
      },
      {
        path: 'my-feed',
        name: 'my-feed-home',
        component: HomeGlobal,
      },
      {
        path: 'tag/:tag',
        name: 'tag-home',
        component: HomeTag,
        props: true,
      },
    ],
  },
  {
    path: '/article/:articleSlug',
    name: 'article',
    component: Article,
    props: true,
  },
];

const router = new VueRouter({
  routes,
});

router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0);
  authenticationGuard(to, from, next);
});

export default router;

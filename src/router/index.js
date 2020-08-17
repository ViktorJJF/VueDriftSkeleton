import Vue from 'vue';
import Router from 'vue-router';
import store from '@/store';

Vue.use(Router);

let routes = [
  {
    path: '/login',
    name: 'AuthLogin',
    component: () => import('@/views/AuthLogin.vue'),
  },
  {
    path: '/',
    component: () => import('@/layouts/AdminLayout.vue'),
    meta: {
      requiresAuth: true,
    },
    name: 'AdminLayout',
    redirect: {
      name: 'ListBrands',
    },
    children: [
      {
        path: '/marcas/listado',
        name: 'ListBrands',
        component: () => import('@/views/ListBrands.vue'),
      },
      {
        path: '/marcas/crear',
        name: 'CreateBrands',
        component: () => import('@/views/CreateBrands.vue'),
      },
    ],
  },
  {
    path: '*',
    component: () => import('@/components/common/notFound.vue'),
  },
];

const router = new Router({
  routes,
  mode: 'history',
});

router.beforeEach((to, from, next) => {
  // checkForUpdates();
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  const isTokenSet = store.getters['authModule/isTokenSet'];
  if (requiresAuth && !isTokenSet) {
    return next({ name: 'login' });
  }
  // checkIfTokenNeedsRefresh();
  // store.commit("successModule/success", null);
  // store.commit("errorModule/error", null);
  return next();
});

export default router;

import index from './components/index.vue';
import mock from './components/mock.vue';
import interfacePage from './components/interface.vue';

export default {
    // base: process.env.NODE_ENV === "production" ? '/' : '/web/',
    mode: 'history',
    routes: [{
        path: '/',
        component: index
    }, {
        path: '/index',
        component: index
    }, {
        path: '/mock',
        component: mock
    }, {
        path: '/interfacePage',
        component: interfacePage
    }, {
        path: '/async',
        component: () => import(/* webpackChunkName: "async" */ './components/async.vue')
    }]
};

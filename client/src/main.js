import Vue from 'vue';
import iView from 'iview';
// import 'iview/dist/styles/iview.css';

import VueRouter from 'vue-router';
import routerConfig from './router';

import App from './app.vue';

Vue.use(iView);
Vue.use(VueRouter);

const router = new VueRouter(routerConfig);

new Vue({
    el: '#app',
    router: router,
    render: h => h(App)
});

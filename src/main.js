// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import VueAwesomeSwiper from 'vue-awesome-swiper';
// eslint-disable-next-line
import 'swiper/dist/css/swiper.css';

import ajax from '@/components/js/ajax';

import DhHeader from '@/components/header/header';
import DhFooter from '@/components/footer/footer';

import Vue from 'vue';
import App from './App';
import router from './router';

Vue.use(VueAwesomeSwiper/* ,{ default global options } */);

Vue.config.productionTip = false;
Vue.prototype.ajax = ajax;

Vue.component('DhHeader', DhHeader);
Vue.component('DhFooter', DhFooter);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});

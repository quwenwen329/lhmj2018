// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import ajax from '@/components/js/ajax';

import DhHeader from '@/components/header/header';

import Vue from 'vue';
import App from './App';
import router from './router';

Vue.config.productionTip = false;
Vue.prototype.ajax = ajax;

Vue.component('DhHeader', DhHeader);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});

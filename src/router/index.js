import Vue from 'vue';
import Router from 'vue-router';
import Index from '@/page/index';
import todo from '@/page/todo';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: '大赛首页',
      component: Index,
    }, {
      path: '/jxsz',
      name: '奖项设置',
      component: todo,
    }, {
      path: '/bmcs',
      name: '报名参赛',
      component: todo,
    }, {
      path: '/spph',
      name: '实盘排行',
      component: todo,
    }, {
      path: '/xwgg',
      name: '新闻公告',
      component: todo,
    }, {
      path: '/ljry',
      name: '历届荣耀',
      component: todo,
    },
  ],
});

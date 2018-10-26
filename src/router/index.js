import Vue from 'vue';
import Router from 'vue-router';
import Index from '@/page/index/index';
import todo from '@/page/todo';
import xwzx from '@/page/xwzx/xwzx';
import xwzxDetail from '@/page/xwzx/detail/index';
import sxzx from '@/page/sxzx/sxzx';
import sxzxDetail from '@/page/sxzx/detail/index';

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
      component: xwzx,
    }, {
      path: '/gameRules',
      name: '竞赛规则',
      component: todo,
    }, {
      path: '/announcement',
      name: '大赛公告',
      component: todo,
    }, {
      path: '/announcement/detail',
      name: '大赛公告详情',
      component: todo,
    }, {
      path: '/ljry',
      name: '历届荣耀',
      component: todo,
    }, {
      path: '/xwzx/detail',
      name: '新闻中心详情',
      component: xwzxDetail,
    }, {
      path: '/sxzx',
      name: '视讯中心',
      component: sxzx,
    }, {
      path: '/sxzx/detail',
      name: '视讯中心详情',
      component: sxzxDetail,
    },
  ],
});

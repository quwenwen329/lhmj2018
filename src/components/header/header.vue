<template>
  <div class="header">
    <div class="nav-wapper">
      <div class="nav">
        <div class="left">
          <i class="lhmj_logo"></i>
          <div class="line"></div>
          <i class="dhqh_logo"></i>
        </div>
        <div class="right">
          <router-link :to="{ name: '大赛首页'}">大赛首页</router-link>
          <router-link :to="{ name: '奖项设置'}">奖项设置</router-link>
          <router-link :to="{ name: '报名参赛'}">报名参赛</router-link>
          <router-link :to="{ name: '实盘排行'}">实盘排行</router-link>
          <router-link :to="{ name: '新闻公告'}">新闻公告</router-link>
          <router-link :to="{ name: '历届荣耀'}">历届荣耀</router-link>
          <span class="login">
            您好，请<a  href="/">登录</a>
          </span>
        </div>
        <div class="margin">
          <div class="triangle"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DhHeader',
};
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "header.styl";
</style>

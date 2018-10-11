<template>
  <div class="index">
    <dh-header>顶部导航</dh-header>
    <dh-notice>公告</dh-notice>
    <dh-rank>领先排行</dh-rank>
    <div>热门榜单</div>
    <div>大赛概览</div>
    <div>视讯中心</div>
    <div>新闻中心</div>
    <div>历届荣耀</div>
  </div>
</template>

<script>
import DhNotice from './notice/notice';
import DhRank from './rank/rank';

export default {
  name: 'Index',
  components: {
    DhNotice,
    DhRank,
  },
};
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "index.styl";
</style>

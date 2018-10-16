<template>
  <div class="index">
    <dh-header>顶部导航</dh-header>
    <dh-notice>公告</dh-notice>
    <dh-rank>领先排行</dh-rank>
    <dh-hot-list>热门榜单</dh-hot-list>
    <dh-overview>大赛概览</dh-overview>
    <div class="video-new">
      <dh-video>视讯中心</dh-video>
      <dh-news>新闻中心</dh-news>
    </div>
    <dh-glory>历届荣耀</dh-glory>
    <dh-footer></dh-footer>
  </div>
</template>

<script>
import DhNotice from './notice/notice';
import DhRank from './rank/rank';
import DhHotList from './hotList/hotList';
import DhOverview from './overview/overview';
import DhVideo from './video/video';
import DhNews from './news/news';
import DhGlory from './glory/glory';

export default {
  name: 'Index',
  components: {
    DhNotice,
    DhRank,
    DhHotList,
    DhOverview,
    DhVideo,
    DhNews,
    DhGlory,
  },
};
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "index.styl";
</style>

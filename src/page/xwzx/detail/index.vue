<template>
  <div class="announcement-detail">
    <dh-header>顶部导航</dh-header>
    <div class="need-bg">
      <div class="bg"></div>
      <div class="title-wapper"><i class="img-title"></i></div>
      <div class="content">
        <div class="title">{{article.title}}</div>
        <div class="time">时间：{{article.time}}</div>
        <div class="article">
          <p class="xwzx-paragraph" >{{article.paragraphs}}</p>
        </div>
      </div>
    </div>
    <dh-footer></dh-footer>
  </div>
</template>

<script>
export default {
  name: 'xwzxDetail',
  data() {
    return {
      article: {},
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    async getData() {
      this.article = await this.ajax.getXWZXDetail();
    },
  },
};
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../components/config.styl"
  @import "index.styl";
</style>

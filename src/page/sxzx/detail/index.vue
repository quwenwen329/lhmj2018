<template>
  <div class="announcement-detail">
    <dh-header>顶部导航</dh-header>
    <div class="need-bg">
      <div class="bg"></div>
      <div class="title-wapper"><i class="img-title"></i></div>
      <div class="content">
        <div class="title">{{article.title}}</div>
        <div class="article">
          <p class="sxzx-paragraph" >
            <!--{{article.hrefUrl}}-->
            <embed src="http://player.youku.com/player.php/sid/XMzQ0NTc5NTgxMg==/v.swf" allowfullscreen="true" flashvars="isAutoPlay=true" quality="high" width="955" height="720" align="middle"
                   allowscriptaccess="always" type="application/x-shockwave-flash">
          </p>
        </div>
      </div>
    </div>
    <dh-footer></dh-footer>
  </div>
</template>

<script>
export default {
  name: 'sxzxDetail',
  data() {
    return {
      article: null,
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    async getData() {
      this.article = await this.ajax.getSXZXDetail();
    },
  },
};
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../components/config.styl"
  @import "index.styl";
</style>

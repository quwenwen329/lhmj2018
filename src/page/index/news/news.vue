<template>
  <div class="news-wapper">
    <div class="title-wapper"><i class="title"></i></div>
    <div class="info-wapper">
      <a href="/" class="more">更多 >></a>
    </div>
    <div class="news">
      <div class="item" v-for="item in [0,1,2,]" :key="item">
        <div class="pic"></div>
        <div class="info">
          <div class="title">
            十年破晓——2018蓝海密剑中期报告十年破晓——2018蓝海密剑中期报告十年破晓——2018蓝海密剑中期报告
          </div>
          <div class="date">时间:2018-07-02</div>
          <div class="text">
            十年破晓——2018蓝海密剑中期报告十年破晓——2018蓝海密剑中期报告十年破晓——2018蓝海密剑中期报告
            十年破晓——2018蓝海密剑中期报告十年破晓——2018蓝海密剑中期报告十年破晓——2018蓝海密剑中期报告
            十年破晓——2018蓝海密剑中期报告十年破晓——2018蓝海密剑中期报告十年破晓——2018蓝海密剑中期报告
            十年破晓——2018蓝海密剑中期报告十年破晓——2018蓝海密剑中期报告十年破晓——2018蓝海密剑中期报告
          </div>
          <div class="more">
            <a href="/" class="more">
              &lt;详情&gt;
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DhNews',
};
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "news.styl";
</style>

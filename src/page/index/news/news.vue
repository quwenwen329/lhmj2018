<template>
  <div class="news-wapper">
    <div class="title-wapper"><i class="title"></i></div>
    <div class="info-wapper">
      <a href="/" class="more">更多 >></a>
    </div>
    <div class="news">
      <div class="item" v-for="(item,index) in data" :key="index">
        <img class="pic" :src="item.pic"/>
        <div class="info">
          <div class="title">
            {{item.title}}
          </div>
          <div class="date">时间:{{item.date}}</div>
          <div class="text">
            {{item.info}}
          </div>
          <div class="more">
            <a :href="item.url" class="more">
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
  data() {
    return {
      data: [],
    };
  },
  created() {
    this.GetData();
  },
  methods: {
    async GetData() {
      const data = await this.ajax.news();
      this.data = data;
    },
  },
};
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "news.styl";
</style>

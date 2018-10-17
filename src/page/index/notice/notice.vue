<template>
  <div class="notice-wapper">
    <div class="notice">
      <i class="line"></i>
      <span class="title">最新公告</span>
      <a class="text" :href="data[0].url">{{data[0].title}}</a>
      <a href="#" class="more">更多公告 >></a><!--todo-->
    </div>
  </div>
</template>

<script>
export default {
  name: 'DhNotice',
  data() {
    return {
      data: [
        {
          title: '',
          url: './',
        },
      ],
    };
  },
  created() {
    this.GetData();
  },
  methods: {
    async GetData() {
      const data = await this.ajax.notice();
      this.data = data;
    },
  },
};
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "notice.styl";
</style>

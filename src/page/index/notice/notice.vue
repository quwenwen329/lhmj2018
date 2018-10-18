<template>
  <div class="notice-wapper">
    <div class="notice">
      <i class="line"></i>
      <span class="title">最新公告</span>
      <a class="text" v-for="(itme,index) in data" :key="index" v-if="index==0"
         :href="itme.url">{{itme.title}}</a>
      <a href="#" class="more">更多公告 >></a><!--todo-->
    </div>
  </div>
</template>

<script>
export default {
  name: 'DhNotice',
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
      const data = await this.ajax.notice();
      this.data = data;
    },
  },
};
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "notice.styl";
</style>

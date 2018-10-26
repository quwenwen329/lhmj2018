<template>
  <div class="sxzx-announcement">
    <dh-header>顶部导航</dh-header>
    <div class="sxzx-need-bg">
      <div class="bg"></div>
      <div class="title-wapper"><i class="img-title"></i></div>
      <div class="content">
          <div class="one-content"
               v-for="one in lists"
               :key="one.id"
               @click="showDetail(one.id)">
            <div class="time">{{one.time}}</div>
            <div class="title">{{one.title}}</div>
          </div>
      </div>
    </div>
    <dh-footer></dh-footer>
  </div>
</template>

<script>
export default {
  name: 'XWZXannouncement',
  data() {
    return {
      lists: null,
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    async getData() {
      this.lists = await this.ajax.getSXZXList();
    },
    showDetail(id) {
      this.$router.push({
        path: '/sxzx/detail',
        query: { id },
      });
    },
  },
};
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../components/config.styl"
  @import "sxzx.styl";
</style>

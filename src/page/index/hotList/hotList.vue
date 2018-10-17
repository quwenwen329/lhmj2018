<template>
  <div class="hot-list">
    <div class="title-wapper"><i class="title"></i></div>
    <div class="list">
      <div class="item" v-for="item in data" :key="item.ID">
        <div class="title">{{item.title}}</div>
        <div class="text" :class="{'down':item.color=='green'}">
          {{item.text}}
        </div>
        <img class="icon" :src="item.icon">
        <div class="military-rank">{{item.military}}</div>
        <div class="ID">{{item.ID}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DhHotList',
  data() {
    return {
      data: {},
    };
  },
  created() {
    this.GetData();
  },
  methods: {
    async GetData() {
      const data = await this.ajax.hotList();
      this.data = data;
    },
  },
};
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "hotList.styl";
</style>

<template>
  <div class="hot-list">
    <div class="title-wapper"><i class="title"></i></div>
    <div class="list">
      <div class="item" v-for="item in [0,1,2,3,4]" :key="item">
        <div class="title">日赚净值</div>
        <div class="text" :class="{'down':item==3}">5.2342</div>
        <div class="icon">{{item+1}}</div>
        <div class="military-rank">五星上将</div>
        <div class="ID">老男孩</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DhHotList',
};
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "hotList.styl";
</style>

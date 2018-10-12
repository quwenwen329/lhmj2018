<template>
  <div class="overview">
    <div class="title-wapper"><i class="title"></i></div>
    <div class="datas">
      <div class="item qygm"><i></i>权益规模：635.34亿</div>
      <div class="line"></div>
      <div class="item ljcs"><i></i>历届参赛：1234567人</div>
      <div class="line"></div>
      <div class="item jyl"><i></i>净盈利：-123万</div>
    </div>
    <div class="chart-wapper">
      <div class="chart">
        <div class="nav nav150">
          <div class="item active">蓝海密剑指数</div>
          <div class="item">选手权益规模</div>
          <div class="item">盈亏人数统计</div>
          <div class="item">军种分布人数</div>
        </div>
        <div id="chart1"></div>
      </div>
      <div class="line"></div>
      <div class="chart">
        <div class="nav nav140">
          <div class="item active">净值前十</div>
          <div class="item">净值前二十</div>
          <div class="item">净值前三十</div>
          <div class="item">盈利前十</div>
          <div class="item">盈利前二十</div>
          <div class="item">盈利前三十</div>
        </div>
        <div id="chart2"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DhOverview',
};
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "overview.styl";
</style>

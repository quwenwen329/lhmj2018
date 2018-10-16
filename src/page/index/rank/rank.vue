<template>
  <div class="rank-wapper">
    <div class="rank">
      <div class="title-wapper"><i class="title"></i></div>
      <div class="table-wapper">
        <div class="info-wapper">
          <span class="info">
            排名数据更新时间：东航选手17:30左右，盟军选手21:30左右
          </span>
          <a href="/" class="more">第十赛季 >></a>
        </div>
        <div class="military-ranks-wapper">
          <div v-for="(item ,index) in militaryRanks"
               class="military-ranks"
               :class="{active:index==0}"
               :key="item">
            {{item}}
          </div>
        </div>
        <div class="table">
          <div class="thead">
            <div class="thead-td" v-for="item in tableTitles" :key="item">
              {{item}}
            </div>
          </div>
          <div class="tr" v-for="index1 in [0,1,2,3,4,5,6,7,8]" :key="index1">
            <div class="td index">
              <i v-if="index1+1<=3" :class="{ 'rank-1': index1+1==1,
               'rank-2': index1+1==2,'rank-3': index1+1==3}"></i>
              <span v-if="index1+1>3">{{index1+1}}</span>
            </div>
            <div class="td">选手名称</div>
            <div class="td star"><i></i></div>
            <div class="td up">4.4018<i></i></div>
            <div class="td text-r">1234567890.00</div>
            <div class="td text-r">0.00</div>
            <div class="td text-r">0.00</div>
            <div class="td text-r">00.00%</div>
            <div class="td">五星上将</div>
          </div>
          <div class="tr">
            <div class="td index">10</div>
            <div class="td">选手名称</div>
            <div class="td star"><i></i><i></i><i></i></div>
            <div class="td down">0.4018<i></i></div>
            <div class="td text-r">1234567890.00</div>
            <div class="td text-r">0.00</div>
            <div class="td text-r">0.00</div>
            <div class="td text-r">00.00%</div>
            <div class="td">五星上将</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DhRank',
  data() {
    return {
      militaryRanks: ['综合评级', '全部选手', '基金组', '集团军', '导弹部队',
        '空军', '海军', '预备役', '机枪手', '远征军', '盟军'],
      tableTitles: ['排名', '选手名称', '综合评级', '本届净值', '盈利额',
        '仓位', '平仓盈亏比', '交易胜率', '衔级'],
      data1: ['1000', '选手名称选手名称', '综合评级综合评级综合评级', '1.0000', '12345678901234.00',
        '0.12', '1.66', '56.56%', '五星上将'],
    };
  },
};
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "rank.styl";
</style>

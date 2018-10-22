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
               :class="{active:item.id==CmilitaryRanks}"
               @click="CmilitaryRanks=item.id"
               :key="index">
            {{item.name}}
          </div>
        </div>
        <div class="table">
          <div class="thead">
            <div class="thead-td"
                 v-for="(item,index) in tableTitles"
                 v-if="!(CmilitaryRanks!=='zhpj'&&item=='综合评级')"
                 :class="{star:item=='综合评级'}"
                 :key="index">
              {{item}}
            </div>
          </div>
          <div class="tr" v-for="(item,index) in data[CmilitaryRanks]" :key="index">
            <div class="td index">
              <i v-if="index+1<=3" :class="{ 'rank-1': index+1==1,
               'rank-2': index+1==2,'rank-3': index+1==3}"></i>
              <span v-if="index+1>3">{{index+1}}</span>
            </div>
            <div class="td">{{item.ID}}</div>
            <div class="td star" v-if="CmilitaryRanks=='zhpj'">
              <i v-for="(item,index) in new Array(item.star)" :key="index"></i>
            </div>
            <div class="td " :class="item.bjjzicon">{{item.bjjz}}<i></i></div>
            <div class="td text-r">{{item.yle}}</div>
            <div class="td text-r">{{item.cw}}</div>
            <div class="td text-r">{{item.pcykb}}</div>
            <div class="td text-r">{{item.jysl}}%</div>
            <div class="td">{{item.xj}}</div>
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
      CmilitaryRanks: 'zhpj',
      militaryRanks: [
        { id: 'zhpj', name: '综合评级' },
        { id: 'qbxs', name: '全部选手' },
        { id: 'jjz', name: '基金组' },
        { id: 'jtj', name: '集团军' },
        { id: 'ddbd', name: '导弹部队' },
        { id: 'kj', name: '空军' },
        { id: 'hj', name: '海军' },
        { id: 'yby', name: '预备役' },
        { id: 'jqs', name: '机枪手' },
        { id: 'yzj', name: '远征军' },
        { id: 'mj', name: '盟军' },
      ],
      tableTitles: ['排名', '选手名称', '综合评级', '本届净值', '盈利额',
        '仓位', '平仓盈亏比', '交易胜率', '衔级'],
      data: [],
    };
  },
  created() {
    this.GetData();
  },
  methods: {
    async GetData() {
      const data = await this.ajax.ranking();
      this.data = data;
    },
  },
};
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "rank.styl";
</style>

import index from '../../../router';
<template>
  <div class="glory-wapper">
    <div class="glory">
      <div class="title-wapper"><i class="title"></i></div>
      <div class="swiper-title-wapper">
        <div class="swiper-title">
          盈利过亿将帅风采
        </div>
      </div>
      <div class="swiper-wapper">
        <swiper :options="swiperOption">
          <!-- slides -->
          <swiper-slide class="item" v-for="(item,index) in data.fames" :key="index">
            <img :src="item.pic">
            <a class="pic">
              <div class="title">{{item.title}}</div>
            </a>
          </swiper-slide>
        </swiper>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </div>
      <div class="record">
        <div class="icon">
          <div class="title">蓝海密剑记录</div>
        </div>
        <div class="text">
          <div class="item" v-for="(item,index) in data.record" :key="index">
            <div class="crown"></div>
            <div class="title">{{item.title}}</div>
            <div class="ID">{{item.ID}}</div>
            <div class="value">{{item.value}}</div>
            <div class="up"></div>
          </div>
        </div>
      </div>
      <div class="history">
        <div class="nav">
          <div class="item"
               v-for="(item,index) in data.history"
               :key="index"
               :class="{active:index==Chistory}"
               @click="Chistory=index">
            <div class="date">{{item.date}}</div>
            <div class="session">&lt;{{item.session}}&gt;</div>
            <div class="info">{{item.info}}</div>
          </div>

        </div>
        <div class="context" v-if="data.history">
          <div class="title">
            {{data.history[Chistory].context.title}}
          </div>
          <div class="info">
            {{data.history[Chistory].context.info}}
          </div>
          <div class="table-wapper"
               v-for="(item,index) in data.history[Chistory].context.tables"
               :key="index">
            <div class="text">{{item.title}}</div>

            <table border="1" cellspacing="0">
              <tr v-for="(tr,tindex) in item.data" :key="tindex">
                <th v-if="tindex%2==0"
                    v-for="(x,xindex) in tr"
                    :key="xindex">{{x}}
                </th>
                <td v-if="tindex%2==1"
                    v-for="(x,xindex) in tr"
                    :key="xindex">{{x}}
                </td>
              </tr>
            </table>
          </div>
          <div class="more">
            <a :href="data.history[Chistory].url">
              &lt;点击查看更多详情&gt;
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DhGlory',
  data() {
    return {
      swiperOption: {
        slidesPerView: 6,
        navigation: {
          nextEl: '.glory .swiper-button-next',
          prevEl: '.glory .swiper-button-prev',
        },
      },
      Chistory: 0,
      data: {},
    };
  },
  created() {
    this.GetData();
  },
  methods: {
    async GetData() {
      const data = await this.ajax.glory();
      this.data = data;
    },
  },
};
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "glory.styl";
</style>

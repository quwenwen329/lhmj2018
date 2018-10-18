<template>
  <div class="video-wapper">
    <div class="video">
      <div class="title-wapper"><i class="title"></i></div>
      <div class="info-wapper">
        <a href="/" class="more">更多 >></a>
      </div>
      <div class="swiper-wapper">
        <swiper :options="swiperOption">
          <!-- slides -->
          <swiper-slide class="item" v-for="item in data" :key="item.title">
            <a class="pic" :href="item.url">
              <img :src="item.pic"/>
            </a>
            <div class="title">{{item.title}}</div>
          </swiper-slide>
        </swiper>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DhVideo',
  data() {
    return {
      swiperOption: {
        slidesPerView: 3,
        navigation: {
          nextEl: '.video .swiper-button-next',
          prevEl: '.video .swiper-button-prev',
        },
      },
      data: [],
    };
  },
  created() {
    this.GetData();
  },
  methods: {
    async GetData() {
      const data = await this.ajax.video();
      this.data = data;
    },
  },
};
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "video.styl";
</style>

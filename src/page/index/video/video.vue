<template>
  <div class="video-wapper">
    <div class="video">
      <div class="title-wapper"><i class="title"></i></div>
      <div class="info-wapper">
        <a href="/" class="more">更多 >></a>
      </div>
      <div class="swiper-wapper">
        <swiper  :options="swiperOption">
          <!-- slides -->
          <swiper-slide class="item" v-for="item in [0,1,2,3,4,]" :key="item">
            <div class="pic"></div>
            <div class="title">标题{{item}}</div>
          </swiper-slide>
          <swiper-slide class="item">
            <div class="pic"></div>
            <div class="title">标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题</div>
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
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },
    };
  },
};
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "video.styl";
</style>

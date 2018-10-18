<template>
  <div class="echart" ref='mychart'></div>
</template>

<script>
import echarts from 'echarts';

export default {
  name: 'DhEchart',
  props: {
    Option: {
      type: Object,
    },
  },
  mounted() {
    this.mychart = echarts.init(this.$refs.mychart);
    this.mychart.setOption(this.Option, true);
    window.onresize = () => {
      this.mychart.resize();
    };
  },
  watch: {
    Option(val) {
      this.mychart.setOption(val, true);
      this.mychart.resize();
    },
  },
};

</script>

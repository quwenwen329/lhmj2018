<template>
  <div class="overview">
    <div class="title-wapper"><i class="title"></i></div>
    <div class="datas">
      <div class="item qygm"><i></i>权益规模：{{data.qygm}}</div>
      <div class="line"></div>
      <div class="item ljcs"><i></i>历届参赛：{{data.ljcs}}</div>
      <div class="line"></div>
      <div class="item jyl"><i></i>净盈利：{{data.jyl}}</div>
    </div>
    <div class="chart-wapper">
      <div class="chart">
        <div class="nav nav150">
          <div class="item"
               v-for="(item ,index) in nav1"
               :class="{active:index==Cnav1}"
               @click="Cnav1=index"
               :key="index">
            {{item.name}}
          </div>
        </div>
        <dh-echart v-if="data.chart"
                   :Option="nav1[Cnav1].option
                   (data.chart[nav1[Cnav1].id])">
        </dh-echart>
      </div>
      <div class="line"></div>
      <div class="chart">
        <div class="nav nav140">
          <div class="item"
               v-for="(item ,index) in nav2"
               :class="{active:index==Cnav2}"
               @click="Cnav2=index"
               :key="index">
            {{item.name}}
          </div>
        </div>
        <!--{{data.chart[nav2[Cnav2].id]}}-->
        <dh-echart v-if="data.chart"
                   :Option="nav2option
                   (data.chart[nav2[Cnav2].id])">
        </dh-echart>
      </div>
    </div>
  </div>
</template>

<script>
import DhEchart from '@/components/echarts/echarts';

export default {
  name: 'DhOverview',
  components: {
    DhEchart,
  },
  data() {
    return {
      data: {},
      Cnav1: 0,
      Cnav2: 0,
      nav1: [
        {
          id: 'lhmjzs',
          name: '蓝海密剑指数',
          option(item) {
            return {
              tooltip: {
                trigger: 'axis',
                axisPointer: { type: 'line' },
                formatter(a) {
                  const res = `日期：${a[0].name}</br>蓝海密剑指数：${a[0].value}`;
                  return res;
                },
              },
              grid: {
                top: '10',
                left: '50',
                bottom: '30',
                right: '10',
              },
              xAxis: {
                type: 'category',
                data: item.date,
              },
              yAxis: {
                type: 'value',
              },
              series: [{
                data: item.value,
                type: 'line',
              }],
            };
          },
        },
        {
          id: 'xsqygm',
          name: '选手权益规模',
          option(item) {
            return {
              tooltip: {
                trigger: 'axis',
                formatter(a) {
                  const res = `日期：${a[0].name}</br>保证金：${a[0].value}`;
                  return res;
                },
              },
              grid: {
                top: '10',
                left: '66',
                bottom: '30',
                right: '10',
              },
              xAxis: {
                type: 'category',
                data: item.date,
              },
              yAxis: {
                type: 'value',
                axisLabel: {
                  formatter(v) {
                    return `${window.parseInt(v / 10000000)}千万`;
                  },
                },
              },
              series: [{
                data: item.value,
                type: 'line',
              }],
            };
          },
        },
        {
          id: 'ykrstj',
          name: '盈亏人数统计',
          option(item) {
            return {
              tooltip: {
                trigger: 'item',
                formatter: '{b} : {c}人',
              },
              legend: {
                orient: 'horizontal',
                x: 'center',
                y: 'bottom',
                data: ['盈利', '持平', '亏损'],
              },
              series: [{
                type: 'pie',
                radius: '65%',
                center: ['45%', '45%'],
                itemStyle: {
                  normal: {
                    label: {
                      position: 'inner',
                      formatter: '{b}\n{d}%',
                    },
                    labelLine: {
                      show: false,
                    },
                  },
                  emphasis: {
                    label: {
                      show: true,
                      formatter: '{b}\n{d}%',
                    },
                  },
                },
                data: item.value,
              }],
            };
          },
        },
        {
          id: 'jzfbrs',
          name: '军种分布人数',
          option(item) {
            return {
              tooltip: {
                trigger: 'axis',
              },
              grid: {
                top: '10',
                left: '50',
                bottom: '35',
                right: '10',
              },
              xAxis: {
                type: 'category',
                axisLabel: {
                  interval: 0,
                  rotate: 30,
                },
                data: item.date,
              },
              yAxis: {
                type: 'value',
              },
              series: [{
                data: item.value,
                type: 'bar',
                name: '人数',
              }],
            };
          },
        },
      ],
      nav2: [
        { id: 'jz10', name: '净值前十' },
        { id: 'jz20', name: '净值前二十' },
        { id: 'jz30', name: '净值前三十' },
        { id: 'yl10', name: '盈利前十' },
        { id: 'yl20', name: '盈利前二十' },
        { id: 'yl30', name: '盈利前三十' },
      ],
      nav2option(echartdata) {
        const option = {
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'line',
            },
            formatter(a) {
              let res = a[0].name;
              for (let i = 0; i < a.length; i += 1) {
                res += `<br/>${a[i].seriesName} : ${
                  Math.abs(a[i].value)}`;
                if (a[i].seriesName.length === 7) { res += '%'; } else { res += '人'; }
              }
              return res;
            },
          },
          grid: {
            y: 50,
            y2: 50,
            x: 50,
            x2: 50,
          },
          legend: {
            data: ['看多人数', '看空人数', '多仓权益', '空仓权益'],
          },
          xAxis: [{
            type: 'category',
            data: [1, 1, 1, 1],
            axisLabel: { interval: 0 },
          }],
          yAxis: [{
            type: 'value',
            axisLabel: {
              formatter: '{value}人',
            },
            splitNumber: '1',
          }, {
            type: 'value',
            axisLabel: {
              formatter: '{value}%',
            },
            splitNumber: '1',
          }],
          series: [
            {
              name: '看空人数',
              type: 'bar',
              stack: '总量',
              itemStyle: {
                normal: {
                  color: '#5d8dba',
                  borderRadius: 5,
                },
              },
              data: [-1],
            },
            {
              name: '看多人数',
              type: 'bar',
              stack: '总量',
              itemStyle: {
                normal: {
                  color: '#dd664e',
                  borderRadius: 5,
                },
              },
              data: [1],
            },
            {
              name: '空仓权益',
              type: 'line',
              stack: '总量',
              symbol: 'none',
              smooth: true,
              yAxisIndex: 1,
              itemStyle: {
                normal: {
                  color: '#98B9BB',
                  borderRadius: 5,
                },
              },
              data: [-1],
            },
            {
              name: '多仓权益',
              type: 'line',
              stack: '总量',
              yAxisIndex: 1,
              symbol: 'none',
              smooth: true,
              itemStyle: {
                normal: {
                  color: '#821D15',
                  borderRadius: 5,
                },
              },
              data: [1],
            },
          ],
        };
        option.xAxis[0].data = echartdata.tip;
        if (echartdata.tip.length > 20) {
          for (let i = 1; i < echartdata.tip.length; i += 2) {
            if (option.xAxis[0].data[i].indexOf('\n') < 0) {
              option.xAxis[0].data[i] = `\n${echartdata.tip[i]}`;
            }
          }
        }
        option.series[0].data = echartdata.kong;
        option.series[1].data = echartdata.duo;
        option.series[2].data = echartdata.kongqy;
        option.series[3].data = echartdata.duoqy;
        return option;
      },
    };
  },
  created() {
    this.GetData();
  },
  methods: {
    async GetData() {
      const data = await this.ajax.overview();
      this.data = data;
    },
  },
}
;
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "overview.styl";
</style>

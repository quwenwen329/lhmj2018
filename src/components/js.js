function f(echartdata) {
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
    toolbox: {
      show: true,
      feature: {
        restore: {
          show: true,
        },
        saveAsImage: {
          show: true,
        },
      },
    },
    grid: {
      y: 50,
      y2: 50,
      x: 50,
      x2: 50,
    },
    legend: {
      data: ['看多人数', '看空人数', '多仓权益百分比', '空仓权益百分比'],
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
      splitNumber: '2',
    }, {
      type: 'value',
      axisLabel: {
        formatter: '{value}%',
      },
      splitNumber: '2',
      /* boundaryGap:[2,2], */
    }],
    series: [
      {
        name: '看空人数',
        type: 'bar',
        stack: '总量',
        itemStyle: {
          normal: {
            color: 'green',
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
            color: 'red',
            borderRadius: 5,
          },
        },
        data: [1],
      },
      {
        name: '空仓权益百分比',
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
        name: '多仓权益百分比',
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
  return option;
}

export default {
  f,
};

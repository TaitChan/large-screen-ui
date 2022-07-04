export const modelList = [
  { id: 1, w: 4, h: 2 },
  {
    id: 2,
    w: 4,
    h: 4,
    ref: 'barSimple',
    option: {
      title: {
        text: 'ECharts 入门示例',
      },
      tooltip: {},
      legend: {
        data: ['销量'],
      },
      xAxis: {
        data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'],
      },
      yAxis: {},
      series: [
        {
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20],
        },
      ],
    },
  },
  {
    id: 3,
    w: 2,
    h: 2,
    ref: 'pieSimple',
    option: {
      tooltip: {
        trigger: 'item',
      },
      legend: {
        top: '5%',
        left: 'center',
      },
      series: [
        {
          name: 'Access From',
          type: 'pie',
          radius: ['40%', '70%'],
          avoidLabelOverlap: false,
          label: {
            show: false,
            position: 'center',
          },
          emphasis: {
            label: {
              show: true,
              fontSize: '40',
              fontWeight: 'bold',
            },
          },
          labelLine: {
            show: false,
          },
          data: [
            { value: 1048, name: 'Search Engine' },
            { value: 735, name: 'Direct' },
            { value: 580, name: 'Email' },
            { value: 484, name: 'Union Ads' },
            { value: 300, name: 'Video Ads' },
          ],
        },
      ],
    },
  },
  { id: 4, w: 2, h: 2 },
  { id: 5, w: 2, h: 2 },
  { id: 6, w: 2, h: 4 },
  {
    id: 7,
    w: 4,
    h: 2,
    ref: 'lineSimple',
    option: {
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      },
      yAxis: {
        type: 'value',
      },
      series: [
        {
          data: [150, 230, 224, 218, 135, 147, 260],
          type: 'line',
        },
      ],
    },
  },
  { id: 8, w: 2, h: 2 },
  { id: 9, w: 4, h: 2 },
  { id: 10, w: 2, h: 2 },
  { id: 11, w: 2, h: 2 },
]

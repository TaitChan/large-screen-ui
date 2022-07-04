<template>
  <div class="left-container">
    <ul class="model-list">
      <li
        v-for="item in modelList"
        :key="item.label"
        @click="activeType = item.value"
        :class="activeType === item.value ? 'active' : ''"
      >
        <svg-icon :icon-class="item.icon"></svg-icon>
        <span>{{ item.label }}</span>
      </li>
    </ul>
    <template v-if="activeType === 'chart'">
      <ul class="chart-list">
        <li
          v-for="item in chartList"
          :key="item.label"
          draggable="true"
          @dragstart="dragstart($event, item)"
          @click="aa(item)"
        >
          <div>{{ item.label }}</div>
          <el-image :src="item.url" style="height: 100px"></el-image>
        </li>
      </ul>
    </template>
  </div>
</template>

<script>
  import SvgIcon from '@/components/svg-icon'
  import { useScreenStore } from '@/stores/screen'

  export default {
    name: 'HomepageLeft',
    components: { SvgIcon },
    setup() {
      const store = useScreenStore()
      const { setOption, setDragstartDom } = store
      return { setOption, setDragstartDom }
    },
    data() {
      return {
        activeType: 'chart',
        modelList: [
          { label: '标题', value: 'title', icon: '标题' },
          { label: '图表', value: 'chart', icon: '图表' },
          { label: '表格', value: 'table', icon: '表格' },
          { label: '其他', value: 'other', icon: '其他' },
        ],
        chartList: [
          {
            label: '柱状图',
            url: 'https://fastly.jsdelivr.net/gh/apache/echarts-website@asf-site/examples/data/thumb/bar-simple.webp?_v_=1655181358610',
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
            label: '折线图',
            url: 'https://fastly.jsdelivr.net/gh/apache/echarts-website@asf-site/examples/data/thumb/line-simple.webp?_v_=1655181358610',
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
          {
            label: '饼图',
            url: 'https://fastly.jsdelivr.net/gh/apache/echarts-website@asf-site/examples/data/thumb/pie-simple.webp?_v_=1655181358610',
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
        ],
      }
    },
    methods: {
      aa(item) {
        this.setOption(item.option)
      },
      dragstart(event, item) {
        this.setDragstartDom(item.option)
      },
    },
  }
</script>

<style lang="scss" scoped>
  .left-container {
    display: flex;
    justify-content: flex-start;
    height: 100%;
    .model-list {
      width: 50px;
      height: 100%;
      border-right: 1px solid rgba(0, 0, 0, 0.1);
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-top: 5px;
      li {
        height: 40px;
        width: 40px;
        //border: 1px solid rgba(0, 0, 0, 0.1);
        border-radius: 4px;
        cursor: pointer;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-bottom: 5px;
        svg {
          color: var(--color-primary);
          font-size: 16px;
        }
        span {
          transform: scale(0.9);
          transform-origin: bottom center;
          color: rgba(0, 0, 0, 0.6);
        }
        &.active {
          background: #d3d3d6;
          font-weight: 500;
        }
        &:hover:not(.active) {
          background: #dcdddf;
        }
      }
    }
    .chart-list {
      flex: 1;
      overflow-y: scroll;
      padding: 10px;
      li {
        border: 1px solid rgba(0, 0, 0, 0.1);
        border-radius: 4px;
        display: flex;
        flex-direction: column;
        box-shadow: 0 0 20px rgb(0 0 0 / 5%);
        overflow: hidden;
        margin-bottom: 10px;
        cursor: move;
        & > div:first-child {
          padding: 4px 8px;
        }
      }
    }
  }
</style>

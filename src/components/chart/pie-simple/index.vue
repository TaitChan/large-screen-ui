<template>
  <base-chart chartRef="bar-simple" :option="option"></base-chart>
  <div class="chart-option" :class="isOpen ? '' : 'close-open'">
    <div class="icon" @click="isOpen = !isOpen">{{ isOpen ? 'off' : 'on' }}</div>
    <div class="aa">模块配置</div>
  </div>
</template>

<script>
  import { getOption } from './index.js'
  import BaseChart from '@/components/base-chart'
  export default {
    name: 'pie-simple',
    components: { BaseChart },
    data() {
      return {
        option: {},
        isOpen: true,
      }
    },
    created() {
      const { option } = getOption()
      this.option = option
    },
  }
</script>

<style lang="scss" scoped>
  .chart-option {
    position: fixed;
    right: 0;
    top: 40px;
    zoom: 2;
    height: 100%;
    width: 300px;
    background: #f7f7f7;
    //box-shadow: 0 0 16px rgb(0 0 0 / 16%);
    &.close-open {
      width: 0;
      & > div:last-child {
        opacity: 0;
      }
    }
  }
  .icon {
    position: absolute;
    width: 30px;
    height: 30px;
    left: -30px;
    bottom: 85px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #f7f7f7;
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-right: none;
  }
  .aa {
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }
</style>

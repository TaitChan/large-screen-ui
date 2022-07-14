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
        <li v-for="item in chartList" :key="item.label" draggable="true" @dragstart="dragstart($event, item)">
          <div>{{ item.label }}</div>
          <el-image :src="require('@/assets/preview/' + item.picUrl + '.png')" style="height: 100px"></el-image>
        </li>
      </ul>
    </template>
  </div>
</template>

<script>
  import SvgIcon from '@/components/svg-icon'
  import { useScreenStore } from '@/stores/screen'
  import { chartList } from '@/views/homepage/mock'

  export default {
    name: 'homepage-left',
    components: { SvgIcon },
    setup() {
      const store = useScreenStore()
      const { setDragstartDom } = store
      return { setDragstartDom }
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
        chartList,
      }
    },
    methods: {
      dragstart(event, item) {
        console.log(item)
        this.setDragstartDom(item)
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

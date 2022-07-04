<template>
  <div class="mid-container" :style="{ background: bgColor }">
    <div class="grid-stack">
      <div
        class="grid-stack-item"
        v-for="item in modelList"
        :key="item.id"
        :gs-w="item.w"
        :gs-h="item.h"
        @drop="drop(item)"
        @dragover.prevent
      >
        <div
          class="grid-stack-item-content"
          :ref="item.ref"
          :key="item.ref"
          :style="{ background: layoutColor }"
          :class="layoutBorder ? 'border' : ''"
        >
          {{ item.ref }}
          {{ item.id }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { GridStack } from 'gridstack'
  import { useScreenStore } from '@/stores/screen'
  import { storeToRefs } from 'pinia'
  import { markRaw } from 'vue'

  export default {
    name: 'HomepageMid',
    props: {},
    setup() {
      const store = useScreenStore()
      const { screenWidth, screenHeight, bgColor, layoutColor, layoutBorder, dragstartDom, modelList } =
        storeToRefs(store)
      return {
        screenWidth,
        screenHeight,
        bgColor,
        layoutColor,
        layoutBorder,
        dragstartDom,
        modelList,
      }
    },
    data() {
      return {
        grid: undefined,
      }
    },
    watch: {
      // modelList: {
      //   handler() {
      //     this.$nextTick(() => {
      //       this.initChart()
      //     })
      //   },
      //   deep: true,
      // },
    },
    mounted() {
      this.grid = GridStack.init()
      this.initChart()
      // this.addNewWidget()
    },
    methods: {
      // addNewWidget() {
      //   this.grid.addWidget({
      //     x: 0,
      //     y: 0,
      //     w: 4,
      //     h: 2,
      //     content: 'hello',
      //     ref: 'nn',
      //   })
      // },
      drop(item) {
        if (Object.keys(this.dragstartDom).length > 0) {
          item.ref = new Date().getTime().toString()
          item.option = this.dragstartDom
          this.$nextTick(() => {
            this.initChart()
          })
        }
      },
      initChart() {
        let chartList = this.modelList.filter((item) => {
          return item.ref
        })
        chartList.forEach((item) => {
          /*
        https://blog.csdn.net/weixin_52691965/article/details/123529169
        markRaw：
        作用：标记一个对象，使其永远不会再成为响应式对象。
        应用场景:有些值不应被设置为响应式的，例如复杂的第三方类库等。
        当渲染具有不可变数据源的大列表时，跳过响应式转换可以提高性能。
         */
          item.chart = null
          item.chart = markRaw(this.$echarts.init(this.$refs[item.ref][0]))
          item.chart.setOption(item.option, true)
          // 自适应
          const resizeObserver = new ResizeObserver((entries) => {
            for (let entry of entries) {
              if (entry.contentBoxSize) {
                item.chart.resize()
              }
            }
          })
          resizeObserver.observe(this.$refs[item.ref][0])
        })
      },
    },
  }
</script>

<style lang="scss">
  .mid-container {
    height: 100%;
    width: 100%;
    background: #3d8ab6;
    //background: white;
    //overflow: hidden;
  }
  .grid-stack {
    //height: 100%;
  }
  .grid-stack-item {
    //border: 1px dotted white;
  }
  .grid-stack-item-content {
    background-color: white;
    border-radius: 8px;
    padding: 10px;
    &.border {
      border: 1px solid rgba(0, 0, 0, 0.1);
      box-shadow: 0 3px 8px 0 rgba(0, 0, 0, 0.03);
      &:hover {
        box-shadow: 1px 1px 4px 0 rgba(0, 0, 0, 0.13) !important;
      }
    }
  }
</style>

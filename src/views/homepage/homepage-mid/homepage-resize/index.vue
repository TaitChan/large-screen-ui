<template>
  <div class="ct-grid-item-resize">
    <!--        左右-->
    <div @mousedown="handleCircleMouseDown($event, modelValue, 'left')" class="circle circle-left ew-resize"></div>
    <div @mousedown="handleCircleMouseDown($event, modelValue, 'right')" class="circle circle-right ew-resize"></div>
    <!--        上下-->
    <div @mousedown="handleCircleMouseDown($event, modelValue, 'top')" class="circle circle-top ns-resize"></div>
    <div @mousedown="handleCircleMouseDown($event, modelValue, 'bottom')" class="circle circle-bottom ns-resize"></div>
    <!--        左上右下-->
    <div
      @mousedown="handleCircleMouseDown($event, modelValue, 'leftTop')"
      class="circle nwse-resize"
      style="top: -10px; left: -10px"
    ></div>
    <div
      @mousedown="handleCircleMouseDown($event, modelValue, 'rightBottom')"
      class="circle nwse-resize"
      style="bottom: -10px; right: -10px"
    ></div>
    <!--        左下右上-->
    <div
      @mousedown="handleCircleMouseDown($event, modelValue, 'leftBottom')"
      class="circle nesw-resize"
      style="bottom: -10px; left: -10px"
    ></div>
    <div
      @mousedown="handleCircleMouseDown($event, modelValue, 'rightTop')"
      class="circle nesw-resize"
      style="top: -10px; right: -10px"
    ></div>
  </div>
</template>

<script>
  export default {
    name: 'homepage-resize',
    props: {
      modelValue: {
        type: Object,
        default: () => {},
      },
      isMove: {
        type: Boolean,
        default: false,
      },
      scale: {
        type: Number,
        default: 1,
      },
    },
    data() {
      return {
        clientX: 0,
        clientY: 0,
        w: 0,
        h: 0,
        x: 0,
        y: 0,
        isCircleMove: false,
      }
    },
    computed: {
      scaleVal() {
        return this.scale || 1
      },
    },
    methods: {
      handleCircleMouseDown(event, item, type) {
        console.log('handleCircleMouseDown')
        event.stopPropagation()
        this.clientX = event.clientX
        this.clientY = event.clientY
        this.w = item.w
        this.h = item.h
        this.x = item.x
        this.y = item.y
        this.isCircleMove = true
        this.$emit('update:isMove', true)
        document.onmousemove = (ev) => {
          let _w = (this.clientX - ev.clientX) / this.scaleVal
          let _h = (this.clientY - ev.clientY) / this.scaleVal
          if (_w < 0 && Math.abs(_w) >= this.w) {
            return false
          }
          if (_h < 0 && Math.abs(_h) >= this.h) {
            return false
          }
          this.handleCircleMouseMove(ev, item, type)
        }
        document.onmouseup = () => {
          document.onmousemove = document.onmouseup = null
          this.isCircleMove = false
          this.$emit('update:isMove', false)
        }
      },
      handleCircleMouseMove(ev, item, type) {
        console.log('handleCircleMouseMove')
        if (this.isCircleMove) {
          //左
          if (type === 'left') {
            item.w = this.w + (this.clientX - ev.clientX) / this.scaleVal
            item.x = this.x + (ev.clientX - this.clientX) / this.scaleVal
          }
          // 右
          if (type === 'right') {
            item.w = this.w + (ev.clientX - this.clientX) / this.scaleVal
          }
          // 上
          if (type === 'top') {
            item.h = this.h + (this.clientY - ev.clientY) / this.scaleVal
            item.y = this.y + (ev.clientY - this.clientY) / this.scaleVal
          }
          // 下
          if (type === 'bottom') {
            item.h = this.h + (ev.clientY - this.clientY) / this.scaleVal
          }
          // 左上
          if (type === 'leftTop') {
            item.w = this.w + (this.clientX - ev.clientX) / this.scaleVal
            item.x = this.x + (ev.clientX - this.clientX) / this.scaleVal
            item.h = this.h + (this.clientY - ev.clientY) / this.scaleVal
            item.y = this.y + (ev.clientY - this.clientY) / this.scaleVal
          }
          // 左下
          if (type === 'leftBottom') {
            item.w = this.w + (this.clientX - ev.clientX) / this.scaleVal
            item.x = this.x + (ev.clientX - this.clientX) / this.scaleVal
            item.h = this.h + (ev.clientY - this.clientY) / this.scaleVal
          }
          // 右上
          if (type === 'rightTop') {
            item.w = this.w + (ev.clientX - this.clientX) / this.scaleVal
            item.h = this.h + (this.clientY - ev.clientY) / this.scaleVal
            item.y = this.y + (ev.clientY - this.clientY) / this.scaleVal
          }
          // 右下
          if (type === 'rightBottom') {
            item.w = this.w + (ev.clientX - this.clientX) / this.scaleVal
            item.h = this.h + (ev.clientY - this.clientY) / this.scaleVal
          }
          this.$emit('update:modelValue', item)
        }
      },
    },
  }
</script>

<style lang="scss" scoped>
  .ct-grid-item-resize {
    z-index: 2000;
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    .circle {
      position: absolute;
      border-radius: 50%;
      height: 20px;
      width: 20px;
      border: 2px solid #2d60f6;
      background: white;
      &.circle-left {
        top: calc(50% - 10px);
        left: -11px;
      }
      &.circle-right {
        top: calc(50% - 10px);
        right: -11px;
      }
      &.circle-top {
        top: -11px;
        left: calc(50% - 10px);
      }
      &.circle-bottom {
        bottom: -11px;
        left: calc(50% - 10px);
      }
      &.ew-resize {
        cursor: ew-resize;
      }
      &.ns-resize {
        cursor: ns-resize;
      }
      &.nwse-resize {
        cursor: nwse-resize;
      }
      &.nesw-resize {
        cursor: nesw-resize;
      }
    }
  }
</style>

<template>
  <div
    @mousedown="handleMouseDown($event, modelValue)"
    class="ct-grid-item"
    :class="`${isActive ? 'active ' : ''}`"
    style="position: absolute"
    :style="{
      height: `${modelValue.h}px`,
      width: `${modelValue.w}px`,
      left: `${modelValue.x}px`,
      top: `${modelValue.y}px`,
    }"
  >
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'homepage-drag-item',
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
      isActive: {
        type: Boolean,
        default: false,
      },
    },
    data() {
      return {
        clientX: 0,
        clientY: 0,
        x: 0,
        y: 0,
        isItemMove: false,
      }
    },
    computed: {
      scaleVal() {
        return this.scale || 1
      },
    },
    methods: {
      handleMouseDown(event, item) {
        console.log('handleMouseDown')
        if (this.isActive === false) {
          return false
        }
        this.clientX = event.clientX
        this.clientY = event.clientY
        this.x = item.x
        this.y = item.y
        this.isItemMove = true
        this.$emit('update:isMove', true)
        document.onmousemove = (ev) => {
          console.log('handleMouseMove')
          item.x = this.x + (ev.clientX - this.clientX) / this.scaleVal
          item.y = this.y + (ev.clientY - this.clientY) / this.scaleVal
          this.$emit('update:modelValue', item)
        }
        document.onmouseup = () => {
          document.onmousemove = document.onmouseup = null
          this.isItemMove = false
          this.$emit('update:isMove', false)
        }
      },
    },
  }
</script>

<style lang="scss" scoped>
  .ct-grid-item {
    border: 2px dashed transparent;
    &.layout-border {
      border-radius: 10px;
      box-shadow: 0 2px 20px 0 #d3d6e3;
    }
    &:hover {
      border: 2px dashed rgba(0, 0, 0, 0.2);
    }
    &.active,
    &.active:hover {
      border: 2px solid #489fe9;
      z-index: 1000;
      cursor: move;
    }
  }
</style>

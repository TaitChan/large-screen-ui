<template>
  <ul class="ct-grid-item-location">
    <li>x：{{ x }}</li>
    <li>y：{{ y }}</li>
    <li>w：{{ w }}</li>
    <li>h：{{ h }}</li>
  </ul>
</template>

<script>
  export default {
    name: 'homepage-location',
    props: {
      modelValue: {
        type: Object,
        default: () => {},
      },
    },
    computed: {
      x() {
        return Math.round(this.modelValue.x)
      },
      y() {
        return Math.round(this.modelValue.y)
      },
      w() {
        return Math.round(this.modelValue.w)
      },
      h() {
        return Math.round(this.modelValue.h)
      },
    },
  }
</script>

<style lang="scss" scoped>
  .ct-grid-item-location {
    position: absolute;
    right: 0;
    bottom: -100px;
    background: rgba(0, 0, 0, 0.5);
    border-radius: 4px;
    padding: 10px;
    color: white;
    width: 150px;
    height: 80px;
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(auto-fill, minmax(40%, 1fr));
  }
</style>

<template>
  <div class="ctv-header">
    <el-button link type="primary">
      <svg-icon icon-class="跳转" />
      发布
    </el-button>
    <el-button link type="primary">
      <i class="el-icon-view" />
      预览
    </el-button>
  </div>
</template>

<script>
  import SvgIcon from '@/components/svg-icon'
  export default {
    name: 'homepage-header',
    components: { SvgIcon },
  }
</script>

<style lang="scss" scoped>
  .ctv-header {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-right: 20px;
  }
</style>
